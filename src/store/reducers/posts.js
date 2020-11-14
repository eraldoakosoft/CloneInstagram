import { ADD_COMMENT, ADD_POST } from '../actions/actionsTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Gabigol',
        email: 'gabigol@gmail.com',
        image: require('../../../assets/imgs/gabigol.jpg'),
        comments: [{
            nickname: 'Bruno Henrique',
            comment: 'Oto patama!'
        }, {
            nickname: 'Everton Ribeiro',
            comment: 'Meu garoto'
        },]
    }, {
        id: Math.random(),
        nickname: 'Jorge Jesus',
        email: 'jj@gmail.com',
        image: require('../../../assets/imgs/jorgejesus.jpeg'),
        comments: [{
            nickname: 'Gabigol',
            comment: 'Saudades ;('
        },
        {
            nickname: 'BH',
            comment: 'Oto patama!'
        }]
    }, {
        id: Math.random(),
        nickname: 'Michael',
        email: 'micha@gmail.com',
        image: require('../../../assets/imgs/Michael.jpg'),
        comments: [{
            nickname: 'Pedro',
            comment: 'Boa!'
        }, {
            nickname: 'Everton Ribeiro',
            comment: 'Meu garoto'
        },]
    }]
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST: 
            return{
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT: 
            return{
                ...state,
                posts: state.posts.map(post => {
                    if ( post.id === action.payload.postId ){
                        if ( post.comments ){
                            post.comments = post.comments.concat(action.payload.comment)
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        
        default:
            return state
    }
}

export default reducer