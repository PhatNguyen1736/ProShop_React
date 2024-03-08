import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import {protect} from '../middleware/authMiddleware.js'
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
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

//Sau khi định nghĩa schema, chúng ta sử dụng phương thức mongoose.model() để tạo ra một model dựa trên schema đã định nghĩa. Trong trường hợp này, model có tên là 'User' và được liên kết với userSchema.
const User = mongoose.model('User', userSchema)

export default User