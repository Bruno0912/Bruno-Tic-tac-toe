let controle = 1 
let contador = 0
function funcao(){
    let cel11,cel12,cel13,cel21,cel22,cel23,cel31,cel32,cel33
    cel11 = document.getElementById("cel11").value;
    cel12 = document.getElementById("cel12").value;
    cel13 = document.getElementById("cel13").value;
    cel21 = document.getElementById("cel21").value;
    cel22 = document.getElementById("cel22").value;
    cel23 = document.getElementById("cel23").value;
    cel31 = document.getElementById("cel31").value;
    cel32 = document.getElementById("cel32").value;
    cel33 = document.getElementById("cel33").value;

    if (  cel11 == 'X' &&   cel12 == 'X' &&  cel13 == 'X') {
        
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel11 == 'X' && cel21 == 'X' && cel31 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel31 == 'X' && cel32 == 'X' && cel33 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel13 == 'X' && cel23 == 'X' && cel33 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel11 == 'X' && cel22 == 'X' && cel33 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel13 == 'X' && cel22 == 'X' && cel31 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel12 == 'X' && cel22 == 'X' && cel32 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    else if(cel21 == 'X' && cel22 == 'X' && cel23 == 'X'){
        window.alert("X Venceu")
        bloqueio() 
    }
    //--------------------------------\\
    else if(  cel11 == 'O' &&   cel12 == 'O' &&  cel13 == 'O') {
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel11 == 'O' && cel21 == 'O' && cel31 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel31 == 'O' && cel32 == 'O' && cel33 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel13 == 'O' && cel23 == 'O' && cel33 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel11 == 'O' && cel22 == 'O' && cel33 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
        
    }
    else if(cel13 == 'O' && cel22 == 'O' && cel31 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel12 == 'O' && cel22 == 'O' && cel32 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
    else if(cel21 == 'O' && cel22 == 'O' && cel23 == 'O'){
        window.alert("O Venceu")
        bloqueio() 
    }
   else if(contador==9){
        window.alert("Empate")
   }
}



function clickcel11(){
    if (controle == 1){
        document.getElementById("cel11").value = "X";
        document.getElementById("cel11").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel11").value = "O";
        document.getElementById("cel11").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel12(){
    if (controle == 1){
        document.getElementById("cel12").value = "X";
        document.getElementById("cel12").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel12").value = "O";
        document.getElementById("cel12").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel13(){
    if (controle == 1){
        document.getElementById("cel13").value = "X";
        document.getElementById("cel13").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel13").value = "O";
        document.getElementById("cel13").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel21(){
    if (controle == 1){
        document.getElementById("cel21").value = "X";
        document.getElementById("cel21").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel21").value = "O";
        document.getElementById("cel21").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel22(){
    if (controle == 1){
        document.getElementById("cel22").value = "X";
        document.getElementById("cel22").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel22").value = "O";
        document.getElementById("cel22").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel23(){
    if (controle == 1){
        document.getElementById("cel23").value = "X";
        document.getElementById("cel23").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel23").value = "O";
        document.getElementById("cel23").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel31(){
    if (controle == 1){
        document.getElementById("cel31").value = "X";
        document.getElementById("cel31").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel31").value = "O";
        document.getElementById("cel31").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel32(){
    if (controle == 1){
        document.getElementById("cel32").value = "X";
        document.getElementById("cel32").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel32").value = "O";
        document.getElementById("cel32").disabled = true;
        controle = 1;
    }
    contador++;
}

function clickcel33(){
    if (controle == 1){
        document.getElementById("cel33").value = "X";
        document.getElementById("cel33").disabled = true;
        controle = 0;
    }
    else{
        document.getElementById("cel33").value = "O";
        document.getElementById("cel33").disabled = true;
        controle = 1;
    }
    contador++;
}

function reiniciar() {
    location.reload()
}

function bloqueio() {
    cel11 = document.getElementById("cel11").disabled=true;
    cel12 = document.getElementById("cel12").disabled=true;
    cel13 = document.getElementById("cel13").disabled=true;
    cel21 = document.getElementById("cel21").disabled=true;
    cel22 = document.getElementById("cel22").disabled=true;
    cel23 = document.getElementById("cel23").disabled=true;
    cel31 = document.getElementById("cel31").disabled=true;
    cel32 = document.getElementById("cel32").disabled=true;
    cel33 = document.getElementById("cel33").disabled=true;
}





