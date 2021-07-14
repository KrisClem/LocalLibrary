function getTotalBooksCount(books) {
  let accumulator = 0;
  return books.reduce((acc) => acc + 1, accumulator);
}

function getTotalAccountsCount(accounts) {
  let accumulator = 0;
  return accounts.reduce((acc) => acc + 1, accumulator);
}

function getBooksBorrowedCount(books) {
  let result = 0
  for(let i = 0; i < books.length; i++){
    if(!books[i].borrows[0].returned){
      result++
    }
  }
  return result
}

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}
  



function getMostPopularBooks(books) {
  let result = [];
  for(let i = 0; i < books.length; i++) {
    result.push({ name: books[i].title, count: books[i].borrows.length})
  }
  result.sort((a, b) => b.count - a.count)
  if(result.length > 5) {
    return result.slice(0, 5)
  }
  return result
}

function borrowedNumber(books, author) {
  let result = 0;
  books.filter((book) => {
    if(author.id === book.authorId) {
      return result += book.borrows.length
    }
  })
  return result;
}

function getMostPopularAuthors(books, authors) {
  //create a holding array
  let result = [];
  //find all books with IDs matching an author ID
  for(let i = 0; i < authors.length; i++) {
    result.push({ name: `${authors[i].name.first} ${authors[i].name.last}`, count: borrowedNumber(books, authors[i])})
  }
  result.sort((a, b) => b.count - a.count)
  if(result.length > 5) {
    return result.slice(0, 5)
  }
  //create an object ------> { name: authorfirst authorlast, count: everybook by author borrows }
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
