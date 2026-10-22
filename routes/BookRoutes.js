import { Router } from "express";
import BookController from "../controllers/BookController.js";

const router = new Router()

router.get("/users" , BookController.getBooks);
router.get("/user/:id" , BookController.getBookOne);
router.post("/registration", BookController.addbook);
router.patch("/user/:id" , BookController.updateBook);
router.delete("/user/:id" , BookController.deleteBook);




export default router;