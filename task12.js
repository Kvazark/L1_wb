var Book = {
    name: "Martin Eden",
    author: "Jack London",
    yearOfPublication: 1908+' г.',

};


Book.getName = function (){
    return Book.name;
}
Book.getAuthor = function (){
    return Book.author;
}
Book.getYearOfPublication = function (){
    return Book.yearOfPublication;
}
Book.updateName = function (variable){
    Book.name = variable;
}
Book.updateAuthor = function (variable){
    Book.author = variable;
}
Book.updateYearOfPublication = function (variable){
    Book.yearOfPublication = variable +' г.';
}
console.log(Book.getName());
console.log(Book.getAuthor());
console.log(Book.getYearOfPublication());
Book.updateName("The Godfather");
Book.updateAuthor('Mario Puzo');
Book.updateYearOfPublication(1969);
console.log(Book.getName());
console.log(Book.getAuthor());
console.log(Book.getYearOfPublication());