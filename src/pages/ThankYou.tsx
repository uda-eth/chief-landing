import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 15vw, 160px) clamp(24px, 5vw, 72px) clamp(60px, 8vw, 100px)',
      }}>
        <div style={{
          maxWidth: '520px',
          width: '100%',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '6px',
          padding: 'clamp(40px, 6vw, 64px)',
          textAlign: 'center',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(201,169,97,0.12)',
            border: '1px solid rgba(201,169,97,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10L8 14L16 6" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: 'var(--text)',
            marginBottom: '20px',
            lineHeight: 1.15,
          }}>
            You're on the list.
          </h1>

          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.75,
            color: 'rgba(240,237,232,0.6)',
            marginBottom: '36px',
          }}>
            We'll reach out within 48 hours from{' '}
            <a
              href="mailto:hello@chief.remyndai.com"
              style={{ color: 'var(--gold)', textDecoration: 'none' }}
            >
              hello@chief.remyndai.com
            </a>
            . While you wait, save{' '}
            <span style={{ color: 'var(--text)', fontWeight: 500 }}>+1 (XXX) XXX-XXXX</span>{' '}
            in your contacts as Chief and text it to try a 5-minute iMessage demo.
          </p>

          <div style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
          }}>
            <Link
              to="/"
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
