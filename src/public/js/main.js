// ===================== ELEMENTOS ===================== //
const loginScreen = document.getElementById('login-screen');
const signupScreen = document.getElementById('signup-screen');

const btnGoToSignup = document.getElementById('btnGoToSignup');
const btnGoToLogin = document.getElementById('btnGoToLogin');

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const loginError = document.getElementById('loginError');
const signupError = document.getElementById('signupError');

// ===================== NAVEGAÇÃO ENTRE TELAS ===================== //
function showScreen(screenToShow, screenToHide) {
  screenToHide.classList.remove('active');
  screenToShow.classList.add('active');
  // Aqui é um bom lugar para adicionar uma animação de transição depois
}

btnGoToSignup.addEventListener('click', () => {
  showScreen(signupScreen, loginScreen);
});

btnGoToLogin.addEventListener('click', () => {
  showScreen(loginScreen, signupScreen);
});

// ===================== SUBMIT DO LOGIN ===================== //
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginError.textContent = '';

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      loginError.textContent = data.message || 'Não foi possível entrar.';
      return;
    }

    // Login OK: redirecionar ou seguir o fluxo definido no back-end
    console.log('Login realizado:', data);

  } catch (err) {
    loginError.textContent = 'Erro ao conectar com o servidor.';
    console.error(err);
  }
});

// ===================== SUBMIT DO CADASTRO ===================== //
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  signupError.textContent = '';

  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, username, password })
    });

    const data = await response.json();

    if (!response.ok) {
      signupError.textContent = data.message || 'Não foi possível cadastrar.';
      return;
    }

    // Cadastro OK: pode redirecionar para o login automaticamente
    console.log('Cadastro realizado:', data);
    showScreen(loginScreen, signupScreen);

  } catch (err) {
    signupError.textContent = 'Erro ao conectar com o servidor.';
    console.error(err);
  }
});
