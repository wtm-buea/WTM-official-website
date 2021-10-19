import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeout from 'react-timeout';

const propTypes = {
  animationName: PropTypes.string.isRequired,
  animationStyles: PropTypes.object.isRequired,
  wrapperStyles: PropTypes.object.isRequired,
  animRequiresPauseAtEnd: PropTypes.bool.isRequired,
  nextMS: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  manualIterations: PropTypes.number
};

const defaultProps = {
  manualIterations: 99999
};

class AnimatedLetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationCount: 0,
      paused: props.animRequiresPauseAtEnd,
      parentPaused: props.paused
    };
  }

  componentDidMount() {
    if (!this.state.parentPaused) {
      this.componentReadyToAnimate();
    } else {
      this.pause();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.paused !== nextState.paused;
  }

  componentDidUpdate() {
    this.componentReadyToAnimate();
  }

  componentReadyToAnimate() {
    if (!this.state.paused && this.props.animRequiresPauseAtEnd) {
      this.animSpan.addEventListener('animationend', () => this.pause());
    }
    if (
      this.state.paused &&
      this.state.animationCount < this.props.manualIterations
    ) {
      this.props.setTimeout(() => this.play(), this.props.nextMS());
    }
  }

  pause() {
    this.setState({ paused: true });
  }

  play() {
    this.setState({
      paused: false,
      animationCount: this.state.animationCount + 1
    });
  }

  render() {
    const staticClasses = [];
    staticClasses[0] = `initial_${this.props.animationName}`;
    staticClasses[this.props.manualIterations] = `final_${
      this.props.animationName
    }`;
    return (
      <span style={this.props.wrapperStyles}>
        {this.state.paused ? (
          <span className={staticClasses[this.state.animationCount]}>
            {this.props.children}
          </span>
        ) : (
          <span
            ref={c => (this.animSpan = c)}
            style={this.props.animationStyles}
          >
            {this.props.children}
          </span>
        )}
      </span>
    );
  }
}

export default ReactTimeout(AnimatedLetter);
