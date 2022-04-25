//Example fetch using pokemonapi.co

const randomPokemon = Math.ceil(Math.random()*898);
//randomized pokemon ID between 1 and 898 (doesn't include latest two known Pokemon)

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`) //API data request for random Pokemon
  .then(res=> res.json()) //parsed as JSON
  .then(data => {
    console.log(data) //to be erased
    console.log(data.name) //to be erased
    document.querySelector('img').src = data.sprites.front_default
    //shows the Pokemon to be guessed

    document.querySelector('button').addEventListener('click', checkAnswer)
    //listens for user input submission

    function checkAnswer() {
      document.querySelector('h2').innerText = data.name
      document.querySelector('img').style.filter = "none"
      for(let i = 0; i < data.types.length; i++){
        document.querySelector('h4').innerText += data.types[i].type.name + '\n'
      }
      //reveals pokemon upon submission

      const guess = document.querySelector('input').value.toLowerCase()
      //stores user input in variable 'guess'

      if (data.name === guess){
        document.querySelector('h5').innerText = 'You\'re a Pokemon Master!'
      } else {
        document.querySelector('h5').innerText = 'Better luck next time!'
      }
      //compare user answer with Pokemon name to deliver the news
    }
  })




//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h2').innerText = data.name
//         document.querySelector('img').src = data.sprites.front_default
//         document.querySelector('h3').innerText = data.types[0].type.name
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

