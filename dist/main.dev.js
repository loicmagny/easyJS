"use strict";

function getClickOnId(id) {
  var elem = document.getElementById(id);
}

var xhttpGet = new XMLHttpRequest();
xhttpGet.open('GET', 'ajaxfile.php?request=1', true);
xhttpGet.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhttpGet.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Response
    var response = this.responseText;
  }
};

xhttpGet.send();
var xhttpPost = new XMLHttpRequest();
xhttpPost.open('POST', 'ajax.php', true);
xhttpPost.setRequestHeader('Content-Type', 'application/json');

xhttpPost.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Response
    var response = this.responseText;
    alert(response);
  }
};

var data = {
  name: document.getElementById('txt_name').value,
  salary: document.getElementById('txt_salary').value,
  email: document.getElementById('txt_email').value
};
xhttpPost.send(JSON.stringify(data)); // loadEmployees();
// Load records with GET request

function loadEmployees() {
  var xhttp = new XMLHttpRequest(); // Set GET method and ajax file path with parameter

  xhttp.open('GET', 'ajaxfile.php?request=1', true); // Content-type

  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // call on request changes state

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Parse this.responseText to JSON object
      var response = JSON.parse(this.responseText); // Select <table id='empTable'> <tbody>

      var empTable = document.getElementById('empTable').getElementsByTagName('tbody')[0]; // Empty the table <tbody>

      empTable.innerHTML = ''; // Loop on response object

      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          var val = response[key]; // insert new row

          var NewRow = empTable.insertRow(0);
          var name_cell = NewRow.insertCell(0);
          var username_cell = NewRow.insertCell(1);
          var email_cell = NewRow.insertCell(2);
          name_cell.innerHTML = val['emp_name'];
          username_cell.innerHTML = val['salary'];
          email_cell.innerHTML = val['email'];
        }
      }
    }
  }; // Send request


  xhttp.send();
} // Insert new record with POST request


function insertNewEmployee() {
  var name = document.getElementById('txt_name').value;
  var salary = document.getElementById('txt_salary').value;
  var email = document.getElementById('txt_email').value;

  if (name != '' && salary != '' && email != '') {
    var _data = {
      name: name,
      salary: salary,
      email: email
    };
    var xhttp = new XMLHttpRequest(); // Set POST method and ajax file path

    xhttp.open('POST', 'ajaxfile.php', true); // call on request changes state

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;

        if (response == 1) {
          alert('Insert successfully.');
          loadEmployees();
        }
      }
    }; // Content-type


    xhttp.setRequestHeader('Content-Type', 'application/json'); // Send request with data

    xhttp.send(JSON.stringify(_data));
  }
}