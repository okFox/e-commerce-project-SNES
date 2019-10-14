import gameList from '../data/games.js';
import renderGames from './render-games.js';

const list = document.getElementById('games');

for (let i = 0; i < gameList.length; i++) {
    const games = gameList[i];
    const dom = renderGames(games);
    list.appendChild(dom);
}