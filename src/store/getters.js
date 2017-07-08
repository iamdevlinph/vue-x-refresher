export default {
  availableBooks(state) {
    return state.books.filter(book => {
      return !book.isBorrowed
    })
  },
  borrowedBooks(state) {
    return state.borrowedBooks
  }
}
