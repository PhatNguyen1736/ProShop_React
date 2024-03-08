import express from 'express'  // Dòng này import module Express vào ứng dụng Node.js của bạn. Express là một framework phổ biến cho Node.js, 
                                //cung cấp các tính năng và công cụ để xây dựng các ứng dụng web và API một cách dễ dàng và linh hoạt.
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/usersRoutes.js"
import bodyParser from 'body-parser';// Import body-parser

dotenv.config()
connectDB()

const app = express()

// Sử dụng body-parser middleware 
// Được sử dụng để cấu hình middleware trong ứng dụng Express của bạn để phân tích và trích xuất dữ liệu từ phần body của yêu cầu HTTP.
//
//Cấu hình middleware để phân tích dữ liệu JSON từ phần body của yêu cầu HTTP
app.use(bodyParser.json());

//cấu hình middleware để phân tích dữ liệu được gửi dưới dạng URL-encoded từ phần body của yêu cầu HTTP
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold) ) //Dòng này là để bắt đầu lắng nghe các kết nối đến máy chủ của bạn trên cổng 5000. 
                                //Khi có một kết nối được thiết lập, máy chủ sẽ gọi hàm console.log để hiển thị thông báo "Server running on port 5000".
                            
