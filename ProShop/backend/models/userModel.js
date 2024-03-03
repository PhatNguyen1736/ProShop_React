import mongoose from "mongoose";
// userSchema là một đối tượng schema của Mongoose được định nghĩa để mô tả cấu trúc dữ liệu của một người dùng trong cơ sở dữ liệu MongoDB.
const userSchema = mongoose.Schema({
    name:{
     type: String,
     required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
       
},{
    timestamps: true
})
//Sau khi định nghĩa schema, chúng ta sử dụng phương thức mongoose.model() để tạo ra một model dựa trên schema đã định nghĩa. Trong trường hợp này, model có tên là 'User' và được liên kết với userSchema.
const User = mongoose.model('User', userSchema)
export default User