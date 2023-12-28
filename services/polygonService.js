import { restClient } from '@polygon.io/client-js';
const rest = restClient("PSmchHlorSsseDV5nQtJldI8YvfcCVps");


export function getTickers(){
    rest.stocks.snapshotAllTickers()
    .then((data) => {
        console.log(data)
        return data
    })
    .catch(e => {
        console.error("An Error happened", e)
    });
}

export function getTickersInfo(tickerName){
    rest.stocks.snapshotTicker(tickerName)
    .then((data)=>{
        console.log(data)
        return data
    })
    .catch(e=>{
        console.log("this is an error ")
    })
    

}

export function getLastTrade(tickerName){
    rest.stocks.lastTrade(tickerName).then((data) => {
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}


