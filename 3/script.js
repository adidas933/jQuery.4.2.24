const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

$('.searchUser').on('keyup', function() {
  const value = $(this).val().toLowerCase();
  $('tbody tr').filter(function() {
    const rowText = $(this).text().toLowerCase();
    const isSearchTermFound = rowText.indexOf(value) > -1;
    $(this).toggle(isSearchTermFound);
  })
})

async function createTable(api) {
  const response = await fetch(api);
  const jsonNoteUsers = await response.json();

  const modifiedUsersObject = jsonNoteUsers.map((user) => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      phone: user.phone,
      website: user.website,
      companyName: user.company.name,
    };
  });

  modifiedUsersObject.forEach((element, index) => {
    const valuesAsArray = Object.values(element);
    if (!index) {
      createHeader(element);
    }
    const valuesTr = createRow(valuesAsArray);
    tbody.appendChild(valuesTr);
  });
}

function createHeader(element) {
  const keysAsArray = Object.keys(element);
  const keysTr = createRow(keysAsArray);
  thead.appendChild(keysTr);
}

function createRow(array) {
  const tr = document.createElement('tr');
  array.forEach((element) => {
    const td = document.createElement('td');
    td.innerText = element;
    tr.appendChild(td);
  });
  return tr;
}

createTable('https://jsonplaceholder.typicode.com/users');

