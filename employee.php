<?php


class Employee extends Database
{
    private $emp_name;
    private $salary;
    private $email;
    private $tablename = 'employee';


    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Get the value of emp_name
     */
    public function getEmp_name()
    {
        return $this->emp_name;
    }

    /**
     * Set the value of emp_name
     *
     * @return  self
     */
    public function setEmp_name($emp_name)
    {
        $this->emp_name = $emp_name;

        return $this;
    }

    /**
     * Get the value of salary
     */
    public function getSalary()
    {
        return $this->salary;
    }

    /**
     * Set the value of salary
     *
     * @return  self
     */
    public function setSalary($salary)
    {
        $this->salary = $salary;

        return $this;
    }

    /**
     * Get the value of email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }


    public function createEmployee()
    {
        $query = 'INSERT INTO ' . $this->tablename . ' (`emp_name`, `salary`, `email`) VALUES (:emp_name, :salary, :email)';
        $createEmployee = $this->db->prepare($query);
        $createEmployee->bindValue(':emp_name', $this->emp_name, PDO::PARAM_STR);
        $createEmployee->bindValue(':salary', $this->salary, PDO::PARAM_INT);
        $createEmployee->bindValue(':email', $this->email, PDO::PARAM_STR);
        $createEmployee->execute();
    }

    public function __destruct()
    {
        parent::__destruct();
    }
}
