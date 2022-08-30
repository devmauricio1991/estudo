
function somar(){
    let campo1 = parseInt(document.querySelector('#input1').value);
    let campo2 = parseInt(document.querySelector('#input2').value);
        
    let soma = campo1+campo2;

    document.querySelector('#span1').innerHTML = soma;
}