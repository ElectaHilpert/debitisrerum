interface StateType {
  [key:number]: number|number[]
}
// Function that extends an object with the given value for all given keys
// e.g., o([1, 3, 4], [6, 7], { x: 1, y: 2 }) = { 1: [6, 7]; 3: [6, 7], 4: [6, 7], x: 1, y: 2 }
var o= function(
  k:number[],
  v:number[],
  o?:StateType,
  l?:number
){
  for(o = o || {},l = k.length; l--; o[k[l]] = v)
    ;
  return o
},
$V0=[1,3],
$V1=[1,4],
$V2=[1,5],
$V3=[1,6],
$V4=[1,7],
$V5=[1,9],
$V6=[1,10],
$V7=[1,11],
$V8=[1,12],
$V9=[1,13],
$Va=[1,14],
$Vb=[1,15],
$Vc=[5,6,7,8,9,10,11,12,14],
$Vd=[5,6,7,14],
$Ve=[5,6,7,8,9,14];

const table: Array<StateType> = [
  {3:1,4:2,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},
  {1:[3]},
  o($Vc,[2,11]),
  {6:$V5,7:$V6,8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb,14:[1,23]},
  o($Vd,[2,2],{8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb}),
  o($Vd,[2,3],{8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb}),
  o($Ve,[2,4],{10:$V9,11:$Va,12:$Vb}),
  o($Ve,[2,5],{10:$V9,11:$Va,12:$Vb}),
  o([5,6,7,8,9,10,14],[2,6],{11:$Va,12:$Vb}),
  o($Vc,[2,10])
];

console.log(table);
