export default (state, action) => {
    switch (action.type) {
        case 'FETCH':
            return {priceList: state.priceList}    
        default:
            return state;
    }
}