module.exports = (React, ReactNative) => {
  const { Animated } = ReactNative;
  const TimerMixin = require('react-timer-mixin');

  // A component that scales in when mounted.
  const AnimatedOptionsContainer = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { scaleAnim: new Animated.Value(0.001) };
    },
    componentDidMount() {
      this.setTimeout(() => {
        Animated.timing(this.state.scaleAnim, {
          duration: 30,
          toValue: 1
        }).start();
    }, 8);
    },
    render() {
      return (
        <Animated.View style={[this.props.style, { transform: [ { scale: this.state.scaleAnim } ] }]}>
          { this.props.children }
        </Animated.View>
      );
    }
  });

  return AnimatedOptionsContainer;
};
