import { BookInformations } from './BookInfoDatas';
import BooksModelSchema from '../data/SchemaBookDB';

export const getBookList = async (req:any, res:any) => {
    BooksModelSchema.find((err: any, result: any) => {
        if (err) {
          let a = err
          res.send(`Error! It was not able to get the list. ${a}`);
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createBook = async (req:any, res:any) => {
    const request: BookInformations = req.body;
    let booklibary = new BooksModelSchema(request);
    try {
      await booklibary.save();
      res.send(booklibary);
    } catch (error) {
      res.status(500).send(booklibary);
    }
  };

export const updateBook = async (req:any, res:any) => {
    const book: BookInformations = req.body;
    try {
      await BooksModelSchema.findByIdAndUpdate(req.params.id, req.body);
      res.send(book);
      console.log('Updated with success!')
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const deleteBook = async (req:any, res:any) => {
    const bookID: number = req.body['id'];
    try {
      const book = await BooksModelSchema.findByIdAndDelete(req.params.id);
      console.log('Book has been deleted!')
  
      if (!book) res.status(404).send("No item found");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
    //delete
  };