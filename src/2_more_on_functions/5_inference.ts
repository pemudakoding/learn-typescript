function map<Input, Output>(arr: Input[], callback: (arg: Input) => Output): Output[]
{
  return arr.map(callback);
}

const parsed = map(['1', '2', '3'], (number) => parseInt(number));

console.log(parsed)