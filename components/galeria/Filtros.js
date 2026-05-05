'use client'
import { useState, useRef, useEffect } from 'react'

const COLOR_MAP = {
  rosa:    '#f9a8d4',
  blanco:  '#f8f8f8',
  azul:    '#93c5fd',
  lila:    '#c4b5fd',
  rojo:    '#fca5a5',
  verde:   '#86efac',
  dorado:  '#fcd34d',
}

const FILTER_DEFS = {
  edad: {
    label: 'Edad',
    options: ['2-4', '5-7', '8-10', '11-14'],
    display: (v) => `${v} años`,
  },
  ocasion: {
    label: 'Ocasión',
    options: ['fiesta', 'boda', 'comunión', 'graduación', 'casual'],
    display: (v) => v.charAt(0).toUpperCase() + v.slice(1),
  },
  color: {
    label: 'Color',
    options: ['rosa', 'blanco', 'azul', 'lila', 'rojo', 'verde', 'dorado'],
    display: (v) => v.charAt(0).toUpperCase() + v.slice(1),
  },
  precio: {
    label: 'Precio',
    options: ['0-50', '51-100', '101-200', '200+'],
    display: (v) => (v === '200+' ? 'US$200+' : `US$${v}`),
  },
}

function Dropdown({ filterKey, def, selected, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const activeCount = selected.length

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.45rem 1rem',
          borderRadius: '100px',
          border: activeCount > 0 ? 'none' : '1.5px solid #e8d5b8',
          background: activeCount > 0
            ? 'linear-gradient(135deg,#c9a668,#a07840)'
            : '#fff',
          color: activeCount > 0 ? '#fff' : '#6b5744',
          fontFamily: 'var(--font-sans,sans-serif)',
          fontSize: '0.85rem',
          fontWeight: activeCount > 0 ? 600 : 400,
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: open ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {def.label}
        {activeCount > 0 && (
          <span
            style={{
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: '1.1rem',
              height: '1.1rem',
              fontSize: '0.7rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
            }}
          >
            {activeCount}
          </span>
        )}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
            opacity: 0.7,
          }}
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.375rem)',
            left: 0,
            zIndex: 200,
            background: '#fff',
            borderRadius: '0.875rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            border: '1px solid #f0e8dc',
            minWidth: '170px',
            padding: '0.5rem',
            animation: 'dropIn 0.18s ease',
          }}
        >
          {def.options.map((opt) => {
            const isSelected = selected.includes(opt)
            return (
              <label
                key={opt}
                role="option"
                aria-selected={isSelected}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  background: isSelected ? 'rgba(201,166,104,0.08)' : 'transparent',
                  transition: 'background 0.15s',
                  fontFamily: 'var(--font-sans,sans-serif)',
                  fontSize: '0.875rem',
                  color: isSelected ? '#a07840' : '#4a3325',
                  fontWeight: isSelected ? 600 : 400,
                  userSelect: 'none',
                }}
                onMouseOver={(e) => {
                  if (!isSelected) e.currentTarget.style.background = '#fdf8f3'
                }}
                onMouseOut={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'transparent'
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onChange(filterKey, opt)}
                  style={{
                    accentColor: '#c9a668',
                    width: '0.875rem',
                    height: '0.875rem',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                />
                {/* Color dot for color filter */}
                {filterKey === 'color' && COLOR_MAP[opt] && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: '0.875rem',
                      height: '0.875rem',
                      borderRadius: '50%',
                      background: COLOR_MAP[opt],
                      border: '1px solid rgba(0,0,0,0.1)',
                      flexShrink: 0,
                    }}
                  />
                )}
                {def.display(opt)}
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Filtros({ filters, onChange }) {
  const hasActive = Object.values(filters).some((arr) => arr.length > 0)

  const handleChange = (filterKey, value) => {
    const current = filters[filterKey] || []
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onChange(filterKey, next)
  }

  const clearAll = () => {
    Object.keys(FILTER_DEFS).forEach((key) => onChange(key, []))
  }

  return (
    <>
      <div
        role="group"
        aria-label="Filtros de vestidos"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans,sans-serif)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#c9a668',
            marginRight: '0.25rem',
          }}
        >
          Filtrar:
        </span>

        {Object.entries(FILTER_DEFS).map(([key, def]) => (
          <Dropdown
            key={key}
            filterKey={key}
            def={def}
            selected={filters[key] || []}
            onChange={handleChange}
          />
        ))}

        {hasActive && (
          <button
            type="button"
            onClick={clearAll}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.45rem 0.875rem',
              borderRadius: '100px',
              border: '1.5px solid #e8d5b8',
              background: 'transparent',
              color: '#a07840',
              fontFamily: 'var(--font-sans,sans-serif)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#fdf8f3'
              e.currentTarget.style.borderColor = '#c9a668'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#e8d5b8'
            }}
          >
            ✕ Limpiar filtros
          </button>
        )}
      </div>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
