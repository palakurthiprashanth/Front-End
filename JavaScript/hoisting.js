var temp= 'hi';
function display(){
    console.log(temp);
    var temp = 'bye';
};
display(); // undefined because of hoisting

Because of hoisting

text = "123"
console.log(text)
var text; 

and 
var text
text = "123"
console.log(text); 

Both  are same and doesnt throw error.
