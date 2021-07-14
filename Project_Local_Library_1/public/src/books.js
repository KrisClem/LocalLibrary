function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let notReturned = [];
  for(let i = 0; i < books.length; i++) {
    books[i].borrows[0].returned ? returned.push(books[i]) : notReturned.push(books[i])
  }
  const total = [notReturned, returned];
  return total;
}

function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows
  const result = []
  
  for(let i = 0; i < accounts.length; i++) {
    for(let j = 0; j < borrow.length && j < 10 ; j++){
      if(borrow[j].id === accounts[i].id){
        accounts[i].returned = borrow[j].returned
        result.push(accounts[i])
      }
    }
  }
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
