// Immddiately invoked Function Expressions

(function chai(){
    // named IIFE
    console.log("DB VONNECTED");
})();

((name) => {
console.log(`DB CONNECTED TWO ${name}`);
})("Shehzad");