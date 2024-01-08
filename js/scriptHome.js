// scriptHome.js

function goHome() {
  // Implemente a lógica para ir para a página inicial, se necessário
  console.log("Going to Home");
}

function addPhoto() {
  // Implemente a lógica para adicionar uma foto, se necessário
  console.log("Adding Photo");
}

function goProfile() {
  // Redireciona para a página de perfil
  window.location.href = "perfil.html";
}

function search() {
  // Implemente a lógica de pesquisa, se necessário
  console.log("Searching");
}

function likePhoto(photoId) {
  var likeButton = document.getElementById('feedItem' + photoId).querySelector('.likeButton');
  var likeCountElement = likeButton.querySelector('.likeCount');

  if (likesCount[photoId]) {
    likesCount[photoId]++;
  } else {
    likesCount[photoId] = 1;
  }

  likeCountElement.textContent = likesCount[photoId];
  likeButton.classList.toggle('clicked');
}

function commentPhoto(photoId) {
  var commentsArea = document.getElementById('commentsArea' + photoId);
  var comment = prompt('Digite seu comentário:');

  if (comment !== null && comment !== "") {
    // Adicionar o comentário à área de comentários
    commentsArea.innerHTML += '<div class="comment">' + comment + '</div>';
  }
}
