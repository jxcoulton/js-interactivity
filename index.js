console.log('hello world');

let message = document.querySelector(`#message`)

const addMovie = (e) => {
    e.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li');

    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    inputField.value = []
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    console.log(e.target.classList)
    if (e.target.classList.contains("checked")){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}

