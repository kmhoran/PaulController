import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
  } from "react-native";

  import Controller from './screens/controller';


interface IProps {}

interface IState{
    screenType: string;
}

class Main extends Component<IProps,IState>{
    state = {
        screenType: 'controller'
    }

    render(){

        return(
            <SafeAreaView style={styles.wrapper}>
            <Controller/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F5FCFF"
    },
    headContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: 100
    },
    textInputContainer: {
      flex: 2
    },
    buttonContainer: {
      flex: 1
    },
    mainContainer: {
      flex: 9
    },
    textInput: {
      height: 35,
      marginBottom: 10,
      borderColor: "#ccc",
      borderWidth: 1,
      backgroundColor: "#eaeaea",
      padding: 5
    }
  });

export default Main;