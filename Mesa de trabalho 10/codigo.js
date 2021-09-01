function imprimirInverso (arr) {
    for(let i = arr.length-1 ; i >= 0; i--) {
      console.log(arr[i])
  }
  }
  
  function inverter (arr) {
    let aux = []
    for(let i = arr.length-1 ; i >= 0; i--) {
      aux.push(arr[i])
    }
    return console.log(aux)
  }
  
  function somarArray(num_arr) {
    let sum = 0
    for(let i = num_arr.length-1 ; i >= 0 ; i--) {
      sum += num_arr[i]
    }
    return console.log(sum)
  }
  
  function join (str_arr) {
    let finalstring = new String
    for (let i = 0 ; i <= str_arr.length-1 ; i++) {
      finalstring += str_arr[i]
    }
    return console.log(finalstring)
  }
  
  let filmes1 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
  
  function titulosEmLetraMaiuscula (film_arr) {
    for (let i = 0 ; i <= film_arr.length-1 ; i++) {
      film_arr[i] = film_arr[i].toUpperCase()
    }
    return console.log(film_arr)
    }
  
  let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
  
  function juntarDuasListas (arr1,arr2) {
    arr2.pop()
    for(let i = 0; i <= arr2.length-1 ; i++) {
      arr1.push(arr2[i])
    }
    return console.log(arr1)
  }
  
  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
  
  function compararNotas (notas1,notas2) {
    for (let i = 0 ; i <= notas1.length-1 ; i++) {
      notas1[i] == notas2[i] ? console.log("São iguais.") : console.log("São diferentes.")
    }
    }
  
  