class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard();
    this.bindEvents();
  }

  
  setupBoard() {
    let ul = document.createElement('ul')
    const POSITIONS = [
      [0,0], [0,1], [0,2], 
      [1,0], [1,1], [1,2],
      [2,0], [2,1], [2,2]
    ]

    for (let i = 0; i < 9; i++) {
        let li = document.createElement('li')
        li.id = POSITIONS[i]
        
        ul.append(li)
    }

    this.el.append(ul)

  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
      if (e.target.nodeName === "LI") {
        let pos = e.target.id
        // e.target.class = "played"
        this.makeMove(pos)
      }
    }
    
    makeMove(pos) {
      const ele = document.getElementById(pos)
      // ele.setAttribute("class", "played")
      let mark = `${this.game.currentPlayer}`
      const position = [parseInt(pos[0]), parseInt(pos[2])]
      if (ele.className !== 'x' && ele.className !== 'o') {
        ele.setAttribute("class", mark)
        let text = document.createTextNode(mark.toUpperCase())
        ele.append(text)
        this.game.playMove(position)
      } else {
        alert("not a valid move!")
      }
      if (this.game.isOver()) {
        alert(`Congrats! ${mark} has won!!!`)
      }
  }

}



module.exports = View;
