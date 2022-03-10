let btn = document.getElementById("btn");

onload = () => {
  document.getElementById("calc").style.animationName = "calcAnimation";
};

btn.addEventListener("click", () => {
  let crianca = parseInt(document.getElementById("i1").value);
  let adulto = parseInt(document.getElementById("i2").value);
  let duracao = parseInt(document.getElementById("i3").value);
  let nAlcoolotra = parseInt(document.getElementById("i4").value);
  let resultCarne = document.getElementById("r1")
  let resultRefrigerante = document.getElementById("r2")
  let resultAgua = document.getElementById("r3")

  
  if (crianca === "" && adulto === "" && nAlcoolotra === "") {
    document.getElementById("erro").innerHTML =
      "<p>Informe a quantidade de pessoas!!";
    document.getElementById("erro").style.color = "red";
    document.getElementById("erro").style.textShadow = "1px 1px 10px";
  } else {
    let quantidadeCarne = carne(duracao) * adulto + (crianca * carne(duracao)) / 2 /1000;
    let quantidadeAgua = adulto + crianca + nAlcoolotra * agua(duracao);
    let quantidadeRefrigerante = nAlcoolotra + crianca * refrigerante(duracao);

    
    document.getElementById("calc").style.animationName = "calcAnimationOut";
    document.getElementById("result").style.animationName = "resultAnimation";
    setInterval(() => {
      document.getElementById("calc").style.display = "none";
      document.getElementById("result").style.display = "block";
    }, 800);
    
    resultCarne.innerHTML = `<p> Será necessário ${quantidadeCarne}KG de carne</p>`
    resultRefrigerante.innerHTML = `<p> Será necessário ${quantidadeRefrigerante}L de refrigerante</p>`
    resultAgua.innerHTML = `<p> Será necessário ${quantidadeAgua}L de Água</p>` 
    function carne(e) {
      if (e >= 8) {
        return 800;
      } else if (e >= 3) {
        return 600;
      } else {
        return 400;
      }
    }
    function refrigerante(e) {
      if (e >= 8) {
        return 8;
      } else if (e >= 3) {
        return 5;
      } else {
        return 2;
      }
    }
    function agua(e) {
      if (e >= 8) {
        return 5;
      } else if (e >= 3) {
        return 3;
      } else {
        return 1;
      }
    }
  }
});
