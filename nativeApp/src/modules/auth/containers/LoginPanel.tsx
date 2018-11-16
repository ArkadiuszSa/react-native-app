import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { colors } from '../../../config/variables';
import {  Text, Icon } from 'native-base';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.mainTurquoise
    },
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    icon: {
        marginLeft: 15,
        fontSize: 40,
        color: 'white'
    },
	header: {
        fontSize: 40,
        color: 'white'
	},
	loginButton: {
        marginBottom: 10,
        borderWidth: 3,
        backgroundColor: colors.mainTurquoise,
        borderColor: 'white',
        padding: 10
    },
    registerButton: {
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: 'white',
        padding: 10
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    registerButtonText: {
        textAlign: 'center',
        fontSize: 25,
        color: colors.mainTurquoise
    }
});

type LoginPanelContainerProps = NavigationScreenProps;

export class LoginPanelContainer extends Component<LoginPanelContainerProps> {

	render() {
		return (
			<View style={styles.view}>
            	<View style={styles.headerWrapper}>
                    <Text style={styles.header}>To Do</Text>
                    <Icon
                        style={styles.icon}
                        name='list-box'
                    />
                </View>
                <View>
                <TouchableOpacity style={styles.loginButton} onPress={() => console.log() } >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton} onPress={() => console.log() } >
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                </View>
			</View >
		);
	}
}
