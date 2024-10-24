
// peuvent changer de valeur avec = //
// var name1 ='john'
// let name2 ='admin'
// const name3 ='top'
// const age = 25
// const boolean = true
// const nullValue = null
// const undefinedValue = undefined

//en js//
// && = ET
// || = OU
// ${string} = rappeler les variables 


// cost age = 15

// if (age <=18) {
//     console.log('mineur')

//     else (majeur) {
//         console.log('majeur')
//     }
// }

// const string2 ='john'

// let age = 1

// for (let i = 0;i <= 3; i++) {
//     console.log(string2)
    
// }
// do {
//     console.log(age)
// }

// while(age < 10) {
//     console.log(age)
//     age++
// } 




// exo 1 //

// for (n = 1; n <=10 ;n++)
// console.log(n)

// //exo 2 // 

// let somme = 0

// for (let i = 1; i <= 10; i++) {
//     somme += i;
//   }
// console.log("La somme est : "+ somme)


// // exo 3 //

// let length = 10;
// let  width= 5;

// let perimetre = 2* (length + width)
// console.log('le perimetre du rectangle est de :' + perimetre)

// // exo 4 // 






// // exo 5 //

// let equipe1 = 56
// let equipe2 = 78
// let equipe3 = 45

// console.log('La meilleur équipe a: '+ Math.max(equipe1,equipe2,equipe3) + " " + 'kebabs');




// // exo 6 //

// function estPremier(nombre) {
//     if (nombre <= 1) {
//         return false; 
//     }

    
//     for (let i = 2; i <= Math.sqrt(nombre); i++) {
//         if (nombre % i === 0) {
//             return false; 
//         }
//     }

//     return true; 
// }

// let nombre = 102;
// if (estPremier(nombre)) {
//     console.log(nombre + " est un nombre premier.");
// } else {
//     console.log(nombre + " n'est pas un nombre premier.");
// }

// // exo 7 //

// let x= 0;

// while (x <= 30) {
//   console.log(x);
//    x += 3;
// }

// exo 8 //

// let nombre = 98765;
// let nombreDeChiffres = nombre.toString().length;
// console.log("Le nombre de chiffre de " + nombre + " est : " + nombreDeChiffres);

// exo 9 //

// function sommeDesChiffres(nombre) {
    
//     const chiffres = nombre.toString().split('');
    
   
//     const somme = chiffres.reduce((accumulateur, chiffre) => accumulateur + parseInt(chiffre), 0); =>
    
//     return somme;
// }

// const nombre =1562498654569; 
// console.log(`La somme des chiffres de ${nombre} est : ${sommeDesChiffres(nombre)}`);

// exo 10 //


















