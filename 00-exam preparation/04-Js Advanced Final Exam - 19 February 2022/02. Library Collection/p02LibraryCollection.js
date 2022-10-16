class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);
        if (!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (currentBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        currentBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);
        if (!currentBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (!currentBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books = this.books.filter(book => book !== bookName);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let buffer = [];
            buffer.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sortedBooks.forEach(book => {
                buffer.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);
            });
            return buffer.join('\n');
        }
        let currentBook = this.books.find(book => book.bookAuthor === bookAuthor);
        if (!currentBook) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return `${currentBook.bookName} == ${bookAuthor} - ${currentBook.payed ? 'Has Paid' : 'Not Paid'}.`;
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
//---------------------------------------------------------
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
//---------------------------------------------------------
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));
//---------------------------------------------------------
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));
//---------------------------------------------------------
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

