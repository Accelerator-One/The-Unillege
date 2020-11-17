// Initial State
const initialState = [];

// Posts reducer with defined actions
export default function posts(state = initialState, action) {

    let postList = state.slice();

    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.post];
        case 'UPDATE_NOTE':
            let postToUpdate = postList[action.id]
            postToUpdate.text = action.text;
            postList.splice(action.id, 1, postToUpdate);
            return postList;
        case 'DELETE_POST':
            postList.splice(action.id, 1);
            return postList;
        case 'FETCH_POSTS':
            return [...state, ...action.notes];
        default:
            return state;
    }
}
