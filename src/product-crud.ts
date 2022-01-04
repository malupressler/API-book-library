import * as BookService from './product-crud.service';
import { Book } from './product';
import books from './product-schema';

export const getBookList = async (req:any, res:any) => {
    const BookList: Book[] = await BookService.getAllBooks();
    console.log(`in get ${JSON.stringify(BookList)}`)
    try {
        res.status(200).send(
            BookList);
      } catch (message) {
        res.status(404).send(message);
      }
  };

  export const createBook = async (req:any, res:any) => {
    const book: Book = req.body;
    await BookService.createBooks(book);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (message) {
        res.status(404).send(message);
      }
  };

export const updateBook = async (req:any, res:any) => {
    const book: Book = req.body;
    await BookService.updateBooks(book);
    try {
        res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: ""
        });
      } catch (message) {
        res.status(404).send(message);
      }
  };

  export const deleteBook = async (req:any, res:any) => {
    const bookID: number = req.body['id'];
    await BookService.deleteBooks(bookID);
    try {
        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
             result: ""
        });
      } catch (message) {
        res.status(404).send(message);
      }
  };