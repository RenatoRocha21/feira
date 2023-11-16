function sid() {
    var pops = "sidney-pop";
    var imgs = "sidney-prf";
    var sts = "st-sid";
    as(pops, imgs, sts);
}
function joao() {
    var pops = "joao-pop";
    var imgs = "joao-prf";
    var sts = "st-ja";
    as(pops, imgs, sts);
}
function harley() {
    var pops = "harley-pop";
    var imgs = "harley-prf";
    var sts = "st-hy";
    as(pops, imgs, sts);
}

function as(pops, imgs, sts) {
    var idmg = document.getElementById(imgs);
    var idiv = document.getElementById(pops);
    var st = document.getElementById(sts);

    if (idiv.classList.contains("visible")) {
        idiv.classList.remove('visible');
        idmg.style.height = '0';
        st.innerHTML = '▼';
    } else {
        idiv.classList.add('visible');
        idmg.style.height = '250px';
        st.innerHTML = '▲';
    }
}
