function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id)
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1 : -1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let result = [];
 for (let i = 0; i < books.length; i++) {
  books[i].borrows.map((borrow) => {
    borrow.id === account.id ? result.push(borrow.id === account.id) : 0
    });
  }
  return result.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  //loop over all books and verify if they are checked out
  for(let i = 0; i < books.length; i++) {
      books[i].borrows.forEach((borrow) => {
      if(borrow.id === account.id && !borrow.returned)  {
        result.push(books[i])}
    });
    /*for(let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id && !books[i].borrows[j].returned) {
        result.push(books[i])
      }
    }*/
  }
  for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < authors.length; j++) {
      if(result[i].authorId === authors[j].id) {
        result[i].author = authors[j]
      }
    }
  }
  //with filtered array add the author key to the book object
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
