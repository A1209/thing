var mgr;
function setup() {
    createCanvas(windowWidth,windowHeight)
    mgr = new SceneManager()

    mgr.addScene(Scene1)
    mgr.addScene(Scene2)
    mgr.showNextScene()
}



function draw() {
  mgr.draw()
}

function.keyPressed(){
  if(key === '1'){
    mgr.showScene(Scene1)
  }
  else if(key === '2')
    mgr.showScene(Scene2)
  }


// SCENES CREATED BELOW

function Scene1(){
  this.setup = function(){
    console.log("scene 1 loaded!")

  }
  this.draw = function(){
    circle(200,200,50)
  }
}
function Scene2(){
  this.setup = function(){
    console.log("scene 1 loaded!")

  }
  this.draw = function(){
    rectangle(300,300,100,100)
  }
}
