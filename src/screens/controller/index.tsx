import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator
} from "react-native";

import { ScreenOrientation } from "expo";
import ControllerButton from "../../components/controllerButton";
import ControllerPad from "../../components/controllerPad";
import Test from '../../components/testing';

interface IProps {}

interface IState {}

class Controller extends Component<IProps, IState> {
  async componentDidMount() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <Text>Paul Controller</Text>
        <View style={[styles.wrapper, styles.row]}>
          <StatusBar hidden />
          <View style={styles.leftPanel}>
            {/* <ControllerPad /> */}
            <Test/>
          </View>
          <View style={styles.rightPanel}>
            <ControllerButton
              styles={styles.topButton}
              char={"X"}
              color={"blue"}
            />
            <ControllerButton
              styles={styles.bottomButton}
              char={"A"}
              color={"green"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row"
  },
  leftPanel: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    // borderWidth: 1
  },
  rightPanel: {
    flex: 1,
    position: "relative",
    alignItems: "flex-end",
    // borderWidth: 1,
    marginRight: 10
  },
  topButton: {
    right: 50
  },
  bottomButton: {}
});

export default Controller;
