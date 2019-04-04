//Ajax code for discussions

$(document).ready(function() {
    $(window).on('message', function(evt) {
      //Note that messages from all origins are accepted

      //Get data from sent message
      var data = evt.originalEvent.data;
      //Create a new list item based on the data
      var newItem = '\n\t<li>' + (data.payload || '') + '</li>';
      //Add the item to the beginning of the actions list
      $('#actions').prepend(newItem);
    });
  });
		$(function() {
    $('#Comments').submit(function(event) {
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
          location.reload();
        },
        beforeSend: function() {
          submitButton.prop('disabled', 'disabled');
        }
      }).done(function(data) {
        submitButton.prop('disabled', false);
      });
    });
  
  });
  function loadlink(){
    $('#kok').load('{% url 'discussion' disc.pk %} #kok',function () {
         $(this).unwrap();
    });
}

loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 5 seconds
}, 5000);