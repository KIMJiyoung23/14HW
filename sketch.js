let button;
let h1;
let count=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200)

  button = createButton("누르시오");
  button.mouseClicked(moveButton);
  button.size(100, 50);
  button.position(10, 10);
  button.style("font-family", "neodgm_pro");
  button.style("font-size", "18px");

  h1 = createElement('h1','잘해봐')
} 

function draw() { 
  background(200);
  h1.position(mouseX,mouseY)
}

function moveButton() {
  button.position(random(width), random(height));
 
}

function mousePressed(){
      count++;
    h1.html(count + '번 클릭했어요' + '다시 시도해보세요');
    if (count > 5) {
        h1.html('실패했습니다');
        count = 0;
}
}