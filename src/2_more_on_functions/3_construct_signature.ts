type newConstructor = {
  new (format: string): Date
}

function createDate(object: newConstructor) {
  return new object('YYMD');
}