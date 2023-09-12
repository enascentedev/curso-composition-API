<template>
	<div class="books-read">
		<label for="progress">Seu progresso</label><br />
		<progress :value="booksRead" :max="totalBooks"></progress>
		<p>{{ booksReadMessage }}</p>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useBooksStore } from "../store/booksStore";

const booksStore = useBooksStore();

const booksRead = computed(() => {
	return booksStore.books.filter((book) => book.isRead).length;
});

const totalBooks = computed(() => booksStore.books.length);

const booksReadMessage = computed(() => {
	return booksRead.value >= totalBooks.value
		? "Parabéns, você leu todos os livros!"
		: `${booksRead.value} de ${totalBooks.value} livros lidos`;
});
</script>
