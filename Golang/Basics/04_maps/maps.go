package main

import (
	"fmt"
	"maps"
)

func main() {
	fmt.Println("maps in golang")
	// create map
	m := make(map[string]string)

	// setting element
	m["key1"] = "value1"
	m["key2"] = "value2"
	m["key3"] = "value3"

	// get element
	fmt.Println(m["key1"])
	fmt.Println(m["key2"])
	fmt.Println(m["key3"])
	// Result: value1 value2 value3

	fmt.Println(m["name"]) // if key value does not exist, it will return empty string
	// Result: ""
	// if key type is int, it will return 0
	// if key type is bool, it will return false
	// Example
	m2 := make(map[int]int)
	m2[1] = 10
	m2[2] = 12
	fmt.Println(m2[1])
	fmt.Println(m2[2])
	// Result: 10 12
	fmt.Println(m2[3]) // if key value does not exist, it will return 0 beause key value type is "int"
	// Result: 0

	// get map length
	fmt.Println(len(m2))
	// Result: 2

	// delete element -> syntax -> detele(mapname, keyname)
	delete(m, "key2")
	fmt.Println(m)

	// clear full map
	clear(m)
	fmt.Println(m)
	// Result: map[]

	// map without make function
	m1 := map[string]int{"price": 40, "phone": 2, "tv": 3}
	m3 := map[string]int{"price": 40, "phone": 2, "tv": 3}
	fmt.Println(m3)
	// Result: map[phone:2 price:40 tv:3]

	fmt.Println(maps.Equal(m1, m3))
	// Result: true
}
