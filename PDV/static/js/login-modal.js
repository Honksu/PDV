//Javascript for handling the login-modal, mainly to set the displays of elements and
//resetting elements

function toggleCreateUserForm() {
    document.getElementById('login-create-user-form').style.display='block';
    document.getElementById('login-form').style.display='none';
}

function openUserCreatedInfo() {
    document.getElementById('login-create-user-form').style.display='none';
    document.getElementById('login-create-user-success').style.display='block';
}

function cancelModal() {
    document.getElementById('login-modal').style.display='none';
    document.getElementById('login-form').style.display='block';
    document.getElementById('login-create-user-form').style.display='none'
}

function openLogin() {
    // Get the error elements
    var loginErrorElement = document.getElementById('login-form-error');
    var createUserErrorElement = document.getElementById('createuser-form-error');

    // Set the HTML error elements invisible at start
    loginErrorElement.style.display='none';
    loginErrorElement.innerText='';
    createUserErrorElement.style.display='none';
    createUserErrorElement.innerText='';

    // Reset the login forms
    document.getElementById('login-form').reset();
    document.getElementById('login-create-user-form').reset();

    // Initialize the visibility of the different parts of the modal
    document.getElementById('login-form').style.display='block';
    document.getElementById('login-create-user-form').style.display='none'
    document.getElementById('login-create-user-success').style.display='none';

    // Finally open the modal
    document.getElementById('login-modal').style.display='block'
}
