import { NewSorter } from "./NewSorter";

export class NumbersCollection extends NewSorter {
  constructor(public data: number[]) {
    super();
  }

  // don't need to call this as a function from somewhere else by addin 'get'
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}