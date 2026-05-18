import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, spring, useVideoConfig } from "remotion";

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Inter', 'Helvetica Neue', Arial, sans-serif";
const SERIF_STACK = "'Georgia', 'Times New Roman', serif";

// Beat plan (9s = 270 frames at 30fps):
// 0 to 90    (3s): chaos cuts: calendar over-packed, inbox 247 unread, Notion "last updated 3 weeks ago", Slack pings
// 90 to 180  (3s): black screen, serif text "You're running sales, ops, recruiting, and product. You can't afford a chief of staff."
// 180 to 270 (3s): iMessage bubble pops in "Chief is the one you can." + tagline + URL

export const PainPoint: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", fontFamily: FONT_STACK, overflow: "hidden" }}>
      <Sequence from={0} durationInFrames={90}>
        <ChaosSequence />
      </Sequence>
      <Sequence from={90} durationInFrames={90}>
        <SerifStatement />
      </Sequence>
      <Sequence from={180} durationInFrames={90}>
        <Resolution />
      </Sequence>
    </AbsoluteFill>
  );
};

// ----- Chaos sequence: fast cuts of overwhelmed work surfaces -----

const ChaosSequence: React.FC = () => {
  const frame = useCurrentFrame();

  // Red wash that pulses with the chaos
  const redIntensity = 0.15 + 0.1 * Math.sin(frame * 0.4);

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={22}>
        <CalendarChaos />
      </Sequence>
      <Sequence from={22} durationInFrames={22}>
        <InboxChaos />
      </Sequence>
      <Sequence from={44} durationInFrames={22}>
        <NotionStale />
      </Sequence>
      <Sequence from={66} durationInFrames={24}>
        <SlackCascade />
      </Sequence>

      {/* Red overlay tint over all cuts */}
      <AbsoluteFill
        style={{
          backgroundColor: `rgba(255, 40, 40, ${redIntensity})`,
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

const CalendarChaos: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0F0F12", padding: 60 }}>
      <div style={{ color: "rgba(255,255,255,0.95)", fontSize: 46, fontWeight: 600, marginBottom: 30 }}>
        Wednesday
      </div>
      {[
        ["8:00", "Standup"],
        ["8:30", "1:1 with Sam"],
        ["9:00", "Investor update"],
        ["10:00", "Customer demo"],
        ["11:00", "Hiring loop"],
        ["12:00", "Pricing review"],
        ["13:00", "Eng sync"],
        ["14:00", "Board prep"],
        ["15:00", "Vendor call"],
      ].map(([time, title], i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 28,
            padding: "18px 24px",
            margin: "8px 0",
            backgroundColor: "rgba(11,132,255,0.18)",
            borderLeft: "6px solid #0B84FF",
            borderRadius: 12,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 34, width: 130 }}>{time}</div>
          <div style={{ color: "white", fontSize: 38, fontWeight: 500 }}>{title}</div>
        </div>
      ))}
    </AbsoluteFill>
  );
};

const InboxChaos: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0F0F12", padding: 60 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
        <div style={{ color: "white", fontSize: 52, fontWeight: 700 }}>Inbox</div>
        <div
          style={{
            backgroundColor: "#FF3B30",
            color: "white",
            fontSize: 44,
            fontWeight: 700,
            padding: "12px 28px",
            borderRadius: 999,
          }}
        >
          247 unread
        </div>
      </div>
      {[
        "Stripe payout failed, action required",
        "Re: contract redline (3rd follow up)",
        "URGENT: payroll runs in 2 hours",
        "Meeting prep doc?",
        "Quick question on the SOC2 doc",
        "Are we still on for Friday?",
        "Customer escalation",
        "Following up on my last email",
      ].map((s, i) => (
        <div
          key={i}
          style={{
            color: i < 3 ? "white" : "rgba(255,255,255,0.7)",
            fontSize: 32,
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            fontWeight: i < 3 ? 600 : 400,
          }}
        >
          {s}
        </div>
      ))}
    </AbsoluteFill>
  );
};

const NotionStale: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0F0F12", padding: 60 }}>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 30, marginBottom: 16 }}>
        Workspace / Second Brain / Founder OS
      </div>
      <div style={{ color: "white", fontSize: 64, fontWeight: 700, lineHeight: 1.15, marginBottom: 24 }}>
        Founder OS v2 (real this time)
      </div>
      <div
        style={{
          color: "#FF3B30",
          fontSize: 36,
          fontWeight: 600,
          marginBottom: 60,
        }}
      >
        Last updated 3 weeks ago
      </div>
      {[
        "- TODO: migrate from v1",
        "- TODO: add weekly review template",
        "- TODO: actually use this",
        "- TODO: rebuild from scratch (?)",
      ].map((s, i) => (
        <div key={i} style={{ color: "rgba(255,255,255,0.5)", fontSize: 34, padding: "10px 0" }}>
          {s}
        </div>
      ))}
    </AbsoluteFill>
  );
};

const SlackCascade: React.FC = () => {
  const frame = useCurrentFrame();
  const messages = [
    { who: "Jules", msg: "got a sec?" },
    { who: "Diego", msg: "@here can someone..." },
    { who: "Eng channel", msg: "build is failing again" },
    { who: "Sales", msg: "lead from your post" },
    { who: "Mom", msg: "call me when you can" },
    { who: "Investor", msg: "quick q on the deck" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#0F0F12", padding: 60 }}>
      {messages.map((m, i) => {
        const appear = Math.max(0, Math.min(1, (frame - i * 3) / 6));
        return (
          <div
            key={i}
            style={{
              opacity: appear,
              transform: `translateX(${(1 - appear) * 60}px)`,
              backgroundColor: "rgba(255,255,255,0.06)",
              borderLeft: "6px solid #FF3B30",
              padding: "20px 28px",
              margin: "12px 0",
              borderRadius: 12,
              display: "flex",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div style={{ color: "white", fontSize: 36, fontWeight: 600, width: 250 }}>{m.who}</div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 34 }}>{m.msg}</div>
            <div
              style={{
                marginLeft: "auto",
                backgroundColor: "#FF3B30",
                color: "white",
                fontWeight: 700,
                fontSize: 28,
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              {i + 2}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ----- Serif statement -----

const SerifStatement: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fade = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 18 });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 100,
      }}
    >
      <div
        style={{
          color: "white",
          fontFamily: SERIF_STACK,
          fontSize: 78,
          lineHeight: 1.25,
          textAlign: "center",
          fontWeight: 400,
          opacity: fade,
          maxWidth: 900,
        }}
      >
        You're running sales, ops, recruiting, and product.
        <br />
        <br />
        You can't afford a chief of staff.
      </div>
    </AbsoluteFill>
  );
};

// ----- Resolution: iMessage bubble + tagline + URL -----

const Resolution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.7 } });
  const taglineEnter = spring({
    frame: frame - 18,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 600 }}>
        <div
          style={{
            opacity: enter,
            transform: `scale(${interpolate(enter, [0, 1], [0.7, 1])}) translateY(${interpolate(enter, [0, 1], [60, 0])}px)`,
            backgroundColor: "#3A3A3C",
            color: "white",
            fontFamily: FONT_STACK,
            fontSize: 56,
            fontWeight: 500,
            padding: "36px 56px",
            borderRadius: 50,
            maxWidth: 800,
          }}
        >
          Chief is the one you can.
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 320 }}>
        <div
          style={{
            opacity: taglineEnter,
            textAlign: "center",
          }}
        >
          <div style={{ color: "white", fontFamily: FONT_STACK, fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            Your chief of staff.
          </div>
          <div
            style={{
              color: "#0B84FF",
              fontFamily: FONT_STACK,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: 8,
            }}
          >
            In iMessage.
          </div>
          <div
            style={{
              marginTop: 50,
              color: "rgba(255,255,255,0.65)",
              fontFamily: FONT_STACK,
              fontSize: 32,
              letterSpacing: 1,
            }}
          >
            chief.remyndai.com
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
