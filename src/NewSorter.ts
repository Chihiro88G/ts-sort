interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// option 2
// export class NewSorter {
//   constructor(public collection: Sortable) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//           if (this.collection.compare(j, j + 1)) {
//             this.collection.swap(j, j + 1);
//           }
//       }
//     }
//   }
// }

// option 3
export abstract class NewSorter {
  // promises to be implemented in the child classes with abstract keyword below
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);
          }
      }
    }
  }
}