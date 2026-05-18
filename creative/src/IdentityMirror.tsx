import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { Bubble } from "./Bubble";

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Inter', 'Helvetica Neue', Arial, sans-serif";

// Beat plan (9s = 270 frames at 30fps):
// 00 to 30  (frames 0-30)    : phone frame settles in
// 30 to 75  (frames 30-75)   : outgoing 1: "remind me to follow up with the lawyer about the SAFE on Friday"
// 75 to 110 (frames 75-110)  : incoming 1: "Done. I'll ping you Friday 9am."
// 110 to 155 (frames 110-155): outgoing 2: "draft the followup based on our last thread"
// 155 to 210 (frames 155-210): incoming 2: "Drafted. Saved to your vault under /legal/safe-followups. Ready to send when you are."
// 210 to 270 (frames 210-270): tagline overlay

export const IdentityMirror: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 20 });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", fontFamily: FONT_STACK }}>
      {/* Top status bar (subtle, iOS-feeling) */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(255,255,255,0.6)",
          fontSize: 34,
          fontWeight: 600,
          opacity: fadeIn,
        }}
      >
        <span>9:41</span>
        <span style={{ letterSpacing: 4 }}>● ● ●</span>
      </div>

      {/* Contact name header */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "rgba(255,255,255,0.95)",
          fontSize: 44,
          fontWeight: 600,
          opacity: fadeIn,
        }}
      >
        Chief
      </div>
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "rgba(255,255,255,0.45)",
          fontSize: 26,
          opacity: fadeIn,
        }}
      >
        iMessage
      </div>

      {/* Bubbles stack, anchored from top so newer bubbles push older ones up */}
      <AbsoluteFill style={{ paddingTop: 360, paddingLeft: 60, paddingRight: 60 }}>
        <Sequence from={30}>
          <Bubble
            kind="outgoing"
            text="remind me to follow up with the lawyer about the SAFE on Friday"
            offsetY={0}
          />
        </Sequence>

        <Sequence from={75}>
          <Bubble
            kind="incoming"
            text="Done. I'll ping you Friday 9am."
            offsetY={260}
          />
        </Sequence>

        <Sequence from={110}>
          <Bubble
            kind="outgoing"
            text="draft the followup based on our last thread"
            offsetY={420}
          />
        </Sequence>

        <Sequence from={155}>
          <Bubble
            kind="incoming"
            text={`Drafted. Saved to your vault under\n/legal/safe-followups.\nReady to send when you are.`}
            offsetY={620}
          />
        </Sequence>
      </AbsoluteFill>

      {/* Tagline overlay, last 2 seconds */}
      <Sequence from={210}>
        <TaglineOverlay />
      </Sequence>
    </AbsoluteFill>
  );
};

const TaglineOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fade = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 18 });
  const lift = interpolate(fade, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%)",
        fontFamily: FONT_STACK,
        opacity: fade,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 320,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "white",
          transform: `translateY(${lift}px)`,
        }}
      >
        <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
          Your chief of staff.
        </div>
        <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.1, color: "#0B84FF" }}>
          In iMessage.
        </div>
        <div
          style={{
            marginTop: 60,
            fontSize: 36,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: 1,
          }}
        >
          chief.remyndai.com
        </div>
      </div>

      {/* CTA chevron */}
      <div
        style={{
          position: "absolute",
          bottom: 180,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "rgba(255,255,255,0.85)",
          fontSize: 44,
        }}
      >
        ↓
      </div>
    </AbsoluteFill>
  );
};
