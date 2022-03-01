import { FETCH_POSTS, CREATE_POST, ADD_POST } from "../actions/actionsTypes"


const initialState = {
    items: [],
    item: {}
}

const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            // console.log('reducer fetching...')
            return {
                ...state,
                items: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                item: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                items: [ action.payload, ...state.items ]
            }
        default:
            return state
    }
}


export default postReducer