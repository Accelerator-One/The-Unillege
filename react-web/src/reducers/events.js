const initialState = []

export default function events(state = initialState, action){
    switch (action.type){
        case 'FETCH_EVENTS':
            return [...state, ...action.events];
        default: 
            return state;
    }
}