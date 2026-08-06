import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useScrollDepth } from './useScrollDepth'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'formacion', 'contacto']

type SimEntry = { target: { id: string }; isIntersecting: boolean }

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  observed: Element[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(el: Element) {
    this.observed.push(el)
  }

  unobserve() {}

  disconnect() {}

  simulate(entries: SimEntry[]) {
    this.callback(entries as unknown as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

function Harness() {
  useScrollDepth()
  return (
    <div>
      {SECTION_IDS.map((id) => (
        <section key={id} id={id} />
      ))}
    </div>
  )
}

function lastEvent(): Record<string, unknown> | undefined {
  const layer = window.dataLayer as Record<string, unknown>[]
  return layer[layer.length - 1]
}

function depthEvents(event: string): Array<Record<string, unknown>> {
  return (window.dataLayer as Array<Record<string, unknown>>).filter((e) => e.event === event)
}

beforeEach(() => {
  MockIntersectionObserver.instances = []
  window.dataLayer = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('useScrollDepth', () => {
  it('observes every tracked section', () => {
    render(<Harness />)
    const observer = MockIntersectionObserver.instances[0]
    expect(observer.observed.map((el) => el.id).sort()).toEqual([...SECTION_IDS].sort())
  })

  it('tracks scroll_depth exactly once per section on enter', () => {
    render(<Harness />)
    const observer = MockIntersectionObserver.instances[0]

    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: true }])
    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: true }])
    observer.simulate([{ target: { id: 'sobre-mi' }, isIntersecting: true }])

    const scrollDepthEvents = depthEvents('scroll_depth')
    expect(scrollDepthEvents).toHaveLength(2)
    expect(scrollDepthEvents[0]).toMatchObject({ section: 'inicio' })
    expect(scrollDepthEvents[1]).toMatchObject({ section: 'sobre-mi' })
  })

  it('tracks every observed section once, even with overlapping entry batches', () => {
    render(<Harness />)
    const observer = MockIntersectionObserver.instances[0]
    observer.simulate(SECTION_IDS.map((id) => ({ target: { id }, isIntersecting: true })))
    observer.simulate(SECTION_IDS.map((id) => ({ target: { id }, isIntersecting: true })))

    const scrollDepthEvents = depthEvents('scroll_depth')
    expect(scrollDepthEvents).toHaveLength(SECTION_IDS.length)
  })

  it('tracks section_engagement when a section is left after 3+ seconds', () => {
    const now = vi.spyOn(Date, 'now')
    render(<Harness />)
    const observer = MockIntersectionObserver.instances[0]

    now.mockReturnValue(1000000)
    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: true }])

    now.mockReturnValue(1004000)
    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: false }])

    expect(lastEvent()).toMatchObject({
      event: 'section_engagement',
      section: 'inicio',
      time_spent_seconds: 4,
    })
  })

  it('does not fire section_engagement for visits shorter than 3 seconds', () => {
    const now = vi.spyOn(Date, 'now')
    render(<Harness />)
    const observer = MockIntersectionObserver.instances[0]

    now.mockReturnValue(1000000)
    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: true }])

    now.mockReturnValue(1001000)
    observer.simulate([{ target: { id: 'inicio' }, isIntersecting: false }])

    expect(depthEvents('section_engagement')).toHaveLength(0)
  })

  it('disconnects the observer on unmount', () => {
    const disconnect = vi.spyOn(MockIntersectionObserver.prototype, 'disconnect')
    const { unmount } = render(<Harness />)
    unmount()
    expect(disconnect).toHaveBeenCalled()
  })
})
