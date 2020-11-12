import React, { Component } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logout } from '../store/actions/user'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Login')
    }

    render(){
        const options = { email: this.props.user.email, secure: true }
        return (
            <View style={styles.container} >
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname} >{this.props.user.name}</Text>
                <Text style={styles.email} >{this.props.user.email}</Text>
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

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        onLogout: () => dispatch(logout())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile)

//export default Profile