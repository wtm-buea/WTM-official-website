import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLetter from '../AnimatedLetter';
import { generateCSS, cleanupCSS } from '../../libs/effectCSS';

const propTypes = {
  text: PropTypes.string.isRequired, // The text that will be animated
  speed: PropTypes.number, // The speed the wave travels - in characters per second
  direction: PropTypes.oneOf(['right', 'left']), // The direction the wave will travel, either 'right' or 'left'
  iterations: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['infinite'])
  ]), // The number of times the wave will animate, an integer or the string 'infinite'
  delay: PropTypes.number, // The delay between each wave animation - in seconds
  paused: PropTypes.bool, // Should the animation be paused when first rendered
  effect: PropTypes.string, // The name of the effect to be applied to the characters
  effectDuration: PropTypes.number, // The number of seconds a single effect will last
  effectChange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // The value of the animated css property at the effect's apex (property depends on effect chosen)
  effectDirection: PropTypes.string // Some effects can have their direction specified (valid values depend on effect chosen)
};

const defaultProps = {
  speed: 10,
  direction: 'right',
  iterations: 'infinite',
  delay: 0,
  paused: false,
  effect: 'jump',
  effectDuration: 0.3,
  effectChange: 1,
  effectDirection: 'up'
};

class Wave extends React.Component {
  constructor(props) {
    super(props);

    this.animationName = `textAnim_${props.effect}_${Math.round(
      Math.random() * 100000
    )}`;

    // Calculate animation time based on length of text and wave speed
    this.animTime = this.props.text.length / this.props.speed;

    // The delay scale is used to scale the animation time down so that the required
    // delay can be accounted for the in the keyframe timeline.
    const delayRatio = this.props.delay / this.animTime;
    const delayScale = 1 / (delayRatio + 1);

    // Total animation time including the passed-in delay.
    this.duration = this.animTime + this.props.delay;

    // Calculate the percentage position of the last keyframe,
    // taking into account the passed-in delay.
    this.effectLastKeyframe =
      this.props.effectDuration / this.animTime * delayScale;
  }

  componentDidMount() {
    const keyframesCSS = generateCSS({
      effect: this.props.effect,
      effectLastKeyframe: this.effectLastKeyframe,
      effectChange: this.props.effectChange,
      effectDirection: this.props.effectDirection,
      animationName: this.animationName
    });
  }

  componentWillUnmount() {
    cleanupCSS(this.animationName);
  }

  nextMS() {
    return 0;
  }

  render() {
    const AnimatedLetters = () => (
      <div>
        {this.props.text.split('').map((char, i) => {
          const key = Math.round(Math.random() * 10000);

          let delay_multiplier = 1;
          switch (this.props.direction) {
            case 'right':
              delay_multiplier = i;
              break;
            case 'left':
              delay_multiplier = this.props.text.length - 1 - i;
              break;
          }

          const delay =
            delay_multiplier === 0
              ? 0
              : this.animTime / this.props.text.length * delay_multiplier;

          const animationStyles = {
            animationName: this.animationName,
            animationDuration: `${this.duration}s`,
            animationIterationCount: `${this.props.iterations}`,
            animationDelay: `${delay}s`,
            animationFillMode: 'both',
            display: 'inline-block'
          };

          const wrapperStyles = {
            display: 'inline-block',
            width: char == ' ' ? '0.5em' : 'auto'
          };

          const animatedLetterProps = {
            animationName: this.animationName,
            animationStyles,
            wrapperStyles,
            animRequiresPauseAtEnd: false,
            nextMS: () => this.nextMS(),
            paused: this.props.paused
          };

          return (
            <AnimatedLetter {...animatedLetterProps} key={`${key}_${i}`}>
              {char}
            </AnimatedLetter>
          );
        })}
      </div>
    );

    return <AnimatedLetters />;
  }
}

Wave.propTypes = propTypes;
Wave.defaultProps = defaultProps;

export default Wave;
