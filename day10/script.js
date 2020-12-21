const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke(){
    const config = {
        headers: {
          Accept: 'application/json',
          mode:'no-cors'
        },
      }
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=>console.log(res))
}