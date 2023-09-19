const button = document.createElement('button')

button.innerText = 'click me!!!'

button.id = 'mainButton'

button.addEventListener('click', () => { 
    alert('Did I mention it was free?')
})

document.body.appendChild(button)
