$(document).ready(function() {

/* Add default items */
  $('#list').append('<li><span class="delete">&#10007</span>  <span class="check">&#10003</span>  milk</li>');
  $('#list').append('<li><span class="delete">&#10007</span>  <span class="check">&#10003</span>  eggs</li>');
  $('#list').append('<li><span class="delete">&#10007</span>  <span class="check">&#10003</span>  bread</li>');

/* Add new item */
  $('#add').click(function(e) {
    var inputArea = document.getElementById('new-item')
    var inputValue = inputArea.value;
   // event.preventDefault();

    if(!$('#new-item').val()) {
      alert('Please type a new item in the space provided.');
    } else {
        $('<li class="list-items">' + '<span class="delete">&#10007</span>  <span class="check">&#10003</span>' + ' ' + inputValue + '</li>').appendTo('#list');

    document.getElementById('new-item').value = '';
  };
});

/* Use "enter" key for new item */
  $('#new-item').on('keydown',(function(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      $('#add').click();
    };
  }));

/* Delete item */
$(document).on('click', ".delete", function() {
  $(this).parent('li').remove();
});

/* Check/Uncheck item */
$(document).on('click', ".check", function() {
  var checked = $(this).parent('li').css('text-decoration');
  if (checked == 'line-through')
    $(this).parent('li').css("text-decoration", "none");
  else
    $(this).parent('li').css("text-decoration", "line-through");

});


});
