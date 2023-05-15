const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")


const cors = require("cors")

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DBConnection successful!")).catch((error) => {
    console.log(error)
})

app.use(express.json())

app.use(cors())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is running!")
})