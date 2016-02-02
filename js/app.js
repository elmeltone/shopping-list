$(document).ready(function() {

/* Add default items */
  $('#list').append('<li>&#43;  x    milk</li>');


/* Add new item */
  $('#add').click(function(e) {
    var inputArea = document.getElementById('new-item')
    var inputValue = inputArea.value;
   // event.preventDefault();

    if(!$('#new-item').val()) {
      alert('Please type a new item in the space provided.');
    } else {
        $('<li class="list-items">' + inputValue + '</li>').appendTo('#list');

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

});
