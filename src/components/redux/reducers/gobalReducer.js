import {initialGlobalState} from '../state/initialGlobalState';


function globalReducer (state = initialGlobalState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default globalReducer;
