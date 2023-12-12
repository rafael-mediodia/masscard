document.addEventListener('DOMContentLoaded', function() {

  const imagesContainer = document.querySelector('.image-gallery');
  const filterButtons = document.querySelectorAll('.filter-button');
  const allImages = [
    { src: 'card-atagawabanio.jpg', link: 'card-atagawabanio.html', tags: ['animal'] },
    { src: 'card-bicboy.jpg', link: 'card-bicboy.html', tags: ['object'] },
    { src: 'card-bigbluebug.jpg', link: 'card-bigbluebug.html', tags: ['animal'] },
    { src: 'card-bigred.jpg', link: 'card-bigred.html', tags: ['object'] },
    { src: 'card-bluedal.jpg', link: 'card-bluedal.html', tags: ['animal'] },
    { src: 'card-coatikun.jpg', link: 'card-coatikun.html', tags: ['animal'] },
    { src: 'card-colonelsanders.jpg', link: 'card-colonelsanders.html', tags: ['human'] },
    { src: 'card-dokenchan.jpg', link: 'card-dokenchan.html', tags: ['animal'] },
    { src: 'card-domo.jpg', link: 'card-domo.html', tags: ['object'] },
    { src: 'card-duo.jpg', link: 'card-duo.html', tags: ['animal'] },
    { src: 'card-elmerthebull.jpg', link: 'card-elmerthebull.html', tags: ['animal'] },
    { src: 'card-energizerbunny.jpg', link: 'card-energizerbunny.html', tags: ['animal'] },
    { src: 'card-gominon.jpg', link: 'card-gominon.html', tags: ['object'] },
    { src: 'card-grimace.jpg', link: 'card-grimace.html', tags: ['object'] },
    { src: 'card-jimmyhattori.jpg', link: 'card-jimmyhattori.html', tags: ['human'] },
    { src: 'card-jollibee.jpg', link: 'card-jollibee.html', tags: ['animal'] },
    { src: 'card-koolaidman.jpg', link: 'card-koolaidman.html', tags: ['object'] },
    { src: 'card-kumamon.jpg', link: 'card-kumamon.html', tags: ['animal'] },
    { src: 'card-marimokkori.jpg', link: 'card-marimokkori.html', tags: ['animal'] },
    { src: 'card-melonkuma.jpg', link: 'card-melonkuma.html', tags: ['animal'] },
    { src: 'card-mrclean.jpg', link: 'card-mrlcean.html', tags: ['object'] },
    { src: 'card-mrpeanut.jpg', link: 'card-mrpeanut.html', tags: ['object'] },
    { src: 'card-peteypcup.jpg', link: 'card-peteypcup.html', tags: ['object'] },
    { src: 'card-pilsburydoughboy.jpg', link: 'card-pilsburydoughboy.html', tags: ['object'] },
    { src: 'card-qtakun.jpg', link: 'card-qtakun.html', tags: ['animal'] },
    { src: 'card-scrotie.jpg', link: 'card-scrotie.html', tags: ['object'] },
    { src: 'card-softkuriinu.jpg', link: 'card-softkuriinu.html', tags: ['object'] },
    { src: 'card-wendy.jpg', link: 'card-wendy.html', tags: ['human'] },
    { src: 'card-yosikadiri.jpg', link: 'card-yosikadiri.html', tags: ['human'] },
    // Add more images with their respective links and tags
    // { src: 'image3.jpg', link: 'link3.html', tags: ['animal'] },
  ];

  let displayedImages = [...allImages]; // Clone allImages array to start with all images

  // Function to shuffle the images array
  function shuffleImages() {
    for (let i = displayedImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [displayedImages[i], displayedImages[j]] = [displayedImages[j], displayedImages[i]];
    }
  }

  // Function to generate image elements with specific links and tags
  function generateImages() {
    imagesContainer.innerHTML = '';

    displayedImages.forEach((image, index) => {
      const imgLink = document.createElement('a'); // Create <a> tag
      imgLink.href = image.link; // Set specific link for the image

      const img = document.createElement('img');
      img.src = 'images/' + image.src;
      img.alt = `Image ${index + 1}`;

      imgLink.appendChild(img); // Append image inside <a> tag
      imagesContainer.appendChild(imgLink); // Append <a> tag with image to the container

      // Add tags as classes to each image container
      image.tags.forEach(tag => {
        imgLink.classList.add(tag);
      });
    });

    // Fade in images after they're appended
    setTimeout(() => {
      document.querySelectorAll('.image-gallery a').forEach(a => {
        a.style.opacity = 1;
      });
    }, 100);
  }

  // Event listener for filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      if (filter === 'all') {
        displayedImages = [...allImages]; // Show all images
      } else {
        displayedImages = allImages.filter(image => image.tags.includes(filter));
      }

      shuffleImages();
      generateImages();
    });
  });

  // Initial gallery generation
  generateImages();
});