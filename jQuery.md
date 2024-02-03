 <!-- event listener click -->

$('button').click(function() {
console.log('clicked!!');
})

  <!-- event listener hover -->

$('button').hover(function() {
console.log('hover!!');
})

 <!-- like dom content loaded or like iife -->

$(function() {
console.log('on page load');
})

 <!-- like fetch -->

$(function () {
$.get('https://jsonplaceholder.typicode.com/users', function (data) {
console.log(data);
})
})

<!-- create data table from html -->

$('.myTable').DataTable({searching: false})

% create data table from api
$('.myTable').DataTable({
ajax: {
url: 'https://jsonplaceholder.typicode.com/users',
dataSrc: '',
},
columns: [
{ data: 'id' },
{ data: 'name' },
{ data: 'email' },
{ data: 'username' },
{ data: 'address.city' },
],
});

% search in table
$('.searchUser').on('keyup', function () {
const value = $(this).val().toLowerCase();

$('tbody tr').filter(function() {
// Get the text content of the current table row and convert it to lowercase
const rowText = $(this).text().toLowerCase();
// Check if the search term is found in the row text
const isSearchTermFound = rowText.indexOf(value) > -1;
// Toggle the visibility of the current table row based on the search result
$(this).toggle(isSearchTermFound);
})
});

% The on() method attaches one or more event handlers for the selected elements and child elements.
% The val() method returns or sets the value attribute of the selected elements.
% The toggle() method toggles between hide() and show() for the selected elements.