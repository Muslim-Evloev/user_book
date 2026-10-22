import Book from "../models/Book";
class BookController {
    async getBooks(req , res){
        try{
            const books = await Book.find()
            res.status(200).json(books)
        }catch(err){
            res.status(404).json("Ошибка при получении книги:" + err)
        }
    }

    async getBookOne(req , res){
        try{
            const{id} = req.params
            const book = await Book.findById(id)
            if(!book){
                res.status(404).json("Такой книги не существует!")
            }
            res.status(200).json(book)
        }catch(err){
            res.status(500).json("Ошибка при получении книги:" + err)
        }
    }

async addbook(req , res ){
    try{
        const{name, description, author, price} = req.body;
        const newBook = await Book.create({name, description, author, price});
        res.json(newBook);
        newBook.save();
    }catch (err){
        res.status(500).json("Ошибка при добавлении!" + err);
        console.log("Ошибка при добавлении!" + err);
        
    }
}
async updateBook(req , res){
    try{
        const{id} = req.params;
        const{name, description, author, price} = req.body;
        const updateBook = await Book.findByIdAndUpdate(id,{
            name,
            description,
            author,
            price  
        }, {new:true});
        if(!updateBook){
            res.status(404).json("Такой книги не существует!");
        }
        res.status(200).json(updateBook);
        }catch(err){
            res.status(500).json("Ошибка при обновлении книги:" + err);

        }
    }

async deleteBook(req , res){
try{
      const{id} = req.params;
      const book = await Book.findByIdAndDelete(id);
      if (!book) {
        res.status(404).json("Такой книги не существует!")
      }res.status(200).json("Книга успешно удалена!");
    }catch (err){
      res.status(500).json("Ошибка при удалении книги: " + err)
    }
  }
}

export default new BookController();

