class Cube {
    static cubes = [];

    constructor(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }

    static getAll = () => Cube.cubes.slice()

    static add = (cube) => Cube.cubes.push(cube)
}

let cube = new Cube('rubcho', 4);
let cube1 = new Cube('muss', 14);

Cube.add(cube);

let cubes = Cube.getAll();

console.log(cube.name);
console.log(cubes);

Cube.add(cube1);

console.log(cube1.name);
console.log(Cube.cubes);

cubes = Cube.getAll();
console.log(cubes);