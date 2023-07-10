const elem = document.querySelector("span#dev")
const text = ' #Desenvolvedor Front-end!'
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
        console.log(char[-1])
        const next = char[cont]
        elem.innerHTML += next 
    }, inter);
        
}
showText(elem, text, inter)