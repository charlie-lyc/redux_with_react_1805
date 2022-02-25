import { FETCH_POSTS, CREATE_POST } from "../actions/actionsTypes"


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
                items: [ action.payload, ...state.items ],
                item: action.payload
            }
        default:
            return state
    }
}


export default postReducer