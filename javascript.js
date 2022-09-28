function imgSlider(anything){
    document.querySelector('.Donut').src = anything;
    if (anything == 'lib/Img1.png'){
       const id_01 = document.getElementById("id_01");
       const id_02 = document.getElementById("id_02");
       const id_03 = document.getElementById("id_03");
       id_01.style.backgroundColor = "#f17897";
       id_02.style.backgroundColor = "#f17897";
       id_03.style.color = "#f17897";
    }else if(anything == 'lib/Img2.png'){
        const id_01 = document.getElementById("id_01");
        const id_02 = document.getElementById("id_02");
        const id_03 = document.getElementById("id_03");
        id_01.style.backgroundColor = "#443c37";
        id_02.style.backgroundColor = "#443c37";
        id_03.style.color = "#443c37";
    }else{
        const id_01 = document.getElementById("id_01");
        const id_02 = document.getElementById("id_02");
        const id_03 = document.getElementById("id_03");
        id_01.style.backgroundColor = "#efe6b2";
        id_02.style.backgroundColor = "#efe6b2";
        id_03.style.color = "#efe6b2";
    }
}
function proSlider(anything){ document.querySelector('.Produto').src = anything;}