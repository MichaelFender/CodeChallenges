// Write your solution below:
console.log('hello world');

function makeUnique(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log(makeUnique('baraban'));
  console.log(makeUnique('helloworld'));
  console.log(makeUnique('iwanttoclimbamountain'));
