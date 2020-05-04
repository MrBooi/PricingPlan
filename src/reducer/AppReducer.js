export default (state, action) => {
    switch (action.type) {
        case 'FETCH':
            return { priceList: state.priceList }
        case 'SUBSCRIBE':
            return {
                ...state,
                subscibe_id  = state.subscibe_id
            }
        default:
            return state;
    }
}