'use client'

import { useEffect, useState } from 'react'

const initialDraft = { title: '', category: 'Residential', location: '', year: new Date().getFullYear().toString(), summary: '', cover: null, gallery: [], before: null, after: null, reel: null }

function MediaPreview({ file, type = 'image' }) {
  const [url, setUrl] = useState('')
  useEffect(() => { if (!file) return; const objectUrl = URL.createObjectURL(file); setUrl(objectUrl); return () => URL.revokeObjectURL(objectUrl) }, [file])
  if (!url) return null
  return type === 'video' ? <video src={url} controls playsInline /> : <img src={url} alt="Selected upload preview" />
}

export default function ProjectStudio() {
  const [draft, setDraft] = useState(initialDraft)
  const [saved, setSaved] = useState(false)
  const update = (changes) => { setDraft((current) => ({ ...current, ...changes })); setSaved(false) }

  function saveDraft(event) { event.preventDefault(); setSaved(true) }

  return <form className="studio-form" onSubmit={saveDraft}><div className="studio-notice"><strong>Frontend preview mode</strong><p>Files remain in this browser tab and are not uploaded yet. This form is structured for a future authenticated storage and CMS connection.</p></div><fieldset><legend>Project story</legend><div className="studio-fields"><label><span>Project title *</span><input required value={draft.title} onChange={(event) => update({ title: event.target.value })} placeholder="e.g. The Adair Residence" /></label><label><span>Category *</span><select value={draft.category} onChange={(event) => update({ category: event.target.value })}><option>Residential</option><option>Workspace</option><option>Hospitality</option><option>Commercial</option></select></label><label><span>Location</span><input value={draft.location} onChange={(event) => update({ location: event.target.value })} placeholder="Accra" /></label><label><span>Year</span><input inputMode="numeric" value={draft.year} onChange={(event) => update({ year: event.target.value })} /></label><label className="studio-full"><span>Short project story</span><textarea rows="5" value={draft.summary} onChange={(event) => update({ summary: event.target.value })} placeholder="Describe the brief, design idea and result." /></label></div></fieldset><fieldset><legend>Portfolio photography</legend><div className="upload-card-grid"><label className="studio-upload"><span>Cover image *</span><input required type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => update({ cover: event.target.files[0] || null })} /><small>Landscape images work best</small><MediaPreview file={draft.cover} /></label><label className="studio-upload"><span>Gallery images</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => update({ gallery: Array.from(event.target.files).slice(0, 12) })} /><small>Up to 12 images per project</small><div className="studio-mini-grid">{draft.gallery.map((file) => <MediaPreview file={file} key={`${file.name}-${file.lastModified}`} />)}</div></label></div></fieldset><fieldset><legend>Before & after story</legend><div className="upload-card-grid"><label className="studio-upload"><span>Before image</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => update({ before: event.target.files[0] || null })} /><MediaPreview file={draft.before} /></label><label className="studio-upload"><span>After image</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => update({ after: event.target.files[0] || null })} /><MediaPreview file={draft.after} /></label></div></fieldset><fieldset><legend>Short project reel</legend><label className="studio-upload studio-reel-upload"><span>Vertical or landscape video</span><input type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(event) => update({ reel: event.target.files[0] || null })} /><small>MP4 or WEBM recommended · backend size limits will be added later</small><MediaPreview file={draft.reel} type="video" /></label></fieldset>{saved && <div className="studio-saved" role="status"><strong>Draft preview prepared.</strong><span>Connect the backend before using this for permanent client uploads.</span></div>}<button className="primary-button studio-save" type="submit">Prepare Project Draft <span aria-hidden="true">↗</span></button></form>
}
