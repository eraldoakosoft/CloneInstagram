import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render(){
        return (
            <View style={styles.container} >
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} value={this.state.email}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ name })} />
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.password}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={ () => {} } style={styles.buttom} >
                    <Text style={styles.buttomText} >Salvar</Text>
                </TouchableOpacity>           
            </View>
        )
    }
}

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center'
     },
     buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
     },
     buttomText:{
         fontSize: 20,
         color: '#FFF'
     },
     input: {
         marginTop: 20,
         width: '90%',
         backgroundColor: '#EEE',
         height: 40,
         borderWidth: 1,
         borderColor: '#333',
         paddingLeft: 15,
     }
 })

 export default Register