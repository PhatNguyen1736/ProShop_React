import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constant/cartContants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const newItem = action.payload;
            const existItem = state.cartItems.find(item => item.product === newItem.product);

            if (existItem) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng sản phẩm
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.product === existItem.product ? newItem : item
                    )
                };
            } else {
                // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem]
                };
            }
        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            }
        default:
            return state;
    }
};
