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
 
function loadLocale(locale) {
    fetch(`locales/${locale}.json`)
      .then(response => response.json())
      .then(translations => {
        document.querySelectorAll("[data-i18n]").forEach(el => {
          const key = el.getAttribute("data-i18n");
          el.textContent = translations[key] || el.textContent;
        });
      })
      .catch(error => console.error("Error loading locale:", error));
  }
   
  document.addEventListener("DOMContentLoaded", () => {
     loadLocale("es");
  
     document.getElementById("lang-es").addEventListener("click", () => loadLocale("es"));
    document.getElementById("lang-en").addEventListener("click", () => loadLocale("en"));
  });
  