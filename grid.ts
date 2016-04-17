class Grid {
    static origin = {x: 0, y: 0};
    calculateFromOrigin(point: {x: number; y: number;}) {
    var xDist = (point.x - Grid.origin.x);
    var yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
}

var grid1 = new Grid(1.0);  // 1x scale
var grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateFromOrigin({x: 10, y: 10}));