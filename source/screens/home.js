import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from "react-native";
import {COLOR_PRIMARY, COLOR_SECONDARY} from "../styles/common";
import {Button} from "../components/button";


const instructions = Platform.select({
    ios: 'We\'ll to see how the components are displayed be\n' +
    'each platformin this case, on iOS',
    android: 'We\'ll to see how the components are displayed be\n' +
    'each platformin this case, on Android.',
});

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_inside}>
                    <Text style={styles.welcome}>
                        Welcome to Awesome React Native Example!
                        Bienveni@s a Awesome React Native Example!
                    </Text>
                    <Text style={styles.instructions}>
                        Let's go!
                        Empecemos!
                    </Text>
                    <Text style={styles.instructions}>
                        {instructions}
                    </Text>
                </View>
                <View style={styles.container_inside}>
                    <Button/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARY,
    },
    container_inside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: COLOR_SECONDARY,
        marginBottom: 5
    },
});
