const INITIAL_STATE = {count: 0}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'SPEC_COUNT_FETCHED':
            return {...state, count: action.payload.data }
        default:
            return state
    }
}