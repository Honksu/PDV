$(document).ready(function() {
	
    var loginForm = $('#login-form')

    loginForm.submit(function(event) {
        console.log("Form data: " + loginForm.serialize());

        // Prevent default browser functionality (redirection)
        event.preventDefault();

        // Make the actual ajax call
        $.ajax({
            type : "POST",
            url : $('#login-form-url').val(),
            data : loginForm.serialize(),
            success : function(data) {
                console.log("Logged in succesfully")
                console.log("Response message: " + data.msg);

                // Cancel the modal
                cancelModal();

                // Reload page so every possible effect 
                // will take authenticated user into account
                //window.location('/');
                location.reload();
            },
            error : function(data) {
                console.log("Error. Response message: " + data.responseJSON.msg);
                if (data.status == 403) {
                    // Set the HTML error element visible in case of an error
                    $("#login-form-error").css("display", "block");
                    $("#login-form-error").text(
                        "Login failed. Make sure you are registered" +
                        " and your username and password are written correctly.");
                }
            }
        }).done(function(){
            console.log("Login process done");
        });
    });
});
