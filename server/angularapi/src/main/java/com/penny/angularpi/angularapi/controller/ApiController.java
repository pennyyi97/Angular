package com.penny.angularpi.angularapi.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penny.angularpi.angularapi.model.*;

@CrossOrigin()
@RestController
@RequestMapping({"/employees"})
public class ApiController {
	
	private List<Employee> employees = createList();
	

	@GetMapping(produces = "application/json")
	public List<Employee> firstPage() {
		return employees;
	}
	
	@GetMapping(produces = "application/json")
	@RequestMapping({"/validateLogin" })
	public User validateLogin() {
		System.out.println("사용자 인증");
		return new User("사용자 인증 완료 ");
	}
	
	
	@DeleteMapping(path= { "/{id}" })
	public Employee delete(@PathVariable("id") String id) {
		Employee deletedEmp = null;
		for (Employee emp : employees) {
			if(emp.getEmpId().equals(id)) {
				employees.remove(emp);
				deletedEmp = emp;
				break;
			}
		}
		return deletedEmp;
	}
	
	@PostMapping
	public Employee create(@RequestBody Employee user) {
		employees.add(user);
		System.out.println(employees);
		return user;
	}
	
	private static List<Employee> createList(){
		List<Employee> tempEmployees = new ArrayList<>();
		
		Employee emp1 = new Employee();
		emp1.setName("emp1");
		emp1.setDesignation("manager");
		emp1.setEmpId("1");
		emp1.setSalary(3000);
		
		Employee emp2 = new Employee();
		emp2.setName("emp2");
		emp2.setDesignation("developer");
		emp2.setEmpId("2");
		emp2.setSalary(3000);
		
		tempEmployees.add(emp1);
		tempEmployees.add(emp2);
		return tempEmployees;
		
	}

}