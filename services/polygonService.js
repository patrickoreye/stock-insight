import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

function getTickers(){
    rest.stocks.snapshotAllTickers()
    .then((data) => {
        console.log(data)
        return data
    })
    .catch(e => {
        console.error("An Error happened", e)
    });
}

module.exports = {
    getTickers: getTickers
};