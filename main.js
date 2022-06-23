function getClickOnId(id) {
	let elem = document.getElementById(id);
}

let xhttpGet = new XMLHttpRequest();
xhttpGet.open('GET', 'ajaxfile.php?request=1', true);
xhttpGet.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhttpGet.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// Response
		let response = this.responseText;
	}
};
xhttpGet.send();

let xhttpPost = new XMLHttpRequest();
xhttpPost.open('POST', 'ajax.php', true);
xhttpPost.setRequestHeader('Content-Type', 'application/json');
xhttpPost.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// Response
		let response = this.responseText;
		alert(response);
	}
};
let data = {
	name: document.getElementById('txt_name').value,
	salary: document.getElementById('txt_salary').value,
	email: document.getElementById('txt_email').value
};
xhttpPost.send(JSON.stringify(data));

// loadEmployees();

// Load records with GET request
function loadEmployees() {
	let xhttp = new XMLHttpRequest();

	// Set GET method and ajax file path with parameter
	xhttp.open('GET', 'ajaxfile.php?request=1', true);

	// Content-type
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	// call on request changes state
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Parse this.responseText to JSON object
			let response = JSON.parse(this.responseText);

			// Select <table id='empTable'> <tbody>
			let empTable = document
				.getElementById('empTable')
				.getElementsByTagName('tbody')[0];

			// Empty the table <tbody>
			empTable.innerHTML = '';

			// Loop on response object
			for (let key in response) {
				if (response.hasOwnProperty(key)) {
					let val = response[key];

					// insert new row
					let NewRow = empTable.insertRow(0);
					let name_cell = NewRow.insertCell(0);
					let username_cell = NewRow.insertCell(1);
					let email_cell = NewRow.insertCell(2);

					name_cell.innerHTML = val['emp_name'];
					username_cell.innerHTML = val['salary'];
					email_cell.innerHTML = val['email'];
				}
			}
		}
	};

	// Send request
	xhttp.send();
}

// Insert new record with POST request
function insertNewEmployee() {
	let name = document.getElementById('txt_name').value;
	let salary = document.getElementById('txt_salary').value;
	let email = document.getElementById('txt_email').value;

	if (name != '' && salary != '' && email != '') {
		let data = { name: name, salary: salary, email: email };
		let xhttp = new XMLHttpRequest();
		// Set POST method and ajax file path
		xhttp.open('POST', 'ajaxfile.php', true);

		// call on request changes state
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let response = this.responseText;
				if (response == 1) {
					alert('Insert successfully.');

					loadEmployees();
				}
			}
		};

		// Content-type
		xhttp.setRequestHeader('Content-Type', 'application/json');

		// Send request with data
		xhttp.send(JSON.stringify(data));
	}
}
