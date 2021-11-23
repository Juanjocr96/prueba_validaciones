/**
  @author Juanjo Carrasco <jcarrascorodriguez.guadalupe@fundacionloyola.net>
  @license GPL v3 2021
**/

'use strict'

console.log('Cargado JS')


/**
  Funcion que al pulsar el boton ponerCero realiza lo siguiente
  * Pone los campos numericos a 0
  * Si la matricula no es introducida en el formato especificado
    escribe un mensaje de error.
**/

function ponerCero(){
  let input1 = document.getElementById('iCalculo1')
  let input2 = document.getElementById('iCalculo2')
  let input3 = document.getElementById('iCalculo3')

  input1.value = 0;
  input2.value = 0;
  input3.value = 0;

  let exp1 = new RegExp ('\d{4}[A-Z]{3}')
  let exp2 = new RegExp('[A-C]{1,2}\d{4}[A-C]{1,2}')

  if(!document.getElementById('iMatricula').value.match(exp1) || document.getElementById('iMatricula').value.match(exp2)){
    let div = document.getElementById('divError')
    let p = document.createElement('p')
    div.appendChild(p)
    let texto = document.createTextNode('Error en el campo Matricula')
    p.appendChild(texto)
  }
}

/**
  Funcion que crea un select cuando selecionas un Curso
  y muestra los modulos que se imparten en el mismo.
**/

function curso(){
  let select = document.createElement('select')
  let option = document.createElement('option')
  select.appendChild(option)
  option.setAtributte('value', 'DIW')
}

/**
  Funcion que al pulsar enviar hace lo siguiente
  *Calcula la suma de los campos numericos
  *Si la suma es mayor a 20 o menor que 10, se escribe un mensaje de error
**/

function enviar(){

  let n1 = document.getElementById('iCalculo1').value
  let n2 = document.getElementById('iCalculo2').value
  let n3 = document.getElementById('iCalculo3').value

  let suma = parseInt((n1+n2+n3))

  if(suma < 10 || suma > 20){
    let div = document.getElementById('divError')
    let p = document.createElement('p')
    div.appendChild(p)
    let texto = document.createTextNode('Error al sumar los campos numéricos')
    p.appendChild(texto)
  }
}
