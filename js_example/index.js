function Accumulator(value = 0) {
  this.value = value;

  this.read = function (num = 0) {
    this.value += num;
  };
}

let accumulator = new Accumulator(1);

accumulator.read(2);
accumulator.read(5);

console.log(accumulator.value);
