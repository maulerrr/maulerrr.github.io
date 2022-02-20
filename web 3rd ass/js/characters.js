let styles = `
    body{
        font-family: Montserrat;
        font-style: normal;
        background: #070908;
    }
`
let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

$(document).ready(function bodyBuild() {

    $('<input type="search" style="padding:1rem; width: 15rem; border-radius: 0.3rem; background:rgba(230, 59, 61, 0.07); color: white; border: 0; margin-top:3rem; " id="find" placeholder="Enter Name and Surname">').appendTo('body');

    $('body').css({"display":"flex", "justify-content":"center", "flex-direction":" column", "align-items": "center"});

    $('body').append('<div class="card" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card').append('<img src="img/kanekibio.png" alt="kaneki" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card').append('<div class="def" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def').append('<h1>Ken Kaneki</h1>'+'<p>"I`m not the protagonist of a novel or anything. I`m just a college student who likes to read, like you could find anywhere. But... if, for argument`s sake, you were to write a story with me in the lead role, it would certainly be... a tragedy."</p>');

    $('body').append('<div class="card 2" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.2').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.2').append('<img src="img/juuzoubio.png" alt="juuzou" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.2').append('<div class="def 2" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.2').append('<h1>Juuzou Suzuya</h1>'+'<p>"You shouldn`t turn your back on the enemy."</p>');

    $('body').append('<div class="card 3" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.3').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.3').append('<img src="img/toukabio.png" alt="touka" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.3').append('<div class="def 3" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.3').append('<h1>Touka Kirishima</h1>'+'<p>"What the hell do you know?! It`s all because I can`t eat, because I could be a target at any time, all because I`m a ghoul! No matter how much I try, there`s a wall I can never jump over, and there`s happiness that I can never have. But I`m still hanging on to life. Despite it all."</p>');

    $('body').append('<div class="card 4" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.4').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.4').append('<img src="img/arimabio.png" alt="arima" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.4').append('<div class="def 4" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.4').append('<h1>Kishou Arima</h1>'+'<p>"I... I`ve... always... hated it. I hated myself, who only ever stole from others... I feel like I was finally... able to leave something behind..."</p>');
    
    $('body').append('<div class="card 5" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.5').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.5').append('<img src="img/etobio.png" alt="eto" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.5').append('<div class="def 5" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.5').append('<h1>Eto Yoshimura</h1>'+'<p>"..What cannot change can only be broken.<br><br>This is so to me, who left behind everything necessary inside the womb."</p>');

    $('body').append('<div class="card 6" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.6').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.6').append('<img src="img/rizebio.png" alt="rize" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.6').append('<div class="def 6" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.6').append('<h1>Rize Kamishiro</h1>'+'<p>"Those cowardly lions have confined themselves in a cage of their own free will. Even though the lion is supposed to be the king of all beasts."</p>');

    $('body').append('<div class="card 7" style="display: flex; width: 45%;color: white; padding: 1rem;"></div>');
    $('.card.7').css({"background-color":"rgba(230, 59, 61, 0.07)", "margin":"2rem"});
    $('.card.7').append('<img src="img/madobio.png" alt="mado" style=" margin: 1rem; max-width: 10rem;"></img>');
    $('.card.7').append('<div class="def 7" style="display: flex;flex-direction: column;justify-content: center; align-items: flex-start;"></div>');
    $('.def.7').append('<h1>Kureo Mado</h1>'+'<p>"When you`re in front of the enemy, even if your hands are trembling, fight. That`s what it means to be a `professional.`"</p>');


    $('.card:eq(0)').toggleClass('wow animate__animated animate__fadeInDown');
    $('.card.2').toggleClass("wow animate__animated animate__fadeInLeft")
    $('.card.3').toggleClass("wow animate__animated animate__fadeInRight");
    $('.card.4').toggleClass("wow animate__animated animate__fadeInLeft")
    $('.card.5').toggleClass("wow animate__animated animate__fadeInRight");
    $('.card.6').toggleClass("wow animate__animated animate__fadeInLeft");
    $('.card.7').toggleClass("wow animate__animated animate__fadeInRight");
    $('#find').toggleClass("wow animate__animated animate__zoomIn");

    let card1 = $(".card h1:eq(0)").text();
    let card2 = $(".card.2 h1").text();
    let card3 = $(".card.3 h1").text();
    let card4 = $(".card.4 h1").text();
    let card5 = $(".card.5 h1").text();
    let card6 = $(".card.6 h1").text();
    let card7 = $(".card.7 h1").text(); 

    let cards = [];
    cards.push(card1, card2, card3, card4, card5, card6, card7);

    $('#find').keyup(function () { 
        event.preventDefault();
        console.log($('#find').val());
            console.log($('#find').val());
                for (let index = 0; index < cards.length; index++) {
                    $('.card:eq('+index+')').hide();
                }
        for (let index = 0; index < cards.length; index++) {
                if(($('#find').val()).toLocaleLowerCase() == cards[index].toLocaleLowerCase()){
                    console.log(cards[index]+" character was found!");
                    $('.card:eq('+index+')').removeClass('wow').show();
                }
            }
        
    });
});

function bodyBuilded(){
    let card1 = $(".card h1:eq(0)").text();
    let card2 = $(".card.2 h1").text();
    let card3 = $(".card.3 h1").text();
    let card4 = $(".card.4 h1").text();
    let card5 = $(".card.5 h1").text();
    let card6 = $(".card.6 h1").text();
    let card7 = $(".card.7 h1").text(); 

    let cards = [];
    cards.push(card1, card2, card3, card4, card5, card6, card7);

    return cards;
}
