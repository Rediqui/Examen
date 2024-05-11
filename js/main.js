var lineaglobal = "";
var linea1 = "";
var linea2 = "";
var linea3 = "";
var linea4 = "";
var resultado = "";
var numero1 = "";
var numero2 = "";
var numero3 = "";
var numero4 = "";
var numero5 = "";
var numero6 = "";
var numero7 = "";
var numero8 = "";
var numero9 = "";
var data = [];
var info = "";

//Event lisener de cada cadena
$("#lineaglobal").on("change", function(){
    resultado = "";
    $("#numerodigital").html("");
    lineaglobal = $(this).val();
    linea1 = lineaglobal.substring(0, 27);
    linea2 = lineaglobal.substring(27, 54);
    linea3 = lineaglobal.substring(54, 81);
    linea4 = lineaglobal.substring(81, 108);
    console.log('numerodecaracteres: ', lineaglobal.length);
    console.log('linea1: ', linea1);
    console.log('linea2: ', linea2);
    console.log('linea3: ', linea3);
    console.log('linea4: ', linea4);
    analizarcadena();
});

function analizarcadena(){
    var validador = true;
    //Validacion de cada cadena
    if(linea1.length != 27){
        toastr.info("La linea 1 debe tener 27 caracteres")
        validador = false;
    }
    if(linea2.length != 27){
        toastr.info("La linea 2 debe tener 27 caracteres")
        validador = false;
    }
    if(linea3.length != 27){
        toastr.info("La linea 3 debe tener 27 caracteres")
        validador = false;
    }
    if(linea4.length != 27){
        toastr.info("La linea 4 debe tener 27 caracteres")
        validador = false;
    }

    if (validador == false) {
        $("#resultado").html("");
        $("#btn_generar").attr("disabled", true);
        return false;
    }else{
        $("#btn_generar").attr("disabled", false);
        lectordecadena();
    }
}

//Matris de variables
var num1 = (
"   "+
"  |"+
"  |"
)

var numpitado1 = `
<div class="number">
    <div class="segment">   </div>
    <div class="segment">  |</div>
    <div class="segment">  |</div>
</div>
`

var num2 = (
" _ "+
" _|"+
"|_ "
)

var numpitado2 = `
<div class="number">
    <div class="segment"> _ </div>
    <div class="segment"> _| </div>
    <div class="segment">|_ </div>
</div>
`

var num3 = (
" _ "+
" _|"+
" _|"
)

var numpitado3 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment"> _| </div>
    <div class="segment"> _| </div>
</div>
`

var num4 = (
"   "+
"|_|"+
"  |"
)

var numpitado4 = `
<div class="number">
    <div class="segment">    </div>
    <div class="segment">|_| </div>
    <div class="segment">  | </div>
</div>
`

var num5 = (
" _ "+
"|_ "+
" _|"
)

var numpitado5 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">|_  </div>
    <div class="segment"> _| </div>
</div>
`

var num6 = (
" _ "+
"|_ "+
"|_|"
)

var numpitado6 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">|_  </div>
    <div class="segment">|_| </div>
</div>
`

var num7 = (
" _ "+
"  |"+
"  |"
)

var numpitado7 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">  | </div>
    <div class="segment">  | </div>
</div>
`

var num8 = (
" _ "+
"|_|"+
"|_|"
)

var numpitado8 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">|_| </div>
    <div class="segment">|_| </div>
</div>
`

var num9 = (
" _ "+
"|_|"+
" _|"
)

var numpitado9 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">|_| </div>
    <div class="segment"> _| </div>
</div>
`

var num0 = (
" _ "+
"| |"+
"|_|"
)

var numpitado0 = `
<div class="number">
    <div class="segment"> _  </div>
    <div class="segment">| | </div>
    <div class="segment">|_| </div>
</div>
`

var numpintadoduda = `
<div class="number">
    <div class="segment"> ? </div>
    <div class="segment"> ? </div>
    <div class="segment"> ? </div>
</div>
`


function lectordecadena(){
    var resultado = "";
    var cadena1 = "";
    var cadena2 = "";
    var cadena3 = "";
    var cadena4 = "";
    

    for (var index = 0; index < linea1.length; index++) {
        cadena1 += linea1[index];
    }

    for (var index = 0; index < linea2.length; index++) {
        cadena2 += linea2[index];
    }

    for (var index = 0; index < linea3.length; index++) {
        cadena3 += linea3[index];
    }

    for (var index = 0; index < linea4.length; index++) {
        cadena4 += linea4[index];
    }

    console.log(resultado);
    
    buscarnumeros(cadena1, cadena2, cadena3, cadena4);
}

function buscarnumeros(cadena1, cadena2, cadena3, cadena4){

    numero1 = cadena1.substring(0, 3) + cadena2.substring(0, 3) + cadena3.substring(0, 3);
    numero2 = cadena1.substring(3, 6) + cadena2.substring(3, 6) + cadena3.substring(3, 6);
    numero3 = cadena1.substring(6, 9) + cadena2.substring(6, 9) + cadena3.substring(6, 9);
    numero4 = cadena1.substring(9, 12) + cadena2.substring(9, 12) + cadena3.substring(9, 12);
    numero5 = cadena1.substring(12, 15) + cadena2.substring(12, 15) + cadena3.substring(12, 15);
    numero6 = cadena1.substring(15, 18) + cadena2.substring(15, 18) + cadena3.substring(15, 18);
    numero7 = cadena1.substring(18, 21) + cadena2.substring(18, 21) + cadena3.substring(18, 21);
    numero8 = cadena1.substring(21, 24) + cadena2.substring(21, 24) + cadena3.substring(21, 24);
    numero9 = cadena1.substring(24, 27) + cadena2.substring(24, 27) + cadena3.substring(24, 27);

    //Pintaremos numeros digitales acorde al numero 
    var numerodigital = ``;
    numerodigital += digitalizar(numero1);
    numerodigital += digitalizar(numero2);
    numerodigital += digitalizar(numero3);
    numerodigital += digitalizar(numero4);
    numerodigital += digitalizar(numero5);
    numerodigital += digitalizar(numero6);
    numerodigital += digitalizar(numero7);
    numerodigital += digitalizar(numero8);
    numerodigital += digitalizar(numero9);
    $("#numerodigital").html(numerodigital);

    //Numeros a Validar
    let numb0 = '';
    let numb1 = '';
    let numb2 = '';
    let numb3 = '';
    let numb4 = '';
    let numb5 = '';
    let numb6 = '';
    let numb7 = '';
    let numb8 = '';

    resultado += buscar(numero1);
    numb0 = buscar(numero1);
    resultado += buscar(numero2);
    numb1 = buscar(numero2);
    resultado += buscar(numero3);
    numb2 = buscar(numero3);
    resultado += buscar(numero4);
    numb3 = buscar(numero4);
    resultado += buscar(numero5);
    numb4 = buscar(numero5);
    resultado += buscar(numero6);
    numb5 = buscar(numero6);
    resultado += buscar(numero7);
    numb6 = buscar(numero7);
    resultado += buscar(numero8);
    numb7 = buscar(numero8);
    resultado += buscar(numero9);
    numb8 = buscar(numero9);

    validarnumeros(resultado);
}


function buscar(numero){
    if(numero == num1){
        return "1";
    }
    if(numero == num2){
        return "2";
    }
    if(numero == num3){
        return "3";
    }
    if(numero == num4){
        return "4";
    }
    if(numero == num5){
        return "5";
    }
    if(numero == num6){
        return "6";
    }
    if(numero == num7){
        return "7";
    }
    if(numero == num8){
        return "8";
    }
    if(numero == num9){
        return "9";
    }
    if(numero == num0){
        return "0";
    }
    return "?";
}

function digitalizar(numero){
    if(numero == num1){
        return numpitado1;
    }
    if(numero == num2){
        return numpitado2;
    }
    if(numero == num3){
        return numpitado3;
    }
    if(numero == num4){
        return numpitado4;
    }
    if(numero == num5){
        return numpitado5;
    }
    if(numero == num6){
        return numpitado6;
    }
    if(numero == num7){
        return numpitado7;
    }
    if(numero == num8){
        return numpitado8;
    }
    if(numero == num9){
        return numpitado9;
    }
    if(numero == num0){
        return numpitado0;
    }
    return numpintadoduda;

}

function validarnumeros(resultado){
    $("#resultado").html("");
    d9 = parseInt(resultado[0]);
    d8 = parseInt(resultado[1]);
    d7 = parseInt(resultado[2]);
    d6 = parseInt(resultado[3]);
    d5 = parseInt(resultado[4]);
    d4 = parseInt(resultado[5]);
    d3 = parseInt(resultado[6]);
    d2 = parseInt(resultado[7]);
    d1 = parseInt(resultado[8]);


    if (resultado[0] == "?" || resultado[1] == "?" || resultado[2] == "?" || resultado[3] == "?" || resultado[4] == "?" || resultado[5] == "?" || resultado[6] == "?" || resultado[7] == "?" || resultado[8] == "?") {
        toastr.error("Numero de cuenta invalido");
        $("#resultado").html(resultado + ' ILL');
        info = (resultado + ' ILL')
        data.push(info);
        imprimirdata();
        return false;
    }

    var suma = (d1*1) + (d2*2) + (d3*3) + (d4*4) + (d5*5) + (d6*6) + (d7*7) + (d8*8) + (d9*9);
    var residuo = suma % 11;
    var verificador = $('#numid').val();
    console.log('numeros de cuenta: ', d9, d8, d7, d6, d5, d4, d3, d2, d1);
    console.log('suma: ', suma);
    console.log('residuo: ', residuo);
    console.log('verificador: ', verificador);
    
    if(residuo == verificador){
        toastr.success("Numero de cuenta valido");
        $("#resultado").html(resultado + ' OK');
        info = (resultado + ' OK')
    }else{
        toastr.info("Numero de cuenta invalido");
        $("#resultado").html(resultado + ' ERR');
        info = (resultado + ' ERR')
    }
    //Guardar datos en un array
    data.push(info);
    imprimirdata();
}

function imprimirdata(){
    console.log(data);
    txt = "";
    for (var i = 0; i < data.length; i++) {
        txt += "<tr>";
        txt += "<td>" + (i+1) + "</td>";
        txt += "<td>" + data[i] + "</td>";
        txt += "</tr>";
    }
    $("#tabladatos").html(txt);
}