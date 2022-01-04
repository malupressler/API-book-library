import { Book, books } from "./product";

export const getAllBooks = async (): Promise<Book[]> => {
    return books;
};

export const createBooks = async (book:Book): Promise<void> => { 
    books.push(book);  
}

export const updateBooks= async (book:Book): Promise<void> => { 
    let index = books.findIndex(d => d.id === book['id']);
    if(index >0 || index==0)
   {
    books[index]['title'] = book['title'];
    books[index]['author'] = book['author'];
    books[index]['status'] = book['status'];
   }
}


export const deleteBooks = async (id:number): Promise<void> => { 
    console.log(`in delete product index is ${JSON.stringify(id)}`)
    let index = books.findIndex(d => d.id === id);
    console.log(`in delete product index is ${index}`)
    if(index >0 || index==0)
    books.splice(index, 1);
    
}
