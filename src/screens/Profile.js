import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { createStackNavigator } from 'react-navigation'
import Login from './Login'

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Login')
    }

    render(){
        const options = { email: 'eraldo450518@gmail.com', secure: true }
        return (
            <View style={styles.container} >
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname} >Eraldo</Text>
                <Text style={styles.email} >eraldo450518@gmail.com</Text>
                <TouchableOpacity onPress={this.logout} style={styles.buttom} >
                    <Text style={styles.buttomText} >Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center'
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop:  100
    },
    email :{
        marginTop: 20,
        fontSize: 25
    },
    buttom :{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttomText : {
        fontSize: 20,
        color: '#FFF'
    }
})

export default Profile