const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', () => {
  // Quando o token (JWT) for implementado, aqui é o lugar certo para:
  // 1. Chamar uma rota tipo POST /api/logout (se o token for invalidado no servidor)
  // 2. Apagar o cookie/token guardado no navegador
  // Por enquanto, só redireciona de volta para a tela de login.

  window.location.href = '/';
});
