import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyxuWxWeaaXQPNzqBByPpDTheRpKAhd05Tro3Hgw56hLEKrnH6k-mu6VjXh-12VSM7N/exec'

function getParam(name: string): string {
  return new URLSearchParams(window.location.search).get(name) ?? ''
}

export default function SignupForm() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [workType, setWorkType] = useState('')
  const [adminTask, setAdminTask] = useState('')
  const [loading, setLoading] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const utmRef = useRef({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    referrer: '',
  })

  useEffect(() => {
    utmRef.current = {
      utm_source: getParam('utm_source'),
      utm_medium: getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_content: getParam('utm_content'),
      referrer: document.referrer,
    }
  }, [])

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValid = name.trim() !== '' && emailValid && workType.trim() !== ''

  function handleEmailBlur() {
    if (email && !emailValid) setEmailError(true)
    else setEmailError(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid || loading) return

    setLoading(true)

    const utm = utmRef.current
    const payload = {
      candidate_id: 'chief',
      product_name: 'Chief',
      product_slug: 'chief',
      subdomain: 'https://chief.remyndai.com',
      lead_name: name.trim(),
      lead_email: email.trim(),
      lead_company_role: workType.trim(),
      intent_signal: adminTask.trim(),
      notes_from_lead: adminTask.trim(),
      custom_question: "What's the most annoying admin task you'd hand off first?",
      custom_answer: adminTask.trim(),
      source: utm.utm_source || 'direct',
      channel: utm.utm_medium || 'organic',
      campaign: utm.utm_campaign || '',
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
      referrer: utm.referrer,
      landing_page_url: window.location.href,
      confirmation_page_url: 'https://chief.remyndai.com/thank-you',
      consent_captured: 'Yes',
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (_) {
    }

    navigate('/thank-you')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '6px',
    padding: '14px 16px',
    color: 'var(--text)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-sans)',
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Name <span style={{ color: 'var(--gold)' }}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Your full name"
          style={inputStyle}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,97,0.5)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Email <span style={{ color: 'var(--gold)' }}>*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setEmailError(false) }}
          onBlur={handleEmailBlur}
          required
          placeholder="you@yourdomain.com"
          style={{
            ...inputStyle,
            borderColor: emailError ? '#c0392b' : 'rgba(255,255,255,0.12)',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = emailError ? '#c0392b' : 'rgba(201,169,97,0.5)')}
        />
        {emailError && (
          <span style={{ fontSize: '0.75rem', color: '#c0392b' }}>Please enter a valid email address.</span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          What kind of work do you do? <span style={{ color: 'var(--gold)' }}>*</span>
        </label>
        <input
          type="text"
          value={workType}
          onChange={e => setWorkType(e.target.value)}
          required
          placeholder="e.g. boutique M&A advisory, solo real estate broker, founder of a 6-person agency"
          style={inputStyle}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,97,0.5)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          What's the most annoying admin task you'd hand off first?
        </label>
        <textarea
          value={adminTask}
          onChange={e => setAdminTask(e.target.value)}
          placeholder="Be specific. This helps us prioritize."
          rows={3}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '88px',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,169,97,0.5)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
      </div>

      <button
        type="submit"
        disabled={!isValid || loading}
        style={{
          width: '100%',
          padding: '16px',
          background: isValid && !loading ? 'var(--gold)' : 'rgba(201,169,97,0.3)',
          color: isValid && !loading ? '#0A0A0A' : 'rgba(10,10,10,0.5)',
          border: 'none',
          borderRadius: '6px',
          fontSize: '0.85rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          cursor: isValid && !loading ? 'pointer' : 'not-allowed',
          transition: 'background 0.2s, transform 0.1s',
          marginTop: '4px',
        }}
        onMouseEnter={e => { if (isValid && !loading) (e.currentTarget as HTMLButtonElement).style.background = '#d4b46c' }}
        onMouseLeave={e => { if (isValid && !loading) (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold)' }}
        onMouseDown={e => { if (isValid && !loading) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.98)' }}
        onMouseUp={e => { if (isValid && !loading) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
      >
        {loading ? 'Sending...' : 'Request Access'}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        We'll get back to you within 48 hours.
      </p>
    </form>
  )
}
