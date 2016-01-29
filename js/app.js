$(document).ready(function() {

/* Add default items */
  // $('.list' ul).append('<li>milk</li>');


/* Add new item */
  $('.add').click(funtion){
    var
  };

/* Use "enter" key for new item */
  $(.'new-item').keydown(funtion(event){
    if(event.keyCode === 13) {
      event.preventDefault();
      $('.add').click();
    };
  });

}
