let buttons=document.getElementsByTagName('button')

let result=document.getElementById('result')

for(let i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}

function updateDisplay(input){
    let currentDisplay=result.innerText
    if(currentDisplay=="0"){
        if(input != "C" && input != "Del" && input!="="){
            result.innerText=""
            result.innerText=input
        }
    }
    else{
        if(input === "Del") {
            if(currentDisplay.length == 1) {
                result.innerText = "0";
            } else {
                result.innerText = currentDisplay.slice(0,-1);
            }
        }
        
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C" && input!="Del" && input!="="){
            result.innerText+=input
        }
        if(input=="="){
            let display=result.innerText
            result.innerText=eval(display)
        }
        
    }
}