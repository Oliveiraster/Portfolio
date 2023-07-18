const elem = document.querySelector("span#dev")
const text = ' #DesenvolvedorFrontEnd!'
const inter = 200

function showText(elem, text, inter){
    let cont = 0 
    const char = text.split("")
    setInterval(() => {
        cont+=1
        if(cont >= char.length){
            return clearInterval
        }
        if( cont >= char.length-1){
            setTimeout(() =>{
            return document.querySelector("span#dev").innerHTML = ' ',
            cont = 0
            },1000)  
        }
        console.log(cont)
        const next = char[cont]
        elem.innerHTML += next 
    }, inter);
        
}
showText(elem, text, inter)