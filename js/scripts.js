let list =  $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('you must write something');
} else {
   $('#list').append(li);

}
 
function crossOut() {
    li.toggleClass('strike');
}