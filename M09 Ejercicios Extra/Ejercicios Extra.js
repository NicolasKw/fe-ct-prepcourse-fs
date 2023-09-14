/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var parClaveValor = [];
   for (var prop in objeto) {
      if(objeto.hasOwnProperty(prop)) {
         parClaveValor.push([prop, objeto[prop]]);
      }
   }
   return parClaveValor
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringSeparado = string.split("");
   stringSeparado.sort();
   var object = {};
   for (i = 0 ; i < stringSeparado.length ; i++) {
      var contador = 0;
      for (j = 0 ; j < stringSeparado.length ; j++) {
         if (stringSeparado[i] === stringSeparado [j]) {
            contador++;
         };
      };
      object[stringSeparado[i]] = contador;
   }  
   return object;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = "";
   var minusculas = "";
   for (i = 0 ; i < string.length ; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayusculas += string[i];
      } else {
         minusculas += string[i];
      };
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");
   var resultado = [];
   for (i = 0 ; i < palabras.length ; i++) {
      palabraInvertida = "";
      for (j = palabras[i].length - 1 ; j >= 0 ; j--) {
         palabraInvertida += palabras[i][j];
      };
      resultado.push(palabraInvertida);
   };
   return resultado.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arrayNumero = numero.toString().split("");
   var numeroInverso = [];
   for (i = 0 ; i < arrayNumero.length ; i++) {
      numeroInverso.unshift(arrayNumero[i]);
   };
   if (arrayNumero.join("") == numeroInverso.join("")) {
      return "Es capicua";
   } else {
      return "No es capicua";
   };
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrayString = string.split("");
   function lettersOut (letter) {
      if (letter === "a" || letter === "b" || letter === "c") return false;
      else return true;
   }
   var arrayStringFiltrado = arrayString.filter(lettersOut);
   return arrayStringFiltrado.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newArray = [];
   array1.forEach (num => {
      if (array2.includes(num)) newArray.push(num);
   });
   return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
