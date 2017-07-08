import moment from 'moment'
import _ from 'lodash'

export default {
  borrowBook(state, bookId) {
    const book = state.books.find(book => {
      return book.id == bookId
    })
    book.isBorrowed = true;
    const bookBorrowInfo = {
      id: book.id,
      title: book.title,
      author: book.author,
      dateBorrowed: moment().format('MMM DD, YYYY')
    }
    state.borrowedBooks.push(bookBorrowInfo)
  },
  returnBook(state, payload) {
    const book = state.books.find(book => {
      return book.id == payload.bookId
    })
    book.isBorrowed = false
    const bookIdx = _.findIndex(state.borrowedBooks, { id: payload.bookId })
    state.borrowedBooks.splice(bookIdx, 1)
  }
}
