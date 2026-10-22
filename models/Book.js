import mongoose  from "mongoose";

const bookShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Название обязательно для заполнения"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, " Цена обязательно для заполнения"],
        min: 500
    },
    description: {
        type: String,
        required: [true, "Описание обязательно для заполнения"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Имя обязательно для заполнения"],
        trim: true
    }
})
export default mongoose.model("Book" , bookShema)