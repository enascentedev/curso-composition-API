<script setup>
import { ref } from "vue";
import AddBook from "./components/AddBook.vue";
import Books from "./components/Books.vue";
import BookProgress from "./components/BookProgress.vue";
import { useBooksStore } from "./store/booksStore";

const booksStore = useBooksStore();
const showAddBook = ref(false);

function addBook(newBook) {
	booksStore.addBook(newBook);
}

function toggleIsRead(id) {
	booksStore.toggleIsRead(id);
}
</script>

<template>
	<div v-if="!showAddBook" class="container">
		<h1>📖 Meus Livros</h1>
		<div class="header-btns">
			<button class="btn" @click="showAddBook = true">Adicionar Livro +</button>
		</div>

		<div class="books-container">
			<Books @toggleIsRead="toggleIsRead" :books="booksStore.books" />
			<BookProgress :books="booksStore.books" />
		</div>
	</div>
	<div v-else class="container">
		<AddBook @addBook="addBook" @closeAddBook="showAddBook = false" />
	</div>
</template>
