class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

export default Book;
