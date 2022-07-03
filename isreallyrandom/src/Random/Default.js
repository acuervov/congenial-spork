function DefaultRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export default function ArrayOfDefaultRandom(arraySize, min,max){
    const response = [];
    while(response.length < arraySize){
        const newObject = {x:response.length, y: DefaultRandom(min, max)}
        response.push(newObject)
    }
    console.log(response)
    return response; 
}