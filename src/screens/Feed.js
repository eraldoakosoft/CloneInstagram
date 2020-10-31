import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state ={
        posts: [{
            id: Math.random(),
            nickname: 'Gabigol',
            email: 'gabigol@gmail.com',
            image: require('../../assets/imgs/gabigol.jpg'),
            comments: [{
                nickname: 'Bruno Henrique',
                comment: 'Oto patama!'
            },{
                nickname: 'Everton Ribeiro',
                comment: 'Meu garoto'
            },]
        },{
            id: Math.random(),
            nickname: 'Jorge Jesus',
            email: 'jj@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments:[]
        }]
    }

    render(){
        return(
            <View style={styles.container} >
            <Header/>
            <FlatList 
                data={this.state.posts} 
                keyExtractor={item => `${item.id}`} 
                renderItem={ ( { item } ) => 
                <Post 
                    key={item.id} 
                        {...item}  
                /> } >
            </FlatList>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
}) 

export default Feed