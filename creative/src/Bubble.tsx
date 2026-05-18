import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Inter', 'Helvetica Neue', Arial, sans-serif";

type BubbleProps = {
  kind: "incoming" | "outgoing";
  text: string;
  offsetY: number;
};

export const Bubble: React.FC<BubbleProps> = ({ kind, text, offsetY }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame, fps, config: { damping: 14, stiffness: 120, mass: 0.7 } });
  const scale = interpolate(enter, [0, 1], [0.6, 1]);
  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const ty = interpolate(enter, [0, 1], [40, 0]);

  const isOutgoing = kind === "outgoing";

  return (
    <div
      style={{
        position: "absolute",
        top: offsetY,
        left: isOutgoing ? "auto" : 60,
        right: isOutgoing ? 60 : "auto",
        maxWidth: 800,
        opacity,
        transform: `scale(${scale}) translateY(${ty}px)`,
        transformOrigin: isOutgoing ? "bottom right" : "bottom left",
      }}
    >
      <div
        style={{
          backgroundColor: isOutgoing ? "#0B84FF" : "#3A3A3C",
          color: "white",
          fontFamily: FONT_STACK,
          fontSize: 42,
          fontWeight: 400,
          lineHeight: 1.3,
          padding: "26px 36px",
          borderRadius: 38,
          whiteSpace: "pre-wrap",
        }}
      >
        {text}
      </div>
    </div>
  );
};
