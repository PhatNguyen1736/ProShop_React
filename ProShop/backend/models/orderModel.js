import mongoose from "mongoose";
// userSchema là một đối tượng schema của Mongoose được định nghĩa để mô tả cấu trúc dữ liệu của một người dùng trong cơ sở dữ liệu MongoDB.
const orderSchema = mongoose.Schema({
    user:{
     type: mongoose.Schema.Types.ObjectId,
     required: true
    },
    orderItem:[
        {
            name: {type: String, required:true},
            qty: {type: Number, required:true},
            image: {type: String, required:true},
            price: {type: Number, required:true},
            product: {
                type: mongoose.Schema.Types.ObjectId, 
                required:true,
                ref: 'Product'
            }
        }
    ],
    shippingAddress:{
        address: {type: String, required:true},
        city: {type: String, required:true},
        postalCode: {type: String, required:true},
        country: {type: String, required:true}
    },
    paymentMethod:{
        type: String,
        required: true
    },  
    paymentResult:{
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
    },  

    taxPrice:{
        type: Number,
        required: true,
        default: 0.0
    },  
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0
    }, 
    shippingPrice:{
        type: Number,
        required: true,
        default: 0.0
    }, 
    isPaid:{
        type: Boolean,
        required: true,
        default: false
    },
     paidAt:{
        type: Date
     },
     IsDdeliverd: {
        type: Boolean,
        required: true,
        default: false
     },
     deliverdAt:{
        type: Date
     }
},
{
    timestamps: true
})
//Sau khi định nghĩa schema, chúng ta sử dụng phương thức mongoose.model() để tạo ra một model dựa trên schema đã định nghĩa. Trong trường hợp này, model có tên là 'User' và được liên kết với userSchema.
const Order = mongoose.model('Order', orderSchema)
export default Order