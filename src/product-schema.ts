
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
  
  export const Book = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    title: String, // String is shorthand for {type: String}
    author:String, 
    data_entrada: Date,
    status: String,
    data_saida: Date,
    nota: Number
  });

const books = mongoose.model("books", Book);
export default books;