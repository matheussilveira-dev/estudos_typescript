/**
 * 1.unknow VS any
 * 2.null VS undefined
 * 3.Formas de casting
 * 4.Quando utilizar
 */

// const variableAny: any = 10; //É como se você desabilitasse a tipagem
// const variableUnknown: unknown = 10;

// const stringExample1 : string =  variableAny; //Com variableUnknown não é possível tipar novamente.
// const stringExample2 : string =  variableUnknown;

//Any
// new variableAny()
// variableAny.length;
// variableAny[0]

//Unknown
// new variableUnknown
// variableUnknown.length
// variableUnknown[0]

//As duas aceitam qualquer valor, porém só com any podemos qualquer metódo, construtor, posição do array valor.. com unknown não.

// -----------------------------------------------------------------

// Undefined __

// let variableUndefined;

// console.log(variableUndefined);
// console.log(typeof variableUndefined);

// Null __

// const variableNull = null
// console.log(variableNull)
// console.log(typeof variableNull) // Object  

//Null o valor se torna nada, aquilo literalmente tem o valor de nada, nulo, undefined, é que apenas não foi definido, se for para esc

// -------------------------------------------------------------

// Casting __

// type Tuple = [string, number]

// function functionExample(value){
//     console.log(value)
// }

// let value

// functionExample(value as Tuple)
// functionExample(<Tuple>value)