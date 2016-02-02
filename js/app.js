$(document).ready(function() {

/* Add default items */
  // $('.list' ul).append('<li>milk</li>');


/* Add new item */
  $('#add').click(function(e) {
    var inputArea = document.getElementById('new-item')
    var inputValue = inputArea.value;
   // event.preventDefault();

    if(!$('#new-item').val()) {
      /*.alert('Please type a new item in the space provided.');*/
      console.log();
    } else {
        $('<li class="list-items"></li>').appendTo('#list')/*.html('<div class="item-case"></div><span>'input-value'</span>')*/;

    document.getElementById('new-item').value = '';
    };
  });

/* Use "enter" key for new item */
  $('.new-item').keydown(function(event) {
    if(event.keyCode === 13) {
      event.preventDefault();
      $('.add').click();
    };
  });

});
