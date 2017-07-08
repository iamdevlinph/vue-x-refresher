<template>
  <div id="books">
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content white-text">
            <span class="card-title black-text">{{ isBorrowed ? 'Borrowed' : 'Available' }} Books</span>
            <table class="highlight">
              <tbody v-if="books.length > 0">
                <tr v-for="book in books">
                  <td class="black-text">{{ book.id }} {{ book.title }}</td>
                  <td class="black-text">{{ book.author }}</td>
                  <td class="black-text" v-if="isBorrowed">{{ book.dateBorrowed }}</td>
                  <td>
                    <a class="waves-effect waves-light btn btn-small"
                      v-if="isBorrowed"
                      @click="returnBook(book)">return</a>
                    <a class="waves-effect waves-light btn btn-small"
                      v-else
                      @click="borrowBook(book)">borrow</a>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td class="black-text"
                    colspan="4">No data to show</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status'],
  computed: {
    books() {
      return (this.isBorrowed) ? this.$store.getters.borrowedBooks : this.$store.getters.availableBooks
    },
    isBorrowed() {
      return this.status === 'borrowed';
    }
  },
  methods: {
    borrowBook(book) {
      this.$store.commit('borrowBook', book.id)
    },
    returnBook(book) {
      this.$store.commit({
        type: 'returnBook',
        bookId: book.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#books {
  .btn-small {
    height: 24px;
    line-height: 24px;
    padding: 0 0.5rem;
  }
}
</style>
