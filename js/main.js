document.addEventListener('DOMContentLoaded', function() {
    fetch('../keyphrases.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPhrase = data[randomIndex];
        const element = document.getElementById('textshow');
        element.innerHTML = `
            <span style="color: #FF5733;">${randomPhrase.frase}</span> - 
            <span style="color: #FF5733;">${randomPhrase.traduccion}</span> -            
            <span style="font-styl  e: italic; color: #33FF57;">${randomPhrase.autor}</span>
        `;
    })
    .catch(error => console.error('Error:', error));
});
