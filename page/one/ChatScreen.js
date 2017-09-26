/**
 * Created by yaoyongchao on 17-9-26.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'ChatScreen',
    };
    render() {
        return (
            <View >
                <Text>ChatScreen界面</Text>
            </View>
        );
    }

}