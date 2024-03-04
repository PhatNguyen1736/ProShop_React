import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constant/productContants'
import axios from 'axios'
export const listProducts = () => async(dispatch) =>{
    try {
        //Hàm dispatch được sử dụng để gửi một hành động (action) đến Redux store. 
        //Hành động này có thể là một đối tượng JavaScript, chứa thông tin về loại hành động và dữ liệu cần thiết để cập nhật trạng thái trong Redux store.
        dispatch({
            type: PRODUCT_LIST_REQUEST
        })

        const {data} = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message :  error.message,
        })
    }
}