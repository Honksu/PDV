
  
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
                if (data.success) {
                    window.location.href = data.url;
                }
            },   
            error : function(data) {
                console.log("Error occured while changing data")
                if (data.status >= 500 && data.status < 600) {
                }
                else {
                }
            }
        }).done(function(){
        });
    });
});

$(function() {
    $('#profilerequest').submit(function(event) {
      event.preventDefault();
      var formEl = $(this);
      var submitButton = $('input[type=submit]', formEl);
  
      $.ajax({
        type: 'POST',
        url : formEl.prop('action'),
        accept: {
          javascript: 'application/javascript'
        },
        data: formEl.serialize(),
        success : function(data) {
                  window.location.assign('/visit_profile/'+$('#username_profile_request').val()+'/')				
        },
        beforeSend: function() {
          submitButton.prop('disabled', 'disabled');
        }
      }).done(function(data) {
        submitButton.prop('disabled', false);
      });
    });
  
  });
