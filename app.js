   
    
let grid = document.getElementById("grid")

let output = document.querySelector("h3")







let a = "./pics/background.jpg";

let cards = [
    "./pics/ChesseBurger.jpg", 
    "./pics/Fries.png", 
    "./pics/hotdogs.png",
    "./pics/IceCreams.png",
    "./pics/MilkShake.png",
    "./pics/Pizza.png",
    "./pics/ChesseBurger.jpg", 
    "./pics/Fries.png", 
    "./pics/hotdogs.png",
    "./pics/IceCreams.png",
    "./pics/MilkShake.png",
    "./pics/Pizza.png"
]



function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min ));
}



function createArrayOfNUmbers(start, end ){
    let myArray = [];

    for(let i = start; i <=end ; i++){
        myArray.push(i);
    }

    return myArray;
}

let numbersArray = createArrayOfNUmbers(0,11);





document.addEventListener("DOMContentLoaded", function(){
    for (let i =1; i <= 12; i++){
        let image = document.createElement("IMG");
        grid.appendChild(image)
        image.setAttribute("src", a);
        image.addEventListener("click", ()=>{
            if(numbersArray.length== 0){
                console.log("it finished")
            }
            let randomIndex = randomNumber(0,12);
            let randomNumber = numbersArray[randomIndex];
        
            numbersArray.splice(randomIndex, 1); 
            output.innerText= randomNumber
            image.setAttribute("src", cards[b]);
        }); 


    }    
   
            

   

    




    
    

})






