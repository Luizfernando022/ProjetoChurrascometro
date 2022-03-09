
let btn = document.getElementById('btn')

onload = ()=>{
    document.getElementById('calc').style.animationName = "calcAnimation"
}

btn.addEventListener('click',()=>{
    let crianca = document.getElementById('i1').value
    let adulto = document.getElementById('i2').value
    let duracao = document.getElementById('i3').value
    if(crianca === "" && adulto === ""){
        document.getElementById('erro').innerHTML = "<p>Informe a quantidade de pessoas!!"
        document.getElementById('erro').style.color = "red"
        document.getElementById('erro').style.textShadow = "1px 1px 10px"
    }else{

        let quantidadeCarne = carne(duracao) * adulto + (crianca * carne(duracao)/2)
        let quantidadeAgua = adulto + crianca + 2 
        document.getElementById('calc').style.animationName = "calcAnimationOut"
        document.getElementById('result').style.display = "block"
        document.getElementById('calc').style.display = "none"
        document.getElementById('result').style.animationName = "resultAnimation"
        console.log(quantidadeCarne)
        console.log(duracao)
        function carne(e){
            if(e >= 8){
                return 800
            }
            else if(e >= 3){
                return 600
            }
            else if(e >= 1){
                return 400
            }
            else{
                return 400
            }
            
        }
    }

   

    

    
})
