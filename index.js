const inquirer = require("inquirer");
const {SVG} = require("./lib/svg.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const fs = require("fs");

// cammoand line interface with one method
class CLI {

  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter a 3 character text for the logo.",
          
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter a color for the logo text",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a color for the shape background",
        },
      ])
      .then((response) => {
        let shape;
      if(response.shapeType === "circle"){
        shape = new Circle()
      }
      else if(response.shapeType === "square"){
        shape = new Square()
      }
      else if(response.shapeType === "triangle"){
        shape = new Triangle()
      }
       // wire class methods here together here
        return fs.writeFileSync("newlogo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo!");
      })
  }
}

new CLI().run()