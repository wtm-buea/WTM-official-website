export const getDefinition = ({
  effect,
  effectChange: change,
  effectDirection: direction
}) => {
  const sign = direction ? effectSigns[direction] : '';
  const origin = direction ? effectTransformOrigins[direction] : '';
  const definitions = {
    jump: {
      keyFrames: 'bounce',
      a: `transform: translate(0em, 0em);`,
      b: `transform: translate(0em, ${sign}${change}em);`
    },
    stretch: {
      keyFrames: 'bounce',
      a: `transform: scale(1, 1); transform-origin: ${origin};`,
      b: `transform: scale(1, ${change});`
    },
    color: {
      keyFrames: 'bounce',
      a: `color: inherit;`,
      b: `color: ${change};`
    },
    pop: {
      keyFrames: 'bounce',
      a: `transform: scale(1, 1);`,
      b: `transform: scale(${change}, ${change});`
    },
    fadeOut: {
      keyFrames: 'oneWay',
      a: `opacity: inherit`,
      b: `opacity: 0.0`
    },
    fadeIn: {
      keyFrames: 'oneWay',
      a: `opacity: inherit`,
      b: `opacity: 1.0;`
    },
    verticalFadeOut: {
      keyFrames: 'oneWay',
      a: `opacity: 1.0;`,
      b: `opacity: 0.0; transform: translate(0em, ${sign}${change}em);`
    },
    verticalFadeIn: {
      keyFrames: 'oneWay',
      a: `opacity: 0.0; transform: translate(0em, ${sign}${change}em);`,
      b: `opacity: 1.0; transform: translate(0em, 0em);`
    }
  };
  return definitions[effect];
};

export const initialStyles = {
  fadeIn: 'opacity: 0.0',
  verticalFadeIn: 'opacity: 0.0'
};

export const finalStyles = {
  fadeOut: 'opacity: 0.0',
  verticalFadeOut: 'opacity: 0.0'
};

export const keyframeTemplates = ({ effectData }) => ({
  bounce: [
    [0, `${effectData.a} animation-timing-function: ease-in-out;`],
    [50, `${effectData.b} animation-timing-function: ease-out-in;`],
    [99.99, `${effectData.a}`],
    ['x', `${effectData.a}`]
  ],
  oneWay: [
    [0, `${effectData.a} animation-timing-function: ease-in-out;`],
    [99.9, `${effectData.b} animation-timing-function: ease-in-out;`],
    ['x', `${effectData.b}`]
  ]
});

const effectSigns = {
  up: '-',
  down: '',
  both: '-'
};

const effectTransformOrigins = {
  up: 'center 85%',
  down: 'center 15%',
  both: 'center'
};
