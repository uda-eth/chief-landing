import Nav from '../components/Nav'
import Footer from '../components/Footer'
import IMessageThread from '../components/IMessageThread'
import SignupForm from '../components/SignupForm'

function scrollToForm(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Landing() {
  const sectionPad: React.CSSProperties = {
    padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 72px)',
  }

  const maxWidth: React.CSSProperties = {
    maxWidth: '1100px',
    margin: '0 auto',
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      {/* HERO */}
      <section style={{
        ...sectionPad,
        paddingTop: 'clamp(120px, 15vw, 180px)',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,169,97,0.06) 0%, transparent 70%)',
      }}>
        <div style={{ ...maxWidth, display: 'grid', gridTemplateColumns: '1fr auto', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
          <div style={{ maxWidth: '560px' }}>
            <p style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
              fontWeight: 500,
            }}>
              Private Beta
            </p>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              color: 'var(--text)',
              marginBottom: '28px',
            }}>
              Your chief of staff lives in iMessage now.
            </h1>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'rgba(240,237,232,0.65)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '480px',
            }}>
              Chief is an AI teammate that runs the admin work of your business. Text it like you'd text any other operator. It learns your systems, builds your playbook, and gets sharper every week.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <a
                href="#signup"
                onClick={scrollToForm}
                style={{
                  display: 'inline-block',
                  padding: '14px 32px',
                  background: 'var(--gold)',
                  color: '#0A0A0A',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s, transform 0.1s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4b46c')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
              >
                Get Early Access
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Limited beta. No credit card.
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
            <IMessageThread />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section style={{ ...sectionPad, borderTop: '1px solid var(--border)' }}>
        <div style={maxWidth}>
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '48px',
          }}>
            Why this exists
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '48px',
          }}>
            <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'rgba(240,237,232,0.65)' }}>
              The tooling moves faster than non-technical operators can learn it. By the time you figure out a new platform, there are four more waiting. The stack compounds, the friction compounds.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'rgba(240,237,232,0.65)' }}>
              AI lives in a separate browser tab they have to remember to open. That's a workflow, not a teammate. The best operators don't want a tool. They want someone who just handles it.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', lineHeight: 1.8, color: 'rgba(240,237,232,0.65)' }}>
              Every hour spent on followups, calendar Tetris, CRM hygiene, and invoice chasing is an hour not billed. For operators who sell time, admin isn't overhead. It's lost revenue.
            </p>
          </div>

          <div style={{
            marginTop: '64px',
            paddingTop: '48px',
            borderTop: '1px solid var(--border)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
              lineHeight: 1.4,
              color: 'var(--text)',
              maxWidth: '720px',
            }}>
              ChatGPT serves people who think in tools. Chief serves people who think in delegation.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ ...sectionPad, borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={maxWidth}>
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '48px',
          }}>
            How it works
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            background: 'var(--border)',
            borderRadius: '0',
            overflow: 'hidden',
          }}>
            {[
              {
                num: '01',
                title: 'Lives in iMessage',
                body: 'No new app. No new login. Just a phone number you save as Chief. Text it the way you\'d text any other team member.',
              },
              {
                num: '02',
                title: 'Runs a company of sub-agents',
                body: 'Behind the iMessage surface is an org chart: Sales, Operations, Finance, Research, Content, Knowledge. Chief delegates. The teams execute. Every artifact lands in your central knowledge base.',
              },
              {
                num: '03',
                title: 'Builds its own playbook',
                body: 'Every repeatable task becomes a saved skill — /weekly-investor-update, /draft-followup, /chase-overdue-invoices. Your library grows automatically and gets emailed to you each week.',
              },
            ].map(item => (
              <div
                key={item.num}
                style={{
                  background: 'var(--bg)',
                  padding: 'clamp(32px, 4vw, 48px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.75rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.1em',
                  marginBottom: '20px',
                }}>
                  {item.num}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: 'var(--text)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  color: 'rgba(240,237,232,0.55)',
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ ...sectionPad, borderTop: '1px solid var(--border)' }}>
        <div style={maxWidth}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'start',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                lineHeight: 1.2,
                color: 'var(--text)',
                marginBottom: '24px',
              }}>
                Built for operators who bill by the hour.
              </h2>
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>
                Who it's for
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                'Boutique consulting firms and agencies',
                'Independent professionals running their own ops — real estate, law, finance',
                'Early-stage founders without a chief of staff or EA',
                'Non-technical operators inside larger orgs who want personal automation',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    marginTop: '10px',
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    lineHeight: 1.6,
                    color: 'rgba(240,237,232,0.7)',
                  }}>
                    {item}
                  </p>
                </div>
              ))}

              <div style={{
                marginTop: '16px',
                padding: '24px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                background: 'rgba(201,169,97,0.04)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'rgba(240,237,232,0.7)',
                }}>
                  "Why hire a chief of staff for $120K/year when Chief is a teammate that already knows your systems and gets sharper every week?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNUP FORM */}
      <section
        id="signup"
        style={{
          ...sectionPad,
          borderTop: '1px solid var(--border)',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div style={{ ...maxWidth, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <div style={{ paddingTop: '8px' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '20px',
            }}>
              Join the private beta.
            </h2>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'rgba(240,237,232,0.55)',
              maxWidth: '380px',
            }}>
              Limited spots. We're letting in operators who can give us real feedback in the first 30 days.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: 'clamp(28px, 4vw, 40px)',
          }}>
            <SignupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
