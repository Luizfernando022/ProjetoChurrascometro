let btn = document.getElementById("btn");
let menu = document.getElementById("btnmenu");

menu.addEventListener("click", () => {
  if(menu.getAttribute("statusAba") === "close"){
  document.getElementById('aba').style.height = "200px"
  menu.setAttribute("statusAba","open")
  }
  else{ 
    
    document.getElementById('aba').style.height = "0px"
    menu.setAttribute("statusAba","close")

  }
});

onload = () => {
  document.getElementById("calc").style.animationName = "calcAnimation";
};

btn.addEventListener("click", () => {
  let crianca = parseInt(document.getElementById("i1").value);
  let adulto = parseInt(document.getElementById("i2").value);
  let nAlcoolotra = parseInt(document.getElementById("i3").value);
  let duracao = parseInt(document.getElementById("i4").value);
  let resultCarne = document.getElementById("r1");
  let resultRefrigerante = document.getElementById("r2");
  let resultAgua = document.getElementById("r3");
  let resultCerveja = document.getElementById("r4");

  if (crianca === "" && adulto === "" && nAlcoolotra === "") {
    document.getElementById("erro").innerHTML =
      "<p>Informe a quantidade de pessoas!!";
    document.getElementById("erro").style.color = "red";
    document.getElementById("erro").style.textShadow = "1px 1px 10px";
  } else {
    let quantidadeCarne = ((carne(duracao) * adulto) + (carne(duracao) * nAlcoolotra) + (crianca * carne(duracao)/ 2)) / 1000;
    let quantidadeAgua = (adulto + crianca + nAlcoolotra) * agua(duracao);
    let quantidadeRefrigerante =
      (nAlcoolotra + crianca) * refrigerante(duracao);
    let quantidadeCerveja = cerveja(duracao) * adulto;

    document.getElementById("calc").style.animationName = "calcAnimationOut";
    document.getElementById("result").style.animationName = "resultAnimation";
    setInterval(() => {
      document.getElementById("calc").style.display = "none";
      document.getElementById("result").style.display = "block";
    }, 800);

    resultCarne.innerHTML = `<p> Será necessário ${quantidadeCarne}KG de carne</p>`;
    resultRefrigerante.innerHTML = `<p> Será necessário ${quantidadeRefrigerante}L de refrigerante</p>`;
    resultAgua.innerHTML = `<p> Será necessário ${quantidadeAgua}L de Água</p>`;
    resultCerveja.innerHTML = `<p> Será necessário ${quantidadeCerveja} Latinha de Cerveja</p>`;
    function carne(e) {
      if (e >= 8) {
        return 800;
      } else if (e >= 3) {
        return 600;
      } else {
        return 400;
      }
    }
    function cerveja(e) {
      if (e >= 14) {
        return 8;
      } else if (e >= 3) {
        return 8;
      } else {
        return 4;
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
