package main

import (
	"fmt"
)

func main() {
	var array_01 = []int{1, 2, 3, 4, 5, 6}
	fmt.Println(array_01)
	fmt.Println(array_01[1:3]) // [1:2] start from index 1 to index 3
	// result will be [2,3]

	fmt.Println(array_01[:3]) // [:3] start from index 0 because we did not maintain the start index to index 3
	// result will be [1,2,3]

	fmt.Println(array_01[2:]) // [1:] start from index 2 to end, because we have start from index but did not maintain the end/to index
	// result will be [3,4,5,6]
}
