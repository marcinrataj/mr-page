document.addEventListener("DOMContentLoaded", function(){
  const nav = document.querySelector('.navbar');

  const navList = document.querySelector('.navbar-collapse');

  const allNavItems = document.querySelectorAll('.nav-link');
  console.log(allNavItems)

    function addShadow(){
      if (window.scrollY >= 300){
        nav.classList.add('shadow-bg')
      }else{
        nav.classList.remove('shadow-bg')
      }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => {
      navList.classList.remove('show')
    }))
    window.addEventListener("scroll", addShadow)
})


const textArray = [
  "Communicative Guy",
  "Gaming Lover",
  "Ambitious",
  "Enthusiastic Developer",
  "JavaScript Developer"
];

let textIndex = 0;
const textElement = document.getElementById('animatedText');

function changeText() {
  textElement.style.opacity = 0;  // Ukryj tekst

  setTimeout(() => {
      textElement.innerHTML = textArray[textIndex];  // Zmień tekst
      textElement.style.opacity = 1;  // Pokaż tekst
      textIndex = (textIndex + 1) % textArray.length;  // Przejdź do następnego tekstu
  }, 1000);  // Poczekaj 1 sekundę przed zmianą tekstu
}

// Uruchom pierwszą animację
changeText();

// Powtarzaj animację co 3 sekundy
setInterval(changeText, 3000);  // Zmień tekst co 4 sekundy


// Pobierz wszystkie przyciski i sekcje
const buttons = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('.section');

// Funkcja zmieniająca widoczną sekcję
function changeSection(event) {
    // Usuń klasę "active" z wszystkich przycisków
    buttons.forEach(button => button.classList.remove('active'));

    // Dodaj klasę "active" do klikniętego przycisku
    event.target.classList.add('active');

    // Ukryj wszystkie sekcje
    sections.forEach(section => section.classList.remove('active'));

    // Wyświetl sekcję odpowiadającą klikniętemu przyciskowi
    const sectionToShow = document.getElementById(event.target.getAttribute('data-section'));
    sectionToShow.classList.add('active');
}

// Nasłuchiwanie kliknięcia na każdym przycisku
buttons.forEach(button => {
    button.addEventListener('click', changeSection);
});

// Pokaż domyślnie pierwszą sekcję
buttons[0].classList.add('active');
sections[0].classList.add('active');


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Zapobiega domyślnej akcji formularza

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Tutaj możesz dodać kod do wysłania formularza do backendu

  alert('Your message has been sent!'); // Informacja dla użytkownika
  this.reset(); // Czyści formularz po wysłaniu
});
