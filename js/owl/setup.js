/* referenciando o jquery site https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html */
/* colocar loop false */
/* setup faz o carrosel funcionar */


/* PRIMEIRA OPÇÃO CAROUSEL , O $ REFERENCIA O JQUERY*/
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    /* QUANTIDADE DE ITEMS PARECERÃO CONFORME A TELA */
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})  

/* SEGUNDA OPÇÃO CAROUSEL */


/* var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
   */


/* PRIMEIRA OPÇÃO AO CLICAR O  BOTÃO ASSISTIR AGORA */

/* function openPopup(){
    window.open("https://youtu.be/4vi6ZWe_3Yc","VideoPopUp","width=640,height=360");
} */

/* SEGUNDA OPÇÃO AO CLICAR BOTÃO ASSISTIR AGORA CRIANDO UMA JANELA POP UP */

function openPopup() {
    // Abra a janela pop-up
    var minhaPopup = window.open("", "minhaPopup", "width=350,height=350");

    // Crie o elemento iframe
    var iframe = document.createElement("iframe");

    // Defina as propriedades do iframe
    iframe.src = "https://www.youtube.com/embed/R_taczjSuS8", title="YouTube video player" ,frameborder="0" ,allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.width = "300";
    iframe.height = "300";

    // Adicione o iframe à janela pop-up
    minhaPopup.document.body.appendChild(iframe);
}

/* TERCEIRA OPÇÃO BOTAO ASSISTIR AGORA */

/* const btnVideo = document.getElementById('btn-video');
btnVideo.addEventListener('click', function(){
    window.open('https://youtu.be/4vi6ZWe_3Yc');
})   */


/* BOTÃO MAIS INFORMAÇÕES */
 var btn = document.querySelector('#informacoes');
 var inserirInformacoes = document.querySelector('.inserir-informacoes');

 btn.addEventListener('click',function(){
    if(inserirInformacoes.style.display === 'block'){
        inserirInformacoes.style.display = 'none'

    }else{
        inserirInformacoes.style.display = 'block'
    }
 }) 


