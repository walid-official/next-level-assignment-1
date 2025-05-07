// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
//    const book =  items.filter(book => {
//         if(book.rating >= 4){
//             return book
//         }
//     })
//     return book;
// }
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
   const item =  items.filter(item => item.rating >= 4)
    return item;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

 console.log(filterByRating(books)); 