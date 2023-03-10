type Point = {
  x: number,
  y: number
};

function printCoord(position: Point): void
{
  console.log("The coordinate's x value is " + position.x);
  console.log("The coordinate's y value is " + position.y);
}

printCoord({ x: 3, y: 7 });