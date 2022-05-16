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

console.log(Cube.cubes);
console.log(cube.name);

let cubesData = Cube.getAll();

Cube.add(cube1);

cubesData = Cube.getAll();

console.log(cubesData);
