function findNextSquare(sq) {
    let number = Math.sqrt(sq);

    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }

    return -1;
}
console.log(findNextSquare(9));
console.log(findNextSquare(289));
console.log(findNextSquare(3000));