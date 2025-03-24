// class Sorter {

import { CharactersCollection } from "./CharactersCollection";
import { NewSorter } from "./NewSorter";
import { NumbersCollection } from "./NumbersCollection";

//   // option1: not good approach as we have to define different way of implementation by argument type
//   constructor(public collection: number[] | string) {}

//   sort(): void {
//     // const length = this.collection.length; same as the one below
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {

//         // type guards
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         if (typeof this.collection === 'string') {}
//         // ...
//       }
//     }
//   }
// }

// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const newSorter = new NewSorter(numbersCollection);
newSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('amazing');
const newSorter2 = new NewSorter(charactersCollection);
newSorter2.sort();
console.log(charactersCollection.data);