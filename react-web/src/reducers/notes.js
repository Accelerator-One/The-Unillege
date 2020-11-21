const initialState = []

export default function notes(state = initialState, action){
    switch (action.type){
        case 'FETCH_NOTES':
            return [...state, ...action.notes];
        default: 
            return state;
    }
}