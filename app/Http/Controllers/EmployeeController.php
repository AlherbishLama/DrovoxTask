<?php

namespace App\Http\Controllers;

use JetBrains\PhpStorm\ArrayShape;

class EmployeeController extends Controller
{

    private $employees = [["First_Name" => "Tim",
        "Last_Name" => "Cook",
        "Company" => "Apple"], ["First_Name" => "Satya",
        "Last_Name" => "Nadella",
        "Company" => "Microsoft"],["First_Name" => "Hopefully",
        "Last_Name" => "You",
        "Company" => "Drovox"]];


    /**
     * @return array
     * @description Will return a list of all Employees
     */
    #[ArrayShape(['status' => "int", 'data' => "\string[][]", 'action' => "string"])] function getEmployees(): array
    {
        return [
            'status' => 200,
            'data' => $this->employees,
            'action' => 'Get list of employee'
        ];
    }


    /**
     * @param $id -> employee ID
     * @return array
     * @description Will Return a specific employee
     */
    #[ArrayShape(['status' => "int", 'data' => "null|string[]", 'action' => "string"])] function getEmployeeById($id): array
    {
        return [
            'status' => 200,
            'data' => $this->employees[$id] ?? null,
            'action' => 'Get specific employee'
        ];
    }


}
