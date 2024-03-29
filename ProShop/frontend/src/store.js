import {createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailReducer} from './reduces/productReducer'
import {cartReducer} from  './reduces/cartReducer'
import {userLoginReducer} from './reduces/userReducer'

const reducer = combineReducers({
    productList : productListReducer,
    productDetail : productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

// Đoạn mã kiểm tra xem có dữ liệu cartItems được lưu trữ trong localStorage không. 
// Nếu có, nó sẽ lấy dữ liệu đó và chuyển đổi từ chuỗi JSON thành mảng đối tượng JavaScript bằng phương thức JSON.parse(). 
// Nếu không có dữ liệu trong localStorage, nó sẽ trả về một mảng trống.
const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []


const initialState = {
    cart : {cartItems: cartItemFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
