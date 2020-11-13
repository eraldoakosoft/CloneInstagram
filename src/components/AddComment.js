import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import { connect } from 'react-redux'
import { addComment } from '../store/actions/posts'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        this.props.onAddComment({
            postId: this.props.postId,
            comment:{
                nickname: this.props.name,
                comment: this.state.comment
            }
        })
        this.setState({comment: '', editMode: false })
    }


    render() {
        let commentArea = null
        if ( this.state.editMode ){
            commentArea = (
                <View style={styles.container} >
                    <TextInput placeholder='Poder comentar...'
                        style={styles.input}  autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} 
                        onSubmitEditing={ this.handleAddComment }/>
                    <TWF onPress={() => this.setState({ editMode: false })} >
                        <Icon name='times' size={15} color='#555'  />
                    </TWF>
                </View>
            )
        }else{
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })} >
                    <View style={styles.container} >
                        <Icon name='comments' size={25} color='#555' />
                        <Text style={styles.caption} >Adicioner um comentario </Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{ flex: 1 }} >
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    caption:{
        marginLeft: 12,
        fontSize: 12,
        color: '#CCC'
    },
    input:{
        width: '90%'
    }
})

//export default AddComment

const mapStateToProps = ({user}) => {
    return {
        name: user.name
    }
}

const mapDispachToProps = dispatch => {
    return {
        onAddComment : payload => dispatch(addComment(payload))
    }
}

export default connect( mapStateToProps, mapDispachToProps )(AddComment)
