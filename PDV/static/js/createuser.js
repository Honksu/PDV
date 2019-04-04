$(document).ready(function() {
    var createUserForm = $('#login-create-user-form')

    createUserForm.submit(function(event) {

        // Prevent default browser functionality (redirection)
        event.preventDefault();

        // Make the actual ajax call
        $.ajax({
            type : "POST",
            url : $('#login-create-user-url').val(),
            data : createUserForm.serialize(),
            success : function(data) {
                if (data.success) {
                    if (data.success2){
						//Inform the user of successful registration
						window.confirm("User created successfully!");
                        window.location.href = data.url;
						
                    }
                }   
                else if (data.status >= 500 && data.status < 600) {
                    $("#createuser-form-error").text(
                        data.responseJSON.msg);        
                }
                else {
                    openUserCreatedInfo("User succesfully created. You can login now");
                }
            },
            error : function(data) {
                console.log("Error occured while creating user")
                // Set the HTML error element visible in case of an error
                $("#createuser-form-error").css("display", "block");
                if (data.status >= 500 && data.status < 600) {
                    $("#createuser-form-error").text(
                        data.responseJSON.msg);
                }
                else {
                    $("#createuser-form-error").text(
                        "Could not create a new user. Make sure all the data is formatted correctly");
                }
            }
        })
    });
});