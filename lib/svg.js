class SVG {
    constructor(){
        this.text = "" // able to choose text and text color in text tag
        this.shape = "" //choose shape tag which manages its color through Shape class
    }
    setShape(chosenShape){
        this.shape = chosenShape.render() // returns shape tag of chosenShape from shape class render() methods and sets as value of this.shape
    }
    chooseText(chosenText, chosenColor){
        this.text=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${chosenColor}">${chosenText}</text>`
    }
    build(){ // constructs final svg tag with chosen shape and text tags inside
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape} ${this.text}</svg>`
    }
}
module.exports = {SVG}

