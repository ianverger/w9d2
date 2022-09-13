class View {
  constructor(game, el) {
    this.game = game
    this.el = el
  }

  setupBoard() {
    let ul = document.createElement('ul')
    // let cell = document.createTextNode('_')
    // let listItem=li.appendChild(cell)
    // let text = document.createTextNode('box')
    // let li = document.createElement('li')
    for (let i = 0; i < 9; i++) {
      // let text = document.createTextNode("_")
      let li = document.createElement('li')
      // li.append(text)
      ul.append(li)
      // ul.append(li)
      // ul.append(listItem)
    }
    this.el.append(ul)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

// View.prototype.setupBoard = function() {
//   let ul = document.createElement('ul')
//   let li = document.createElement('li')
// }

module.exports = View;
