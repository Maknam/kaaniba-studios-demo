'use client'

import { useState } from 'react'

const defaultBefore = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=88'
const defaultAfter = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88'

export default function BeforeAfter({ beforeImage = defaultBefore, afterImage = defaultAfter, label = 'Before and after interior transformation' }) {
  const [position, setPosition] = useState(56)

  return (
    <div className="ba-shell" aria-label={label}>
      <div
        className="ba-image ba-after"
        style={{ backgroundImage: `url('${afterImage}')` }}
      />
      <div
        className="ba-image ba-before"
        style={{
          width: `${position}%`,
          backgroundImage: `url('${beforeImage}')`,
        }}
      />
      <div className="ba-divider" style={{ left: `${position}%` }}>
        <span>↔</span>
      </div>
      <span className="ba-label before-label">Before</span>
      <span className="ba-label after-label">After</span>
      <input
        className="ba-range"
        type="range"
        min="10"
        max="90"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        aria-label="Drag to compare before and after"
      />
    </div>
  )
}
