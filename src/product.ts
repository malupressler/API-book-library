export interface Book {
    id: number | null;
    title: String; // String is shorthand for {type: String}
    author:String; 
    data_entrada: Date;
    status: String;
    data_saida: Date;
    nota: Number;
}

 export const books: Book[]=[];