module.exports = (React, ReactNative, { model, styles }) => {
  const { View, TouchableOpacity } = ReactNative;

  const MenuOption = React.createClass({
    displayName: 'MenuOption',
    contextTypes: {
      menuController: model.IMenuController
    },
    onPress() {
      !this.props.disabled && this.props.onPress(this.props.value)
    },
    render() {
      if(this.props.renderTouchable) {
        return React.cloneElement(this.props.renderTouchable(), {onPress: this.onPress}, (
          <View style={[styles.option, this.props.style]}>
            { this.props.children }
          </View>
        ));
      }
      return (
        <TouchableOpacity onPress={this.onPress}>
          <View style={[styles.option, this.props.style]}>
            { this.props.children }
          </View>
        </TouchableOpacity>
      );
    }
  });

  return MenuOption;
};
