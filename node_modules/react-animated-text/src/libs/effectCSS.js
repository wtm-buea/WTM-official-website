import * as Effects from './effectData';
import * as Styles from './styleSheets.js';

export const generateCSS = ({
  effect,
  effectLastKeyframe,
  effectChange,
  effectDirection,
  animationName
}) => {
  const effectData = Effects.getDefinition({
    effect,
    effectChange,
    effectDirection
  });
  const keyFrameData = Effects.keyframeTemplates({ effectData });

  const keyFramePercentages = keyFrameData[effectData.keyFrames].map(frame => {
    const d = frame[0] === 'x' ? 100 : effectLastKeyframe * frame[0];
    return `${d}% { ${frame[1]} }`;
  });
  const frames = `@keyframes ${animationName} {\n${keyFramePercentages.join(
    '\n'
  )}\n}`;

  Styles.createSheet(animationName);
  Styles.insertStyle(animationName, frames);

  // For animation styles that begin or end in a paused state, the non-animated span
  // needs to have classes defined for it since the animation-fill-mode has no effect.
  if (Effects.initialStyles.hasOwnProperty(effect)) {
    Styles.insertStyle(
      animationName,
      `.initial_${animationName} { ${Effects.initialStyles[effect]} }`
    );
  }

  if (Effects.finalStyles.hasOwnProperty(effect)) {
    Styles.insertStyle(
      animationName,
      `.final_${animationName} { ${Effects.finalStyles[effect]} }`
    );
  }
};

export const cleanupCSS = ({ animationName }) => {
  Styles.removeSheet(animationName);
};
