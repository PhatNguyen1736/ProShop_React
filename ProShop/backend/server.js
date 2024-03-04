import express from 'express'  // Dòng này import module Express vào ứng dụng Node.js của bạn. Express là một framework phổ biến cho Node.js, 
                                    //cung cấp các tính năng và công cụ để xây dựng các ứng dụng web và API một cách dễ dàng và linh hoạt.
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from "./routes/productRoutes.js"
dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold) ) //Dòng này là để bắt đầu lắng nghe các kết nối đến máy chủ của bạn trên cổng 5000. 
                                //Khi có một kết nối được thiết lập, máy chủ sẽ gọi hàm console.log để hiển thị thông báo "Server running on port 5000".
                            
