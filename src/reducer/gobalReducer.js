export const initialState = {
    name: 'redux store',
    global: true
};

function globalReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default globalReducer;
