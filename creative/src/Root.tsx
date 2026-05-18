import { Composition } from "remotion";
import { IdentityMirror } from "./IdentityMirror";
import { PainPoint } from "./PainPoint";

const FPS = 30;
const DURATION_FRAMES = 9 * FPS; // 9 seconds at 30fps = 270 frames
const WIDTH = 1080;
const HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="IdentityMirror"
        component={IdentityMirror}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="PainPoint"
        component={PainPoint}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
