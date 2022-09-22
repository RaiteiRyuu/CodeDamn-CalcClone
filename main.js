let outputValue = document.querySelector('.calc-display');
const keys =  document.querySelectorAll("button")

let screenValue = "";
for(item of keys){

    item.addEventListener('click',(e) =>{
        switch(e.target.innerText){
        case "*":
            screenValue +=e.target.innerText;
            break
        
        case "AC":
            screenValue = ""
            break
        case "/":
            screenValue += e.target.innerText;
            break
        case "-":
            screenValue += e.target.innerText;
            break
        case "+":
            screenValue += e.target.innerText;
            break
        case "=":
            screenValue = eval(screenValue)
            break        
        case "DEL" :
            screenValue = screenValue.substring(0, screenValue.length - 1);
            break
        default :
            screenValue += e.target.innerText;
        }
        outputValue.innerText =screenValue;
    
    })
}

