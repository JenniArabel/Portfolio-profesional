import { useCallback, useRef } from 'react'
import { profile } from '../data/cv'
import { useLanguage } from '../i18n/LanguageContext'

export function DownloadCvButton() {
  const generating = useRef(false)
  const { t, data } = useLanguage()

  const handleDownload = useCallback(async () => {
    if (generating.current) return
    generating.current = true

    const { jsPDF } = await import('jspdf')

    const doc = new jsPDF('p', 'mm', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - margin * 2
    let y = margin

    const addSection = (title: string, body: string) => {
      if (y > 260) {
        doc.addPage()
        y = margin
      }
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(13)
      doc.setTextColor(180, 30, 120)
      doc.text(title, margin, y)
      y += 7
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(55, 55, 55)
      const lines = doc.splitTextToSize(body, pageWidth - margin * 2)
      lines.forEach((line: string) => {
        if (y > 280) {
          doc.addPage()
          y = margin
        }
        doc.text(line, margin, y)
        y += 5
      })
      y += 4
    }

    const addBullets = (title: string, items: string[]) => {
      if (y > 260) {
        doc.addPage()
        y = margin
      }
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(180, 30, 120)
      doc.text(title, margin, y)
      y += 6
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(55, 55, 55)
      items.forEach((item) => {
        if (y > 275) {
          doc.addPage()
          y = margin
        }
        const lines = doc.splitTextToSize(`• ${item}`, contentWidth - 4)
        lines.forEach((line: string) => {
          doc.text(line, margin + 2, y)
          y += 4.5
        })
      })
      y += 3
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.setTextColor(30, 30, 30)
    doc.text(profile.name, margin, y)
    y += 7
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(100, 100, 100)
    doc.text(`${profile.title} · ${profile.headline}`, margin, y)
    y += 5
    doc.text(profile.location, margin, y)
    y += 5
    doc.text(`${profile.email} | ${profile.phone}`, margin, y)
    y += 10

    addSection(t('downloadCv.summary'), data.summary.join(' '))

    data.experience.forEach((exp) => {
      addBullets(`${exp.role} — ${exp.company} (${exp.period})`, exp.highlights)
    })

    const allSkills = data.skillGroups.map((g) => `${g.label}: ${g.items.join(', ')}`).join(' | ')
    addSection(t('downloadCv.technicalSkills'), allSkills)

    addSection(t('downloadCv.softSkills'), data.softSkills.join(' · '))

    const eduText = data.education.map((e) => `${e.degree} — ${e.institution} (${e.period})`).join('\n')
    addSection(t('downloadCv.education'), eduText)

    addSection(t('downloadCv.certifications'), data.certifications.join('\n'))

    doc.save('CV-Jennifer-Arabel.pdf')
  }, [t, data])

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center justify-center rounded-xl border border-border bg-surface-card/50 px-5 py-3 text-sm font-semibold text-text-heading transition hover:border-fuchsia-500/50 hover:text-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
    >
      <svg
        className="mr-2 size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"
      />
      </svg>
    {t('downloadCv.button')}
    </button>
  )
}
