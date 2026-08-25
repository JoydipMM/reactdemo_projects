package main

import (
	"fmt"
	"time"
)

var age int // we define data type here if we don't want to assign any value

func main() {

	var name string = "John"
	age = 10
	lastName := "Doe"

	fmt.Println("Hello World", name, lastName, age)
	fmt.Println("--------------------------------------")

	fmt.Println("Hello World", name)
	fmt.Println("--------------------------------------")

	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}
	fmt.Println("--------------------------------------")

	for j := range 3 {
		fmt.Println(j)
	}
	fmt.Println("--------------------------------------")

	if age > 18 {
		fmt.Println("You are an adult")
	} else {
		fmt.Println("You are not an adult")
	}
	fmt.Println("--------------------------------------")

	if age >= 18 {
		fmt.Println("You are an adult")
	} else if age >= 12 {
		fmt.Println("You are not an Teen")
	} else {
		fmt.Println("You are a kid")
	}
	fmt.Println("--------------------------------------")

	var data01 int = 10
	var bool01 bool = true

	if data01 == 10 && bool01 {
		fmt.Println("You are a good person")
	}

	if data01 == 20 || bool01 {
		fmt.Println("You are a good person")
	}
	fmt.Println("--------------------------------------")

	// we can define variables in one line
	/*
		var (
			data02 int = 10
			bool02 bool = true
		)
	*/

	// we can declare variables inside if contructor
	if dt := 35; dt >= 18 {
		fmt.Println("You are an adult", dt)
	} else if dt >= 12 {
		fmt.Println("You are not an Teen", dt)
	} else {
		fmt.Println("You are a kid", dt)
	}
	fmt.Println("--------------------------------------")

	// **** go dose not support ternary operator
	// if condition ? true : false

	// switch statement
	x := 25
	switch x {
	case 10:
		fmt.Println("You are 10 years old")
		// no need to add break statement
		// break
	case 20:
		fmt.Println("You are 20 years old")
	case 30:
		fmt.Println("You are 30 years old")
	default:
		fmt.Println("You are not 10, 20 or 30 years old")
	}
	fmt.Println("--------------------------------------")

	// multiple condition switch
	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("It's the weekend")
	default:
		fmt.Println("It's a weekday")
	}
	fmt.Println("--------------------------------------")

	// type switch
	// one function pass to another function

	iam := func(i interface{}) {
		// interface{} = any

		// i.(type) => this will return the type of i
		switch t := i.(type) {
		case int:
			fmt.Println(t, "You are an int")
		case string:
			fmt.Println(t, "You are a string")
		default:
			fmt.Println(t, "You are not an int or string")
		}
	}

	iam("John")
	iam(10)
	iam(true)
	fmt.Println("--------------------------------------")

	var arr01 [4]int
	arr01[0] = 10
	arr01[1] = 20
	fmt.Println(arr01)
	fmt.Println("--------------------------------------")

	var arr02 [4]string
	arr02[0] = "a"
	arr02[1] = "b"
	fmt.Println(arr02)
	// result: [a b  ]
	fmt.Println("--------------------------------------")

	numsArr := [4]int{10, 20, 30, 40}
	fmt.Println(numsArr)
	fmt.Println("--------------------------------------")
}
