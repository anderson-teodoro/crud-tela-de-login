function verificarLogin() {
 // recuperar dados do formulário
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 // verificar se os dados estão corretos
 if (username === 'admin' && password === '123456') {
   alert('Login efetuado com sucesso!');
   // redirecionar para a página de CRUD
   window.location.href = 'crud.html';
 } else {
   alert('Usuário ou senha incorretos!');
 }
}