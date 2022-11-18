/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos ress.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var amis = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // amis.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  var amis = [{nom:"Juan",  edad:25}, {nom:"Pedro",  edad:30}, {nom: "Carlos", edad:40}]
  Array.prototype.filtrar = function(cb) {
    let a = []
    this.forEach(e => cb(e) ? a.push(e) : "")
    return a
  };
  let res = amis.filtrar(p => p.edad <= 30)
  return res
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar