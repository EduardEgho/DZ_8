const movies = [
    {title:'Taxi', year:'1998', rating:'8', director:'Gérard Pirès'},
    {title:'John Wick: Chapter 4', year:'2023', rating:'7.6', director:'Chad Stahelski'},
    {title:'1+1', year:'2011', rating:'8.8', director:'Olivier Nakache,Éric Toledano'},
    {title:'The Shawshank Redemption', year:'1994', rating:'9.1', director:'Frank Darabont'},
    {title:'Léon', year:'1994', rating:'8.7', director:'Luc Besson'},
    {title:'The Gentlemen', year:'2019', rating:'8.6', director:'Guy Ritchie'},
]

movies.forEach((movie, index)=>{
    let row = document.getElementById('moviesTable').insertRow(-1)
    row.insertCell(0).innerText = movie.title
    row.insertCell(1).innerText = movie.year
    row.insertCell(2).innerText = movie.rating
    row.insertCell(3).innerText = movie.director
    let buyButton = row.insertCell(4)
    buyButton.innerHTML = '<button class="buyButton">Buy</button>'
})

const btn = document.getElementById('btnOk')
const btnClose = document.querySelector('.close')
let table = document.getElementById('moviesTable')
let gray

table.addEventListener('click', (e)=>{
    if (e.target.className === 'buyButton'){
        gray = e.target.parentElement
        document.getElementById('modal').classList.add('open')
    }
})

btn.addEventListener('click', () =>{
    gray.innerText = ''
    gray.classList.add('hide')
    document.getElementById('modal').classList.remove('open')
})

btnClose.addEventListener('click', ()=>{
    document.getElementById('modal').classList.remove('open')
})









