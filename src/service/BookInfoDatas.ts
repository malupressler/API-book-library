export interface BookInformations {
    id:String;
    title: String, // String is shorthand for {type: String}
    author:String, 
    entrace_date: Date,
    status: String,
    finish_date: Date,
    score: Number,
}

 export const bookList: BookInformations[]=[];