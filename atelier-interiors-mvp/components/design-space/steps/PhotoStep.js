'use client'

import { useEffect, useState } from 'react'
import { trackDesignEvent } from '../../../lib/analytics'
import StepShell from '../StepShell'

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp']
const maxImageSize = 8 * 1024 * 1024

function ImagePreview({ file, onRemove }) {
  const [previewUrl, setPreviewUrl] = useState('')

  useEffect(() => {
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  return <div className="preview">{previewUrl && <img src={previewUrl} alt={`${file.name} preview`} />}<button type="button" onClick={onRemove} aria-label={`Remove ${file.name}`}>×</button></div>
}

export default function PhotoStep({ form, update, error }) {
  const [dragging, setDragging] = useState(false)

  function addFiles(fileList) {
    const files = Array.from(fileList)
    const validFiles = files.filter((file) => allowedImageTypes.includes(file.type) && file.size <= maxImageSize)
    const nextImages = [...form.images, ...validFiles].slice(0, 5)
    const nextError = files.length !== validFiles.length ? 'Please use JPG, PNG or WEBP images under 8MB each.' : files.length + form.images.length > 5 ? 'You can upload up to 5 images.' : ''
    update({ images: nextImages }, nextError)
    if (validFiles.length) trackDesignEvent('photos_added', { count: validFiles.length })
  }

  return <StepShell eyebrow="A little visual context" title="Show us your current space" note="Upload a few photos of your room so we can better understand the space."><label className={`upload-zone ${dragging ? 'dragging' : ''}`} onDragOver={(event) => { event.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={(event) => { event.preventDefault(); setDragging(false); addFiles(event.dataTransfer.files) }}><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => { addFiles(event.target.files); event.target.value = '' }} /><span className="upload-icon" aria-hidden="true">↑</span><strong>Drop images here or browse</strong><small>JPG, PNG or WEBP · max 5 images · 8MB each</small></label>{error && <p className="inline-error" role="alert">{error}</p>}<div className="preview-grid">{form.images.map((file, index) => <ImagePreview file={file} key={`${file.name}-${file.lastModified}-${index}`} onRemove={() => update({ images: form.images.filter((_, imageIndex) => imageIndex !== index) })} />)}</div><p className="optional-note">Photos are optional, but they help us understand light, layout and proportions.</p></StepShell>
}
