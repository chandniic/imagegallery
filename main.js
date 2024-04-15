const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

  
  const images = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg', 'flower4.jpg', 'flower5.jpg'];
const alts = {
  'flower1.jpg': 'Icon of 1',
  'flower2.jpg': 'Icon of 2',
  'flower3.jpg': 'Icon of 3',
  'flower4.jpg': 'Icon of 4',
  'flower5.jpg': 'Icon of 5',
};

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.getAttribute('src');
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
