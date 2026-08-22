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
	fmt.Println("--------------------------------------")

	// when we know that how many rows and columns we have
	numsArr := [4]int{10, 20, 30, 40}
	fmt.Println(numsArr)
	fmt.Println("--------------------------------------")

	// 2d array -> when we know that how many rows and columns we have
	nums2dArry := [2][3]int{{1, 2, 3}, {2, 3}}
	fmt.Println(nums2dArry)
	fmt.Println("--------------------------------------")

	/*
		array use:
		- when we know the length of the array
		- memory will be optimized
		- contant time access -> we know the index of the array in advance
	*/

	// slices -> when we don't know the length of the array

	// uninitialized slice is nil [like other languages knows as "null" we call in here as "nil"]
	var sliceArr []int
	fmt.Println(sliceArr)        // result: []
	fmt.Println(sliceArr == nil) // result: true
	fmt.Println(len(sliceArr))   // result: 0
	fmt.Println("--------------------------------------")

	// initialized slice
	// var arrayname = make([]type, length/ initial size, capacity)
	var initArray = make([]int, 5) // length = 5, capacity = 10, now the capacity is optional. So if we don't pass the capacity, it will be take the length as the capacity by default.
	fmt.Println(initArray)         // result: [0 0 0 0 0]
	fmt.Println(len(initArray))    // result: 5 -> length of the array
	fmt.Println(cap(initArray))    // result: 5 -> capacity -> maximum numbers of element can hold in the array. but this is not fixed. This size dynamically changes

	// add element to this array:
	initArray = append(initArray, 10)
	fmt.Println(initArray) // result: [0 0 0 0 0 10]
	initArray = append(initArray, 11)
	fmt.Println(initArray) // result: [0 0 0 0 0 10 11]

	// capacity in slice
	var initArray_2 = make([]int, 2)
	fmt.Println(initArray_2) // result: [0 0] -> here the initial capacity is 2 so array add 2 zero elements in the array then if we append any element to the array, it will added next the second zero element like below.
	fmt.Println("Initial capacity:", cap(initArray_2))
	initArray_2 = append(initArray_2, 8)
	fmt.Println(initArray_2)                            // result: [0 0 8]
	fmt.Println("Extended capacity:", cap(initArray_2)) // result: 4 -> because we added 1 elements now, but the capacity automatically increased double of the initial capacity.
	fmt.Println("--------------------------------------")

	// we want to start adding elements from the beginning of the array with slice
	var sliceArray = make([]int, 0, 5)
	sliceArray = append(sliceArray, 01)
	sliceArray = append(sliceArray, 02)
	fmt.Println(sliceArray)      // result: [1 2]
	fmt.Println(cap(sliceArray)) // result: 2, but if we add capacity 5, then it will print 5. And if we add another 4 elements to the array, then it will print 10
	fmt.Println("--------------------------------------")

	// put element in specific index
	var arrayElementAsIndex = []int{1, 2, 3, 4, 5}
	arrayElementAsIndex[2] = 10
	fmt.Println("Element 10 added at index 2: ", arrayElementAsIndex) // result: [1 2 10 4 5]
	fmt.Println("--------------------------------------")

	// Another way to use slice
	var anotherArray = []int{}
	fmt.Println(anotherArray) // result: []
	anotherArray = append(anotherArray, 10)
	fmt.Println(anotherArray) // result: [10]
	anotherArray = append(anotherArray, 11, 12, 13)
	fmt.Println(anotherArray) // result: [10, 11, 12, 13]
	fmt.Println("--------------------------------------")

	// slice copy **** not clear ****
	var anotherArray2 = make([]int, len(arrayElementAsIndex))
	copy(anotherArray2, anotherArray)
	fmt.Println(anotherArray2)

	// slice Operator -> ( : ) this clone sign known as slice operator
	var slcOprtor = []int{1, 2, 3, 4, 5}
	// syntax: [start index:end index]
	fmt.Println(slcOprtor[1:4]) // result: [2 3 4]

}

// go build filename.go -> this will create an executable
// go run filename.go -> this will run the program

// go fmt filename.go -> this will format the code
// go vet filename.go -> this will check the code
