package main

import "fmt"

func addNumbers(a int, b int) int {
	return a + b
}

func minusNumbers(a, b int) int {
	return a - b
}

// if our all variable data type are same then we can use this
func addNumbers2(a, b, c int) int {
	return a + b + c
}

// multiple return value with value data type
func addNumbers3() (string, string, int) {
	return "golang", "java", 2
}

// function as a argument
//fn func(a int) int -> this is a function, its type is a function which receives int and returns int
func processit(fn func(a int) int) {
	// now call the function from argument, which also expect a integer
	fn(1)
}

// function as a return
//fn func(a int) int -> this is a function, its type is a function which receives int and returns int
func processit2() func(a int) int {
	return func(a int) int {
		return 4
	}
}

func main() {
	result := addNumbers(10, 20)
	fmt.Println(result) // Result: 30
	minusresult := minusNumbers(20, 10)
	fmt.Println(minusresult) // Result: 10

	// get return values from a function
	rn_1, rn_2, rn_3 := addNumbers3()
	fmt.Println(rn_1, rn_2, rn_3) // Result: golang java 2

	// if we don't want to use all return values then we can use _ (underscore)
	rn_01, _, rn_03 := addNumbers3()
	fmt.Println(rn_01, rn_03) // Result: golang 2

	// we can call funtion as a argument
	// processit() function expect a function with a integer as argument
	firstClassCitizen := func(a int) int {
		return 2
	}
	processit(firstClassCitizen)

	// we can store a function in a variable which return a function
	secondClassCitizen := processit2()
	secondClassCitizen(6)

}
