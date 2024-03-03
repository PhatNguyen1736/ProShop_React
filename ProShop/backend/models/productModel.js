import mongoose from "mongoose";
// userSchema là một đối tượng schema của Mongoose được định nghĩa để mô tả cấu trúc dữ liệu của một người dùng trong cơ sở dữ liệu MongoDB.
const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String, required: true}
}, {
    timestamps: true
})
const productSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.types.ObjectId,
        require: true, 
    },
    name:{
     type: String,
     required: true
    },
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    countInStock:{
        type: Number,
        required: true,
        default: 0
    },
       
},{
    timestamps: true
})
//Sau khi định nghĩa schema, chúng ta sử dụng phương thức mongoose.model() để tạo ra một model dựa trên schema đã định nghĩa. trong trường hợp này, model có tên là 'User' và được liên kết với userSchema.
const Product = mongoose.model('Product', productSchema)
export default Product