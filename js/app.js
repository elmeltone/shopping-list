$(document).ready(function() {

/* Add default items */
  $('#list').append('<li class="list-items"><span class="delete">&#10007</span>  <span class="check">&#10003</span>  milk</li>');
  $('#list').append('<li class="list-items"><span class="delete">&#10007</span>  <span class="check">&#10003</span>  eggs</li>');
  $('#list').append('<li class="list-items"><span class="delete">&#10007</span>  <span class="check">&#10003</span>  bread</li>');

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

/* Delete item */
$('.delete').mousedown(function(event) {
  //console.log("deleted item");
  $('.list-items').remove();
});

});
