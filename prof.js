function sid() {
    var pops = "sidney-pop";
    var imgs = "sidney-prf";
    var sts = "st-sid";
    var divs = "div-sid";
    as(pops, imgs, sts, divs);
}
function joao() {
    var pops = "joao-pop";
    var imgs = "joao-prf";
    var sts = "st-ja";
    var divs = "div-ja";
     as(pops, imgs, sts, divs);
}
function harley() {
    var pops = "harley-pop";
    var imgs = "harley-prf";
    var sts = "st-hy";
    var divs = "div-hy";
     as(pops, imgs, sts, divs);
}

function ney() {
    var pops = "ney-pop";
    var imgs = "ney-prf";
    var sts = "st-hn";
    var divs = "div-ney";
     as(pops, imgs, sts, divs);
}

function bonny() {
    var pops = "bonny-pop";
    var imgs = "bonny-prf";
    var sts = "st-bon";
    var divs = "div-bnn";
     as(pops, imgs, sts, divs);
}

function ale() {
    var pops = "ale-pop";
    var imgs = "ale-prf";
    var sts = "st-ale";
    var divs = "div-alx";
     as(pops, imgs, sts, divs);
}
function rob() {
    var pops = "rob-pop";
    var imgs = "rob-prf";
    var sts = "st-rob";
    var divs = "div-rbs";
     as(pops, imgs, sts, divs);
}

function yur() {
    var pops = "yur-pop";
    var imgs = "yur-prf";
    var sts = "st-yur";
    var divs = "div-yu";
     as(pops, imgs, sts, divs);
}

function jao() {
    var pops = "jao-pop";
    var imgs = "jao-prf";
    var sts = "st-jao";
    var divs = "div-jv";
     as(pops, imgs, sts, divs);
}

function nusta() {
    var pops = "nusta-pop";
    var imgs = "nusta-prf";
    var sts = "st-nusta";
    var divs = "div-ms";
     as(pops, imgs, sts, divs);
}

function as(pops, imgs, sts, divs) {
    var idmg = document.getElementById(imgs);
    var idiv = document.getElementById(pops);
    var st = document.getElementById(sts);
    var div = document.getElementById(divs);

    if (idiv.classList.contains("visible")) {
        idiv.classList.remove('visible');
        idmg.classList.remove('visible');
        div.classList.remove('a');
        st.innerHTML = '▼';
    } else {
        idiv.classList.add('visible');
        idmg.classList.add('visible');
        div.classList.add('a');
        st.innerHTML = '▲';
    }
}
