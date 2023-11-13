let turn = "x"
let endgame = false

const Changeturn = () => {
  return turn === "x"? "0": "x"
} 
const Checkwin = () => {
  let boxText = document.getElementsByClassName('boxText')
  let wins = [
    [0, 1, 2, 0, 4, 0],
    [3, 4, 5, 1, 11, 0],
    [6, 7, 8, 1, 18, 0],
    [0, 3, 6, -6.5, 11, 90],
    [1, 4, 7, 0.5, 11, 90],
    [2, 5, 8, 7.5, 11, 90],
    [0, 4, 8, 0, 10, 45],
    [2, 4, 6, 0, 11, 135],
  ]
  wins.forEach(e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "" ) ){
      document.querySelector('.info').innerText = boxText[e[0]].innerText + "won";
      endgame = true;
      document.querySelector('.img').getElementsByTagName('img')[0].style.width = "56px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
})
} 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxText = element.querySelector('.boxText');
  element.addEventListener('click', ()=>{
    if(boxText.innerText === ''){
      boxText.innerText = turn;
      turn = Changeturn();
      Checkwin();
      if(!endgame){
        document.getElementsByClassName("info")[0].innerText = "turn for " + turn 
      }
    }
  })
})
reset.addEventListener('click', ()=>{
  let boxText = document.querySelectorAll('.boxText');
  Array.from(boxText).forEach(element =>{
    element.innerText=""
  });
  turn = "x";
  endgame=false;
  document.getElementsByClassName("info")[0].innerText = "turn for " + turn; 
  document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px"
  document.querySelector(".line").style.width = "0vw";
})