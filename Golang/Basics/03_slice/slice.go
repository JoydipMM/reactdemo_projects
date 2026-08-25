package main

import (
	"fmt"
	"slices"
)

func main() {

	var arr_1 = []int{1, 2, 3}
	var arr_2 = []int{1, 2, 3}

	fmt.Println(slices.Equal(arr_1, arr_2))
	// Result: true

	// 2d slices
	var nums = [][]int{{1, 2, 3, 4}, {2, 4, 6}}
	fmt.Println(nums)
	// Result: [[1 2 3 4] [2 4 6]]
}
