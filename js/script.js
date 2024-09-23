var rgbBtn    = document.querySelector("#rgbBtn");
var div       = document.querySelector("#container")
var randomBtn = document.querySelector("#randomBtn")

// Change RGB color BTn
var colors = ["red","green","blue"];
var   i    = 0;
rgbBtn.onclick = function(){
    div.style.background = colors[i];
    i++;
    if(i == 3){
        i=0
    }
}

// Change Random Color to Btn and Container id
randomBtn.addEventListener('click',function(){
    console.log("f")


    rgbBtn.style.backgroundColor =  btnRandom()
    div.style.backgroundColor  = bgRandom()
    
})

function bgRandom(){
    var randomRBG = generateNumber()
    var randomGBG = generateNumber()
    var randomBBG = generateNumber()
   return `rgb(${randomRBG}, ${randomGBG},${randomBBG})`
}

function btnRandom(){
    var random1 = generateNumber()
    var random2 = generateNumber()
    var random3 = generateNumber()
    return `rgb(${random1}, ${random2},${random3})`

}

// setInterval(function(){
//     var randomRBG = generateNumber()
//     var randomGBG = generateNumber()
//     var randomBBG = generateNumber()
//     div.style.backgroundColor  = `rgb(${randomRBG}, ${randomGBG},${randomBBG})`

// }, 2000)

function generateNumber(){
    return Math.random()*255
}