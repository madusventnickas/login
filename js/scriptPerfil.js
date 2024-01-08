// scriptPerfil.js
// scriptPerfil.js

function showProfileInput() {
    const profileInput = document.getElementById('profileInput');
    profileInput.click();
  }
  
  function handleProfileUpload() {
    const profileInput = document.getElementById('profileInput');
    const profilePhoto = document.getElementById('profilePhoto');
    const addProfileButton = document.getElementById('addProfileButton');
  
    const file = profileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePhoto.style.backgroundImage = `url('${e.target.result}')`;
        profilePhoto.classList.add('has-photo');
        addProfileButton.style.display = 'none'; // Esconde o botão após a adição da foto
      };
      reader.readAsDataURL(file);
    }
  }
  
  // ... restante do código permanece inalterado ...

  
function changeCoverPhoto() {
    document.getElementById('coverInput').click();
  }
  
  function changeProfilePhoto() {
    document.getElementById('profileInput').click();
  }
  
  function handleCoverUpload() {
    const coverInput = document.getElementById('coverInput');
    const coverPhoto = document.getElementById('coverPhoto');
  
    const file = coverInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        coverPhoto.style.backgroundImage = `url('${e.target.result}')`;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function handleProfileUpload() {
    const profileInput = document.getElementById('profileInput');
    const profilePhoto = document.getElementById('profilePhoto');
  
    const file = profileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePhoto.style.backgroundImage = `url('${e.target.result}')`;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function goHome() {
    // Redireciona para a página inicial
    window.location.href = "Home.html";
  }
  
  // Adicione lógica para carregar fotos postadas dinamicamente no feed
  function loadPostedPhotos() {
    const photoGallery = document.getElementById('photoGallery');
    for (let i = 1; i <= 5; i++) {
      const img = document.createElement('img');
      img.src = `img/posted_photo${i}.jpeg`;
      img.alt = `Posted Photo ${i}`;
      photoGallery.appendChild(img);
    }
  }
  
  // Carregue as fotos postadas quando a página for carregada
  window.onload = function () {
    loadPostedPhotos();
  };
  
   