import React from "react";
import {Alert, StyleSheet, Text, TouchableHighlight} from "react-native";

export const Button = () => (
    <TouchableHighlight style={styles.container}
                        onPress={() => {
                            console.log("click, click, click");
                            Alert.alert('Click', 'click, click, click');
                        }}
                        activeOpacity={10}
    >
        <Text style={styles.button}>Go!</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#818181',
        color: '#fff',
        borderRadius: 5,
        padding: 15,
    },
});
