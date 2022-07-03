import axios from 'axios';
const apiKey = "546a3abf-74ee-47a9-8f84-db0f9efb1138";
const apiUrl = "https://api.random.org/json-rpc/4/invoke";

export default async function arrayOftrueRandom(arraySize, min, max) {
    const options = {
        "mode": 'no-cors',
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": apiKey,
            "n": 10000,
            "min": min,
            "max": max,
            "replacement": true
        },
        "id": 42
    }

    var responseArray = [];

    // while (responseArray.length < arraySize) {
        console.log("entro", responseArray);
        const apiResponse = await axios.post(apiUrl, options);
        const actualData = apiResponse;
        console.log("actual data", actualData)
        // responseArray = responseArray.concat(apiResponse.data.result.random.data);

    // }

    console.log(responseArray)

    return responseArray;
}