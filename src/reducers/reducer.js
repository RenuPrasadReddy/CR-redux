const reducer = (state = [], action) =>{ 
    switch(action.type) {
        case 'CREATE_CONTACT' :
            return [...state, action.payload];
        case 'REMOVE_CONTACT': {
            console.log("reducer=", state);
            return state.filter((contact, i) => i !== action.id)
        }
        default: 
            return state;
    }
}

export default reducer;