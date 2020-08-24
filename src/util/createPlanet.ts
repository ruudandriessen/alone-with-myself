import { BodyModel } from '../models/BodyModel';
import { createSatelliteOf } from './createSatelliteOf';
import { emptyArray } from './emptyArray';
import { randomInt } from './random';

const planetColors = [ 'blue', 'red', 'brown', 'green' ];
const moonColors = [ 'grey', 'black', 'brown' ];


function randomPlanetColor() {
    return planetColors[randomInt(planetColors.length - 1)];
}
function randomMoonColor() {
    return moonColors[randomInt(moonColors.length - 1)];
}

export function createPlanet(star: BodyModel, numberOfMoons: number): BodyModel[] {
    const planet = createSatelliteOf(star, 20, randomPlanetColor());

    const moons = emptyArray(numberOfMoons).map(() => createSatelliteOf(planet, 4, randomMoonColor()));
    return [ planet, ...moons ];
}
