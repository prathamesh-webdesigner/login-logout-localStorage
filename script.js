console.log('attached')


// signUp Form 
function signup(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username, email, password == '') {
        alert('Please fill credentials')
        return false
    }
    else {
        localStorage.setItem('usernameSignUp', username)
        localStorage.setItem('emailSignUp', email)
        localStorage.setItem('passwordSignUp', password)

        username = document.getElementById('username').value = '';
        email = document.getElementById('email').value = '';
        password = document.getElementById('password').value = '';

        alert('User register successfully!!!')
        window.location.href = 'login.html'
    }




}

// login form 
function login(event) {
    event.preventDefault();
    var loginEmail = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    var email1 = localStorage.getItem('usernameSignUp')
    var pwd1 = localStorage.getItem('passwordSignUp')

    if (email1 == loginEmail && pwd1 == loginPassword) {
        alert('done')
        localStorage.setItem('token', 'secret');
        window.location.href = 'logout.html'
    }
    else {
        alert('Username and password is incorrect')
    }
}
