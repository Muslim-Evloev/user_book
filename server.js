import express from "express";
import mongoose from "mongoose";


const PORT = 9000;
const app = express();
app.use(express.json());


mongoose
.connect("mongodb://localhost:27017/book")
.then(() => {
    console.log("Успешно подключено к БД");
})
.catch((err) => {
    console.log("Ошибка при подключении к БД" + err);
    process.exit(1);
});

app.listen(PORT, () =>{
    console.log(`Успешное подключение к серверу на порту  ${PORT}`);
    
})