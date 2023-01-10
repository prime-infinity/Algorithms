package main

import "fmt"

var pointer int = 0

func findLowest(start int, slice []int) int {
	lowest := slice[start]

	for _, v := range slice[start:] {
		if v < lowest {
			lowest = v
		}
	}
	return lowest
}

func swapValues(list []int,lowest int) {
	toSwap := list[pointer]
	indexOfLowest = list.
}

func main() {
	list := []int{5, 2, 7, 4, 1, 6, 3, 0}
	fmt.Println(findLowest(0, list))
	
}
