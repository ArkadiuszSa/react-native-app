import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Form, Item, Input, Icon, Text } from 'native-base';

import { colors } from '../../../config/variables';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.mainTurquoise,
    },
    formWrapper: {
        width: Dimensions.get('window').width * 0.8,
    },
    input: {
        color: 'white',
        fontSize: 20,
    },
    registerButton: {
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: 'white',
        padding: 10,
    },
    registerButtonText: {
        textAlign: 'center',
        fontSize: 25,
        color: colors.mainTurquoise,
    },
    icon: {
        color: 'white',
    },
});

interface ParentProps {}

type RegisterFormProps = ParentProps;

export class RegisterForm extends Component<RegisterFormProps> {
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.formWrapper}>
                    <Form>
                        <Item>
                            <Icon active style={styles.icon} type="MaterialIcons" name="person" />
                            <Input
                                style={styles.input}
                                placeholderTextColor="white"
                                placeholder="Email"
                                // onChangeText={this.props.handleTitleChange}
                            />
                        </Item>
                        <Item>
                            <Icon active style={styles.icon} type="MaterialIcons" name="lock" />

                            <Input
                                style={styles.input}
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                placeholder="Password"

                                // value={this.props.description}
                                // onChangeText={this.props.handleDescriptionChange}
                            />
                        </Item>
                        <Item>
                            <Icon active style={styles.icon} type="MaterialIcons" name="lock" />

                            <Input
                                style={styles.input}
                                secureTextEntry={true}
                                placeholderTextColor="white"
                                placeholder="Cofirm password"
                                // value={this.props.description}
                                // onChangeText={this.props.handleDescriptionChange}
                            />
                        </Item>
                    </Form>
                </View>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
