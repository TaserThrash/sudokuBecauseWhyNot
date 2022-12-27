
let iGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let grid = [];

function setup(){
  createCanvas(9 * 20, 9 * 20);

  for(let i = 1; i < 10; i++){
    iGrid[int(random(0, 9))][int(random(0, 9))] = i;
  }

  for(let y = 0; y < 9; y++){
    grid.push([]);
    for(let x = 0; x < 9; x++){
      grid[y][x] = iGrid[y][x];
    }
  }
}

function draw(){
  background("#ffffff");
  stroke(0);
  textSize(20);
  for(let x = 0; x < 9; x++){
    for(let y = 0; y < 9; y++){
      if(grid[y][x] == 0){
        fill("red");
      }
      rect(x * 20, y * 20, 20, 20);
      fill("white");
      grid[y][x] %= 10;
      if(iGrid[y][x] != 0)
        fill("#0000ff");
      text(grid[y][x], x * 20 + 4, y * 20 + 18);
      fill("#ffffff");
    }
  }

  checkVerAHer();
  checkBlock();
}

function checkBlock(){
  for(let x = 0; x < 9; x += 3){
    for(let y = 0; y < 9; y += 3){
      for(let i = 0; i < 9; i++){
        let a = grid[y + int(i / 3)][x + (i % 3)];
        for(let j = 0; j < 9; j++){
          if(i != j && a === grid[y + int(j / 3)][x + (j % 3)]){
            fill("red");
            rect((x + (i % 3)) * 20, (y + int(i / 3)) * 20, 20, 20);
            rect((x + (j % 3)) * 20, (y + int(j / 3)) * 20, 20, 20);
            fill("white");
            if(iGrid[y + int(i / 3)][x + (i % 3)] != 0)
              fill("#0000ff")
            text(grid[y + int(i / 3)][x + (i % 3)], (x + (i % 3)) * 20 + 4, (y + int(i / 3)) * 20 + 18);
            fill("#ffffff");
            if(iGrid[y + int(j / 3)][x + (j % 3)] != 0)
              fill("#0000ff")
            text(grid[y + int(j / 3)][x + (j % 3)], (x + (j % 3)) * 20 + 4, (y + int(j / 3)) * 20 + 18);
            fill("#ffffff");
          }
        }
      }
    }
  }
}

function checkVerAHer(){
  for(let x = 0; x < 9; x++){
    for(let y = 0; y < 9; y++){
      let a = grid[y][x];
      for(let i = 0; i < 9; i++){
        if(i != x && a == grid[y][i]){
          fill("red");
          rect(x * 20, y * 20, 20, 20);
          fill("white");
          if(iGrid[y][x] != 0)
            fill("blue");
          text(grid[y][x], x * 20 + 4, y * 20 + 18);
        }
        if(i != y && a == grid[i][x]){
          fill("red");
          rect(x * 20, y * 20, 20, 20);
          fill("white");
          if(iGrid[y][x] != 0)
            fill("blue");
          text(grid[y][x], x * 20 + 4, y * 20 + 18);
        }
      }
    }
  }
}

function mousePressed(){
  if(iGrid[int(mouseY / 20)][int(mouseX / 20)] != 0){
    return;
  }
  grid[int(mouseY / 20)][int(mouseX / 20)] += 1;
}
