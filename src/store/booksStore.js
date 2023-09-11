import { defineStore } from "pinia";

export const BooksStore = defineStore({
	id: "books",
	state: () => ({
		books: [
			{
				id: 1,
				title: "History of Europe",
				cover:
					"https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-6-540x861.jpg",
				isRead: true,
				isbn: "0-395-07157-8",
				author: "Daniel Trejo",
			},
			{
				id: 2,
				title: "Penguin Classics",
				cover:
					"https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-2-540x861.jpg",
				isRead: false,
				isbn: "0-395-07157-8",
				author: "Daniel Trejo, Jon Snow",
			},
			{
				id: 3,
				title: "Becoming",
				cover:
					"https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-7-540x861.jpg",
				isRead: false,
				isbn: "0-395-07157-8",
				author: "Daniel Trejo",
			},
			{
				id: 4,
				title: "Sonnets",
				cover:
					"https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
				isRead: false,
				isbn: "0-395-07157-8",
				author: "Daniel Trejo",
			},
		],
		showAddBook: false,
	}),

	actions: {
		addBook(newBook) {
			newBook.id = Math.max(...this.books.map((el) => el.id)) + 1;
			this.books.push(newBook);
			this.showAddBook = false;
		},

		toggleIsRead(id) {
			const book = this.books.find((book) => book.id === id);
			if (book) {
				book.isRead = !book.isRead;
			}
		},
	},
});
