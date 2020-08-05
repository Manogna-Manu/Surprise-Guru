const Reducer = (state, action) => {
    const { type, payload } = action
    const { gift, cart} = state;
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        }
        case 'ADD_TO_CART': {
            const { index } = payload;
            gift[index].incart = "true"
            return {
                ...state,
                cart: [...cart, gift[index]]
            }
        }
        case 'DELETE_ITEMS': {
            const { index } = payload;
            const Id = gift[index].id
            gift[Id - 1].incart = "false"
            cart.splice(index, 1)
            return {
                ...state,
                cart: [...cart],
                gift: [...gift]
            }
        }
        case 'ITEM': {

            const { index } = payload
            return {
                ...state,
                item: [gift[index]],

            }

        }
        default: {
            return state
        }
    }
}
export default Reducer;
