// 1
    function divisors(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
        }
   }
    return count;
    }
    console.log(divisors(16)); 




// 2
    let MacbookInfo = "Macbook Pro the best laptop in the world";

    function countspaces (sentence0) {
        return sentence0.split(" ").length - 1;
    }
    console.log(countspaces(MacbookInfo));




// 3
    function prompt ( a , b) {
        return a ** b;
        }
      let a = ("2");
      let b = ("6");
      let result =  a ** b;
        console.log(prompt(a, b));




 // 4
     function convertToUpper(sentence) {
        return sentence.toUpperCase();
     }
     console.log(convertToUpper("Hello Code Academy"));


    

// 5
     function reverseWords(sentence) {
        return sentence.split(" ").reverse().join(" ");
    }
     console.log(reverseWords("JavaScript is fun"));




// 6
    let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    shoppingCart.unshift('Meat');
    shoppingCart.push('Sugar');
    shoppingCart.splice(4, 1);
    shoppingCart.splice(3, 1, 'Green Tea');
    console.log(shoppingCart);



// 7
    const Frontend = [ "HTML", "CSS", "JS", "React", "Redux"];
    const Backend = [ "Node", "Express", "MongoDB"];
    const Fullstack = Frontend.concat(Backend);
    console.log(Fullstack);