import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLetter from '../AnimatedLetter';
import { generateCSS, cleanupCSS } from '../../libs/effectCSS';

const propTypes = {
  text: PropTypes.string.isRequired, // The text that will be animated
  iterations: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['infinite'])
  ]), // The number of times each character will animate, an integer or the string 'infinite'
  effect: PropTypes.string, // The name of the effect to be applied to the characters
  effectDuration: PropTypes.number, // The number of seconds a single effect will last
  effectDelay: PropTypes.number, // Average number of seconds between two instances of the effect being triggered on a character (actual amount is random, between 0 and 2 x effectDelay)
  effectChange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // The value of the animated css property at the effect's apex (property depends on effect chosen)
  effectDirection: PropTypes.string, // Some effects can have their direction specified (valid values depend on effect chosen)
  paused: PropTypes.bool, // Should the animation be paused when first rendered
  initialStyle: PropTypes.object // a style (css) object containing any styles to be applied to the characters as they are initialy rendered
};

const defaultProps = {
  iterations: 'infinite',
  effect: 'jump',
  effectDelay: 0.5,
  effectDuration: 0.3,
  effectChange: 1,
  effectDirection: 'up',
  paused: false,
  initialStyle: {}
};

class Random extends React.Component {
  constructor(props) {
    super(props);

    this.animationName = `textAnim_${props.effect}_${Math.round(
      Math.random() * 100000
    )}`;
  }

  componentDidMount() {
    const keyframesCSS = generateCSS({
      effect: this.props.effect,
      effectLastKeyframe: 1,
      effectChange: this.props.effectChange,
      effectDirection: this.props.effectDirection,
      animationName: this.animationName
    });
  }

  componentWillUnmount() {
    cleanupCSS(this.animationName);
  }

  nextMS() {
    return Math.random() * this.props.effectDelay * 2 * 1000;
  }

  render() {
    const AnimatedLetters = () => (
      <div>
        {this.props.text.split('').map((char, i) => {
          const key = Math.round(Math.random() * 10000);

          const animationStyles = {
            animationName: this.animationName,
            animationDuration: `${this.props.effectDuration}s`,
            animationIterationCount: 1,
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
            animRequiresPauseAtEnd: true,
            nextMS: () => this.nextMS(),
            paused: this.props.paused,
            manualIterations:
              this.props.iterations === 'infinite'
                ? 99999
                : this.props.iterations
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

Random.propTypes = propTypes;
Random.defaultProps = defaultProps;

export default Random;
