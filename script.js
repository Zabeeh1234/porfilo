const spanElement = document.querySelector('.multiple-text');

// Array of sentences
const sentences = [
  'Web Developer',
  'Graphic Designer',
];

// Function to display the letters with animation
function displayLettersWithAnimation() {
  let sentenceIndex = 0;
  let wordIndex = 0;
  let letterIndex = 0;

  function displayNextLetter() {
    const currentSentence = sentences[sentenceIndex];
    const words = currentSentence.split(' ');
    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      spanElement.textContent += currentWord[letterIndex];
      letterIndex++;
      setTimeout(displayNextLetter, 500); // Change letter every 0.1 second
    } else if (wordIndex < words.length - 1) {
      wordIndex++;
      spanElement.textContent += ' ';
      letterIndex = 0;
      setTimeout(displayNextLetter, 500); // Change letter every 0.1 second
    } else {
      // Reset indices to repeat the animation for the first two sentences
      sentenceIndex = (sentenceIndex + 1) % 2; // Repeat only the first two sentences
      wordIndex = 0;
      letterIndex = 0;
      spanElement.textContent = ''; // Clear the text content
      setTimeout(displayNextLetter, 100); // Start new sentence after 1.5 seconds
    }
  }

  displayNextLetter();
}

// Call the function to start displaying letters with animation
displayLettersWithAnimation();


function displayProject() {
  fetch('main.json')
    .then(res => res.json())
    .then(data => {
      data.Projects.forEach(project => {
        let projects = document.querySelector('.project');
        var cardHtml = `
       
        <div class="imageblock">
        <img src="${project.coverimage}"/>
            <div class="proj-content">
              <h3 class="proj-head">
                ${project.Project_Name}
              </h3>
              <div class="containerButton">
              <a href="${project.Cloudflare_link}" target= "_blank"><img src="/images/cloudflare.png" alt=""></a>
              <a href="${project.Github_link}" target= "_blank"><img src="/images/github.png" alt=""></a>
            </div>
            </div>
          </div>
        
        `;
        projects.innerHTML += cardHtml;
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

displayProject();

document.getElementById("downloadButton").addEventListener("click", function() {
  var link = document.createElement("a");
  link.download = "Zabeeh_Resume.pdf";
  link.href = "images/N.Zabeehullah-FlowCV-Resume-20240415.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});




// hamburger functionality:
let check = document.getElementById("check");
var menuContainer = document.getElementById('menuContainer');
check.addEventListener('click', () => {
    if (check.checked) {
        menuContainer.style.right = (menuContainer.style.right === '0px') ? '-900px' : '0px';
        document.body.style.overflowY = "hidden";
        const items = document.querySelectorAll('.nav-item .navigation');
items.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('.navigation.active').classList.remove('active');
        item.classList.add('active');
    })
})
    } else {
        menuContainer.style.right = (menuContainer.style.right === '-900px') ? '0px' : '-900px';
        document.body.style.overflowY = "scroll";
    }
})

// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   const moveTopButton = document.querySelector(".move-top");
//   if (scrollHeight > 420) {
//     moveTopButton.style.opacity = "1"; // Add quotes to "1"
//     moveTopButton.style.top = "85vh";
//     moveTopButton.style.right = "30px";
//   } else {
//     moveTopButton.style.opacity = "0"; // Add quotes to "0"
//     moveTopButton.style.top = "50vh";
//     moveTopButton.style.right = "20vw";
//   }
// });


