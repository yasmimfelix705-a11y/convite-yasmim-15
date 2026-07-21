// ===================================
// ABERTURA DO ENVELOPE
// ===================================


const envelope = document.querySelector(".envelope");

const loading = document.getElementById("loading");

const site = document.getElementById("site");



envelope.addEventListener("click", () => {


    envelope.classList.add("aberto");



    setTimeout(() => {


        loading.style.opacity = "0";


        site.classList.add("visivel");



        setTimeout(() => {


            loading.style.display = "none";


        },1500);



    },1200);



});





// ===================================
// CONTAGEM REGRESSIVA
// 05 DE DEZEMBRO ÀS 20:00
// ===================================



const dataFesta = new Date(
    "December 5, 2026 20:00:00"
).getTime();





function atualizarContagem(){


    const agora = new Date().getTime();


    const distancia = dataFesta - agora;



    if(distancia <= 0){


        document.getElementById("dias").innerHTML = "00";

        document.getElementById("horas").innerHTML = "00";

        document.getElementById("minutos").innerHTML = "00";

        document.getElementById("segundos").innerHTML = "00";


        return;


    }




    const dias = Math.floor(

        distancia /

        (1000 * 60 * 60 * 24)

    );




    const horas = Math.floor(

        (distancia %

        (1000 * 60 * 60 * 24))

        /

        (1000 * 60 * 60)

    );





    const minutos = Math.floor(

        (distancia %

        (1000 * 60 * 60))

        /

        (1000 * 60)

    );





    const segundos = Math.floor(

        (distancia %

        (1000 * 60))

        /

        1000

    );





    document.getElementById("dias").innerHTML =

    String(dias).padStart(2,"0");



    document.getElementById("horas").innerHTML =

    String(horas).padStart(2,"0");



    document.getElementById("minutos").innerHTML =

    String(minutos).padStart(2,"0");



    document.getElementById("segundos").innerHTML =

    String(segundos).padStart(2,"0");



}





setInterval(atualizarContagem,1000);


atualizarContagem();





// ===================================
// ANIMAÇÃO DOS ELEMENTOS
// ===================================



window.addEventListener("load",()=>{


    const conteudo = document.querySelector(".conteudo");


    if(conteudo){


        conteudo.style.transform =
        "translateY(20px)";


        conteudo.style.transition =
        "1.5s";


        setTimeout(()=>{


            conteudo.style.transform =
            "translateY(0)";


        },500);


    }


});





// ===================================
// ROLAGEM SUAVE
// ===================================



document.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();



        const destino = document.querySelector(
            this.getAttribute("href")
        );



        if(destino){


            destino.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});
