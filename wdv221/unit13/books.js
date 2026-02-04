let bookTitles = ["Beginning Javascript", "Logic with ES6", "Javascript Objects Made Easy"];

let bookPrices = [19.99, 29.49, 999.99];

let bookAuthor = ["Smith", "Johson-Parker", "Westin" ];

let bookA = {
    book_title: bookTitles[0],
    book_author: bookAuthor[0],
    book_price: bookPrices[0],
    studentDiscountPrice: function() {
        let discount = this.book_price * 0.2;
        let price = this.book_price - discount;
        return "$" + price.toFixed(2);
    }
};

let bookB = {
    book_title: bookTitles[1],
    book_author: bookAuthor[1],
    book_price: bookPrices[1],
    studentDiscountPrice: function() {
        let discount = this.book_price * 0.2;
        let price = this.book_price - discount;
        return "$" + price.toFixed(2);
    }
};

let bookC = {
    book_title: bookTitles[2],
    book_author: bookAuthor[2],
    book_price: bookPrices[2],
    studentDiscountPrice: function() {
        let discount = this.book_price * 0.2;
        let price = this.book_price - discount;
        return "$" + price.toFixed(2);
    }
};

console.log("BookA:", bookA);
console.log("BookB:", bookB);
console.log("BookC:", bookC);

let booksArrayObject = {
    books: [
        { name: "BookA", obj: bookA },
        { name: "BookB", obj: bookB },
        { name: "BookC", obj: bookC }
    ]
};

let printBook = document.getElementById("displayBooks");
let html = "";

for (let i = 0; i < booksArrayObject.books.length; i++) {

    let bookName = booksArrayObject.books[i].name;
    let bookData = booksArrayObject.books[i].obj;

    html += "<p>";
    html += bookName + "<br>";
    html += "Title: " + bookData.book_title + "<br>";
    html += "Author: " + bookData.book_author + "<br>";
    html += "Price: $" + bookData.book_price.toFixed(2) + "<br>";
    html += "Student Discount Price: " + bookData.studentDiscountPrice() + "<br>";
    html += "</p>";
}

printBook.innerHTML = html;

let bookAJSON = JSON.stringify(bookA);
console.log("bookA - JavaScript object:", bookA);
console.log("bookAJSON - JSON object:", bookAJSON);

let booksArrayJSON = JSON.stringify(booksArrayObject);
console.log("booksArrayObject - JavaScript object:", booksArrayObject);
console.log("booksArrayJSON - JSON object:", booksArrayJSON);