function cryptoRandom(min, max) {
    const float = window.crypto.getRandomValues(new Uint32Array(1))[0];
    const int = float / 2 ** 32;

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(int * (max - min) + min)
}

export default function ArrayOfCryptoRandom(arraySize, min, max) {
    const response = [];
    while (response.length < arraySize) {

        const newObject = {x: response.length, y: cryptoRandom(min, max)}
        response.push(newObject)
    }
    console.log(response)
    return response;
}