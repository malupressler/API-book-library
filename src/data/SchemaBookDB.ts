
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
  
  export const BookSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    title: String, // String is shorthand for {type: String}
    author:String, 
    entrace_date: Date,
    status: String,
    finish_date: Date,
    score: Number,
  });

const BooksModelSchema = mongoose.model('books', BookSchema);
export default BooksModelSchema;