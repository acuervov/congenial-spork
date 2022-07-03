import MersenneTwister from 'mersenne-twister'


function mersenneTwisterRandom(max, min) {
    var generator = new MersenneTwister();

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(generator.random_incl() * (max - min) + min)
}

export default function ArrayOfmersenneTwisteRandom(arraySize, min, max) {
    const response = [];
    while (response.length < arraySize) {
        const newObject = { x: response.length, y: mersenneTwisterRandom(min, max)}
        response.push(newObject)
    }
    console.log(response)
    return response;
}