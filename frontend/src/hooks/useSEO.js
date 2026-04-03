import { useEffect } from 'react'

/**
 * Custom hook to dynamically set the document title and meta description.
 * @param {string} title - The page title
 * @param {string} description - The meta description for SEO
 */
export default function useSEO(title, description) {
  useEffect(() => {
    // ════════ SET TITLE ════════
    const prevTitle = document.title
    document.title = `${title} | Community Witnesses`

    // ════════ SET META DESCRIPTION ════════
    const metaDescription = document.querySelector('meta[name="description"]')
    const originalDescription = metaDescription?.getAttribute('content') || ''
    
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Cleanup: restore previous title/description when component unmounts
    return () => {
      document.title = prevTitle
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription)
      }
    }
  }, [title, description])
}
