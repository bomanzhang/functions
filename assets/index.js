
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
  constructor(x, y, fontSize, canvasHeight){
    this.characters = '01';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = '';
    this.canvasHeight = canvasHeight; 
  }

  draw(context){
    this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight){
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 10;
    this.columns = this.canvasWidth/this.fontSize;
    this.symbols = [];
    this.#initialize();
    console.log(this.symbols);
  }

  //Private method to hide unnecessary details from user
  #initialize(){
    for(let i = 0; i < this.columns; i++){
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }

  }
  resize(width, height){
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth/this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);

let lastTime = 0;
const fps = 40;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp){
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame){
  ctx.fillStyle = 'rgba(0,0,0,0.02)';
  ctx.textAlign = 'center';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'greenyellow';
  ctx.font = effect.fontSize + 'Silkscreen';
  effect.symbols.forEach(symbol => symbol.draw(ctx));
  timer = 0;
  } else {
    timer += deltaTime;
  }

  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  effect.resize(canvas.width, canvas,height);
});

// I followed this youtube tutorial for this effect: https://www.youtube.com/watch?v=f5ZswIE_SgY&ab_channel=Frankslaboratory
// I didn't change too much in terms of functionality but the tutorial doesn't have any code to copy/paste and was long and incredibly comprehensive with Procedural vs Object Programming and the various class constructors so hopefully that's okay!

//Event Listener for my fake browser tabs 
const galleryTitle = document.querySelector('.gallery-title');
const allInfo = document.querySelectorAll('.allInfo');

galleryTitle.addEventListener('click', () => {
  allInfo.forEach(info => {
    info.classList.toggle('show');
  });
});