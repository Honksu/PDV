$(document).ready(function() {
	
	
    var createUserForm = $('#friendrequest')

    createUserForm.submit(function(event) {

        // Prevent default browser functionality (redirection)
        event.preventDefault();

        // Make the actual ajax call
        $.ajax({
            type : "POST",
            url : $('#friendrequestinput').val(),
            data : createUserForm.serialize(),
            success : function(data) {
                if (data.status >= 500 && data.status < 600) {
                    $("#friendrequest").text(
                        data.responseJSON.msg);        
                }
            },
            error : function(data) {
                console.log("Error occured while creating user")

            }
        }).done(function (data) {
            if (data.success) {
                window.location.href = data.url;
            }    
        });
    });
});