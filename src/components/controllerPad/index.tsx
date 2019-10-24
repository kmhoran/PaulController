import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View
  } from "react-native";


interface IProps {
    styles?: any;
}

interface IState{
    
}

class ControllerPad extends Component<IProps,IState>{

    render(){

        return(
            <View style={[styles.padBase, this.props.styles]}>
                <View style={styles.padCenter}>

                </View>
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
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#222'
    },
    padCenter: {
        height: 100,
        width: 100,
        borderRadius: 999,
        alignItems: "center",
        backgroundColor: "#222",
    }
  });

export default ControllerPad;