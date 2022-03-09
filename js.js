
let btn = document.getElementById('btn')

onload = ()=>{
    document.getElementById('calc').style.animationName = "calcAnimation"
}

btn.addEventListener('click',()=>{
    let crianca = document.getElementById('i1').value
    let adulto = document.getElementById('i2').value
    let duracao = document.getElementById('i3').value
    if(crianca === "" && adulto === ""){
        console.log("Preencha algum campo")
    }else{

        let quantidadeCarne = 400 * adulto + (crianca * 200)
    }

   

    

    
})
