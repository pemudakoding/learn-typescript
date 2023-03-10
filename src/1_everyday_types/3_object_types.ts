function printCoord(position: { x: number, y: number,}): void
{
  console.log("The coordinate's x value is " + position.x);
  console.log("The coordinate's y value is " + position.y);
}

printCoord({ x: 3, y: 7 });

// Optional properties
function printCoordSecond(position: {x: number, y?: number,}): void
{
  console.log("The coordinate's x value is " + position.x);

  if(position.y) {
    console.log("The coordinate's y value is " + position.y);
  }
}

printCoordSecond({ x: 4, y: 9 });
printCoordSecond({ x: 27});