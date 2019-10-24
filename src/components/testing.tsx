import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder
} from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#222",
    shadowColor: "#555",
    shadowOpacity: 5,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 4
  },
  text: {
    fontSize: 70,
    fontWeight: "bold"
  }
});

interface IProps {
  char: string;
  color: string;
  styles: any;
}

class Test extends Component {
panResponder;
animatedValue;
_value;
componentWillMount(){
    this._value = {x: 0, y: 0};
    this.animatedValue = new Animated.ValueXY();
    this.animatedValue.addListener((value) => this._value = value)
    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => true,
        onMoveShouldSetPanResponder: (e, gestureState) => true,
        onPanResponderGrant: (e, gestureState) => {
            this.animatedValue.setOffset({
                x: this._value.x,
                y: this._value.y
            })
            this.animatedValue.setValue({x: 0, y: 0});
        },
        onPanResponderMove: Animated.event([
            null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
        ]),
        // onPanResponderMove: (e, gestureState) => {
        //     console.log('Gest', gestureState);
        // },
        onPanResponderRelease: (e, gestureState) => {
            this.animatedValue.flattenOffset();
            Animated.decay(this.animatedValue, {
                deceleration: 0.997,
                velocity: {x: gestureState.vx, y: gestureState.vy}
            }).start();
        }
    })
}

  render() {
      const animatedStyle = {
          transform: this.animatedValue.getTranslateTransform()
      }
    return (
      <View style={styles.wrapper}>
          <Animated.View style={[styles.button, animatedStyle]} {...this.panResponder.panHandlers}>
            <Text style={[styles.text, { color: "red" }]}>T</Text>
          </Animated.View>
      </View>
    );
  }
}

export default Test;
