function lm(){
    var lmr= document.getElementById('lmr')
    var oqv= document.getElementById('lm')

    if (oqv.classList.contains("visible")){
        oqv.classList.remove('visible')
        lmr.innerHTML='<h1>ler mais...</h1>'
    } else{
        oqv.classList.add('visible')
        lmr.innerHTML='<h1>ler menos</h1>'
    }
}