const initialState = []

export default function alumni(state = initialState, action){
    switch (action.type){
        case 'FETCH_ALUMNI':
            return [...state, ...action.alumni];
        default: 
            return state;
    }
}