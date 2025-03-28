"use strict";
// class Sorter {
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
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
// option 2: defined interface for Sorter and utilize it for different collections
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const newSorter = new NewSorter(numbersCollection);
// newSorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('amazing');
// const newSorter2 = new NewSorter(charactersCollection);
// newSorter2.sort();
// console.log(charactersCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-15);
// linkedList.add(-9);
// linkedList.add(7);
// const sorter = new NewSorter(linkedList);
// sorter.sort();
// linkedList.print();
// option 3: using inheritance and abstract class
const absSorter = new NumbersCollection_1.NumbersCollection([10, 3, -9, 0]);
absSorter.sort();
console.log(absSorter.data);
const absSorter2 = new CharactersCollection_1.CharactersCollection('amazing');
absSorter2.sort();
console.log(absSorter2.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(501);
linkedList.add(-15);
linkedList.add(-9);
linkedList.add(7);
linkedList.sort();
linkedList.print();
