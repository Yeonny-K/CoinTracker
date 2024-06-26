const BASE_URL = `https://api.coinpaprika.com/v1`;
const NICO_URL = `https://ohlcv-api.nomadcoders.workers.dev/?coinId=`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

/* export async function fetchCoinTickers(coinId: string) {
  const info = await fetch(`${NICO_URL}${coinId}`).then((response) =>
    response.json()
  );
  return info[0];
} */

 export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
} 

export function fetchCoinHistory(coinId: string) {
  return fetch(`${NICO_URL}${coinId}`).then((response) =>
  response.json()
  );
}