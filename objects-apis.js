/*
* Objects, INterfaces, and APIs
 */

let dog = {
    name: "Steve",
    color: "Brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log("Bark!");
    },
};

/*...*/
/*...*/

function x(y) {
    y = y + 5;
    console.log(y)
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
