<?php

require_once "config.php";
require_once "employee.php";

$request = 2;

// Read $_GET value
if (isset($_GET['request'])) {
    $request = $_GET['request'];
}

// // Fetch records
// if ($request == 1) {

//     // Select record
//     $sql = "SELECT * FROM employee";
//     $employeeData = mysqli_query($con, $sql);

//     $response = array();
//     while ($row = mysqli_fetch_assoc($employeeData)) {
//         $response[] = array(
//             "id" => $row['id'],
//             "emp_name" => $row['emp_name'],
//             "salary" => $row['salary'],
//             "email" => $row['email'],
//         );
//     }

//     echo json_encode($response);
//     exit;
// }

// Insert record
function insertEmployee($params)
{
    $employee = new employee();
    $employee->setEmp_name($params->name);
    $employee->setSalary($params->salary);
    $employee->setEmail($params->email);
    $employee->createEmployee();
}



