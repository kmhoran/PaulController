import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

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
    shadowRadius: 4,
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

export default function ControllerButton(props: IProps) {
  const { char, color } = props;
  return (
    <TouchableOpacity style={props.styles}>
      <View style={styles.button}>
        <Text style={[styles.text, { color }]}>{char[0]}</Text>
      </View>
    </TouchableOpacity>
  );
}
