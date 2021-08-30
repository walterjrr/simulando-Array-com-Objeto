const quasearray = {0: 'rafael', 1: 'ana', 2: 'Bia'}

Object.defineProperty(quasearray, 'toString',{
  value:function(){ return Object.values(this)},
  enumerable: false
})

console.log(quasearray[0])


const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quasearray.toString(), meuArray)