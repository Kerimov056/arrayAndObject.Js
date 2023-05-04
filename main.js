//                  Task 1

// 1) Write a JavaScript program to sort the items of an array.
// Sample array : let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

let sort = numbers.slice().sort((a, b) => {
    return a - b
})
console.log("Task 1");

console.log("sort Arr :" + sort);

//burda orjinal arrayin usdunde sort olunmus oldu yeni yeni bir array yaratmir 
//eger console.log(numbers); --> yazsaq orjinalin deyismediyini goreceyik.
console.log("numbers Arr :" + numbers);
//eger orjinal arrayin deyismesini isdemirikse numbers.slice().sort() .... 
//devamin yazsaq orjinal array deyismis olmayacaq yeni bir array yarancaq .

//-----------------------------------------------------------------------------------------------


//                    Task 2

// 2) Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// Sample input : console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Sample output : [1, 2, 3, 10, 100]

let complexArr = [[1, 2, 3], [100, 2, 1, 10]];

let simpleArr = complexArr.flatMap((s, i) => {
    return s
})
console.log("------------------------------------------------")
console.log("Task 2");

console.log("simpleArr :" + simpleArr);

// s >> burda bir array'e yigib qaytarmasini edir.
//  i >> is erray'in nece dereceli oldugunu gosterir yeni ic-ice array'. Meselen burda i = 2;

//flatMap  yeni bi array donderir yeni orjinalini deyismir 
//eger console.log(complexArr); --> yazsaq orjinalin deyismediyini goreceyik.
console.log("complexArr :" + complexArr);

//flatMap eslinde 2 methodun birlesmesi deye bielrik float() ve map()
//flat() arrayin icindeki array'leri arrayden cixararaq bir arraya duzur

//------------------------------------------------------------------------------------------------


//                   Task 3

// 3) Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '', 47]
// Expected output : [15, -22, 47]

let sampleArr = [NaN, 0, 15, false, -22, '', 47];

sampleArr.splice(0, 2);    //output >> [15, false, -22, '', 47]
sampleArr.splice(1, 1);   //output >> [15, -22,'',47]
sampleArr.splice(2, 1);  //output >> [15, -22, 47]

console.log("------------------------------------------------")
console.log("Task 3");

console.log("sampleArr :" + sampleArr);

//burda splice() methodu arrayin orjinalini deyisir yeni array yaratmir orjinal arrayin usdunde isini gorur.
//slice() methodu ise eslinde oda oxsardi kesir yalniz o orjinal arraye toxunmur yeni array yaradir .

//Bele bir functionda yaza bilerik buda cavab olaraq  >> [15, -22, 47]
let newArr = sampleArr.filter(function (numbers) {
    if (numbers != 0) {
        return typeof numbers === 'number' && !isNaN(numbers);
    }
});

console.log("newArr :" + newArr);

//----------------------------------------------------------------------------------------------------------------------


//                Task 4

// 4) Write a JavaScript function to sort the following array of objects by title value.
// Sample object :let library = [
//  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
//  ];


let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];


function rowArr(library) {

    library.sort(function (a, b) {
        let titleA = a.title;
        let titleB = b.title;
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });
    return library;
}
//burda title goroe sort olundu arrayi acanda title gore deyisir
console.log("------------------------------------------------")
console.log("Task 4 ");

console.log(rowArr(library));

//---------------------------------------------------------------------------------------------------


// 5) Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

//  :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false


let arr = [2, 4, 8, 16, 32, 64];

let say = 0;
function factorChain(array) {
    
    for (let i = 1; i <= array.length; i++) {
        if(array[array.length-i] % 2 == 0){
            let deyisen = array[array.length-i];
            for (let index = deyisen; deyisen % 2 == 0; deyisen/=2) {
                
            }
            
            if(deyisen==1){
                say++;
                if(say == array.length){
                    console.log("true")
                    return
                }
            }
            else{
                console.log("false")
                return
            }
        }
        else{
            console.log("false")
            return
        }
    }

}
console.log("------------------------------------------------")
console.log("Task 4 ");

    factorChain(arr)

    // demeli bu function nece isleyir evvelce arrayde olan her value'nu 2'ye bolunmesinde qaliq qalmirsa
    // if'a daxil. Yox eger qaliq qalirsa false olaraq dovur dayanir.
    // if'e daxil olduqdan sonra bir let deyisen yaradiram ve if'e daxil olan adedi deyisenen menimsedirem.
    // sonra deyiseni for dovurune salib ededi 2ye bole bole gedilir ve sonda alinan eded eger 1 beraber
    // olarsa if edaxil olur beraber olmursa return olaraq dovur bitir.if'e daxil olduqda say deyiseni declare
    // etmisem ve o 1 vahid olaraq artir.

    //  ve eger sertler dogrudursa dovur devam edir fe sonda array.length == say'a  beraberdise 
    // Answer:  console.log("true")