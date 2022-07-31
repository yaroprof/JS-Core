// class- створення шаблону
class Book{
  // constructor- створ. екземпляру
  constructor(title, author, year){
    this.title = title
    this.author = author
    this.year = year
  }
  // метод не належить class, але успадковується всіма його екземплярами
  getSummary(){
    console.log(`This book ${this.title} wrote ${this.author} in ${this.year} `);
  }
}
const ourBook = new Book('Sea Wolf', 'D.london', 1915)
console.log(ourBook.getSummary());