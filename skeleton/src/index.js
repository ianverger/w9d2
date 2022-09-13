const View = require('./ttt-view.js')
const Game = require('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
    const ele = document.querySelector('.ttt')
    const game = new Game()
    const view = new View(game, ele)
    
    view.setupBoard();


});
