// hogyan epulnek fel egy tomb 
/*var szam = 1; // ez csak pelda nem hasznalt inkabb az also ketto
const szam2 = 2;
let szam3 = 3;
let valosszam = 3.14;
let szoveg = "hello"
let booleanvaltozo = false; 

console.log(szoveg);

console.log(szam2);

console.log(szam3);

let szoveg2 = "micsinalsz"

const tomb1 = [1, 2, 3, 4, 5, 6];
const kevertomb = [1, 2, 3.14, "hello", "mitcsinalsz"];


console.log(tomb1);
console.log(kevertomb);


console.log(kevertomb); */

//eddig ertem 1


/* const tomb1 = ["szia", "hello", "en is te is", "micsi"]
console.log(tomb1);

let tomb2 = [1, 2, 3, 4, 5, 6, 7]

//hozzaadas a tomb vegehez

tomb1.push(6);
tomb2.push(6);
console.log(tomb1);
console.log(tomb2);

//torles a tomb vegerol 
tomb1.pop();
tomb2.pop();
console.log(tomb1, tomb2);

tomb1.pop();
tomb2.pop();
console.log(tomb1, tomb2)

//hozzaadas a tomb elejehez 
tomb2.unshift(0);
tomb1.unshift("bonjure");
console.log(tomb1, tomb2)

//torles a tomb elejerol 

tomb1.shift()
tomb2.shift()
console.log(tomb1, tomb2)

//hozzaadas a tomb kozepehez

tomb1.splice(2,0,"helloka");
console.log(tomb1);
tomb2.splice(4,0,4.5);
console.log(tomb2); */

//eddig ertem 2

//Kiratasa a tomb elemeinek 

// - console.log(tomb1);
// - console.log(tomb1[2]); - egy bizonyos elem kiirasa 

/*let tomb1 = [1, 2, 3, 4, 5];

for (let i = 1; i < tomb1.length; i++) {
    console.log(tomb1[i]);
}

// console.log(tomb1[5]); */

// orai munkak meg

function maxElemKeresese(Akos) {
    let max = 0;

    for (let i = 0; i < Akos.lenght; i++)  {
        if(max < Akos[i]) {
            max = Akos[i];
        }
    }

    console.log("Legnagyobb elem az Akos halmazban", max);
}
const Akos1 = ["szia", "hello", "micsinalsz"]        
maxElemKeresese(Akos1);



