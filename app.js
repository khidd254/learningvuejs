
const app = Vue.createApp({
   data() {
    return{
      url:'www.khidd.intagram.com',
        showBooks: true,
       books: [
        {title:'Life of Michelle Obama', author: 'nyambura', yearofpublishing:'2010', img: 'assets/1.jpg', isFav: true},
        {title:'Growth of Kenya', author:'Kennedy T Thuo', yearofpublishing:'2001', img: 'assets/2.jpg', isFav: false},
        {title:'Rise of Maumau', author:'Vielina M Mbote', yearofpublishing:'2004',  img: 'assets/3.jpg', isFav: true},
       ],
         x: 0,
        y: 0
    }
   },
   methods: {
    changeTitle(title) {
      // this.title= 'words of wisdom'
      this.title= title
    },
    toggleshowbooks(){
        this.showBooks= !this.showBooks
     },
     toggleFav(book) {
      book.isFav = !book.isFav
    },
     handleEvent(e, data){
      console.log(e, e.type)
      if(data){
        console.log(data)
      }
     },
     handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
     }
    
   },
   computed: {
     filteredbooks(){
       return this.books.filter((book)=> book.isFav)
     }
   }
  
})
app.mount('#app')