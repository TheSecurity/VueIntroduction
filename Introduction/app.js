const app = Vue.createApp({
    // data function
    data() {
        // need to create an object
        return {
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
            ],
            showBooks: true,
            x: 0,
            y: 0,
            url: 'https://www.google.com'
        }
    },
    methods: {
        // function shorthand
    //    changeTitle(title) {
    //         // není možné referencovat title, pouze pomocí jeho názvu. Musíme ho referencovat přes konkrétní komponentu (this)
    //         this.title = title;
    //    } 
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e.type);
            if(data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        itemClicked(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app')