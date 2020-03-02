import { v4 as uuidv4 } from "uuid";

class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.id = uuidv4();
  }

  toggleRead() {
    this.read = !this.read;
  }
}

export default Book;
