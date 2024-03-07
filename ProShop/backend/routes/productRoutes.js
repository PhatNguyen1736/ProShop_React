import  express  from "express"
import {getProducts, getProoductById} from '../Controller/productController.js'

const  router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProoductById)

export default router