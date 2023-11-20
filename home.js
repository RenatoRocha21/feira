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

function ney() {
    var pops = "ney-pop";
    var imgs = "ney-prf";
    var sts = "st-hn";
    as(pops, imgs, sts);
}

function bonny() {
    var pops = "bonny-pop";
    var imgs = "bonny-prf";
    var sts = "st-bon";
    as(pops, imgs, sts);
}

function rob() {
    var pops = "rob-pop";
    var imgs = "rob-prf";
    var sts = "st-rob";
    as(pops, imgs, sts);
}

function yur() {
    var pops = "yur-pop";
    var imgs = "yur-prf";
    var sts = "st-yur";
    as(pops, imgs, sts);
}

function jao() {
    var pops = "jao-pop";
    var imgs = "jao-prf";
    var sts = "st-jao";
    as(pops, imgs, sts);
}

function nusta() {
    var pops = "nusta-pop";
    var imgs = "nusta-prf";
    var sts = "st-nusta";
    as(pops, imgs, sts);
}
function ale() {
    var pops = "ale-pop";
    var imgs = "ale-prf";
    var sts = "st-ale";
    as(pops, imgs, sts);
}

function as(pops, imgs, sts) {
    var idmg = document.getElementById(imgs);
    var idiv = document.getElementById(pops);
    var st = document.getElementById(sts);

    if (idiv.classList.contains("visible")) {
        idiv.classList.remove('visible');
        idmg.classList.remove('visible');
        st.innerHTML = '▼';
    } else {
        idiv.classList.add('visible');
        idmg.classList.add('visible');
        st.innerHTML = '▲';
    }
}
