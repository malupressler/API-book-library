import { Book } from './product';
import books from './product-schema';

export const getBookList = async (req:any, res:any) => {
    books.find((err: any, result: any) => {
        if (err) {
          res.send("Error!");
        } else {
        console.log(JSON.stringify(result))
          res.send(result);
        }
      });
  };

  export const createBook = async (req:any, res:any) => {
    const request: Book = req.body;
    console.log(JSON.stringify(request))
    let booklibary = new books(request);
    booklibary.save((err:any, result:any) => {
        if (err) {
            res.send("Error!");
          } else {
          console.log(JSON.stringify(result))
            res.send(result);
          }
    });
  };

export const updateBook = async (req:any, res:any) => {
    const book: Book = req.body;
    try {
      await books.findByIdAndUpdate(req.params.id, req.body);
      res.send(book);
      console.log('updated with success')
    } catch (error) {
      res.status(500).send(error);
    }
  };

  export const deleteBook = async (req:any, res:any) => {
    const bookID: number = req.body['id'];
    try {
      const book = await books.findByIdAndDelete(req.params.id);
  
      if (!book) res.status(404).send("No item found");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
    //delete
  };