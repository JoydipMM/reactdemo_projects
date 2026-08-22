package main

import (
	"fmt"
)

func main() {
	fmt.Println("Range")

	// let create a int slice
	nums := []int{12, 34, 45, 56}

	// iterate slice using for loop
	for i := 0; i < len(nums); i++ {
		fmt.Println("items of slice:", nums[i])
	}

	// iterate slice using range
	//  _ = index
	for _, num := range nums {
		fmt.Println("Range item: ", num)
	}
	/*
		Result:
		Range item:  12
		Range item:  34
		Range item:  45
		Range item:  56
	*/

	// sum of slice items using range
	totalSum := 0
	for index, num := range nums {
		fmt.Println("Item Index is: ", index)
		totalSum = totalSum + num
	}
	fmt.Println(totalSum)
	/*
		Result:
		Item Index is:  0
		Item Index is:  1
		Item Index is:  2
		Item Index is:  3
		147
	*/

	// Iterate map items using range

	// 01 - Create a map
	map_1 := map[string]string{
		"fname": "John",
		"lname": "Doe",
		"age":   "30",
	}

	// iterate map using range
	for key, value := range map_1 {
		fmt.Println("Key:", key, "| Value:", value)
	}
	/*
		Result:
		Key: age | Value: 30
		Key: fname | Value: John
		Key: lname | Value: Doe
	*/

	// print only map key list using range
	for key := range map_1 {
		fmt.Println("Key:", key)
	}
	/*
		Result:
		Key: lname
		Key: age
		Key: fname
	*/

	// Print only value list using range
	for _, value := range map_1 {
		fmt.Println("Value:", value)
	}
	/*
		Result:
		Value: Doe
		Value: 30
		Value: John
	*/

	// Iterate string value using range
	var title string = "Hello World"
	for i, textItem := range title {
		fmt.Println(i, textItem)         // textItem -> will give rune value
		fmt.Println(i, string(textItem)) // now textItem -> will give string value
	}
	/*
		Result:
		0 72
		1 101
		2 108
		3 108
		4 111
		5 32
		6 87
		7 111
		8 114
		9 108
		10 100
		// This will happen, when we iterate string value using range
		0 72 -> 0 is "starting byte of rune" and 72 is ascii value/unicode of the letter. This also known as "unicode point rune"
	*/
}
