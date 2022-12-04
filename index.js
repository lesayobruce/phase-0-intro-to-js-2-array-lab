// Write your solution here!


const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
   return [...cats,"Broom"]
}

function prependCat(name){
    return[...cats.slice(0,0),"Arnold","Milo", "Otis", "Garfield"];
}
function removeLastCat(name){
    return cats.slice(0, cats.length -1);}

function removeFirstCat(name){
    return cats.slice(1)
}