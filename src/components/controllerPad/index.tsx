import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  PanResponder
} from "react-native";

interface IProps {
  styles?: any;
}

interface IState {}

class ControllerPad extends Component<IProps, IState> {
  panResponder;
  animatedValue;
  _value;
  componentWillMount() {
    this._value = { x: 0, y: 0 };
    this.animatedValue = new Animated.ValueXY();
    this.animatedValue.addListener(value => (this._value = value));
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y
        });
        this.animatedValue.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.animatedValue.x, dy: this.animatedValue.y }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.spring(this.animatedValue, {
          toValue: { x: 0, y: 0 },
          speed: 200,
          bounciness: 20
        }).start();
      }
    });
  }

  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    };
    return (
      <View style={[styles.padBase, this.props.styles]}>
        <Animated.View
          style={[styles.padCenter, animatedStyle]}
          {...this.panResponder.panHandlers}
        ></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padBase: {
    height: 200,
    width: 200,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#555",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#222",
    overflow: "hidden"
  },
  padCenter: {
    height: 100,
    width: 100,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#222"
  }
});

export default ControllerPad;
