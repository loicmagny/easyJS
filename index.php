<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->


    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>NPM Excel Converter</title>
</head>

<body class="container">

    <div>
        Name: <input type="text" id='txt_name'> <br>
        Salary: <input type="text" id='txt_salary'> <br>
        Email: <input type="text" id='txt_email'> <br>
        <input type="button" id="btn_submit" value="Submit" onclick="insertNewEmployee();">
    </div>
    <table id='empTable' border='1'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Salary</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="main.js"> </script>
</body>