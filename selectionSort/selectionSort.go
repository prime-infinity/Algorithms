package main

import (
	"fmt"
	"sort"
)

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

func swapValues(list []int, lowest int) {
	toSwap := list[pointer]
	indexOfLowest := sort.Search(len(list), func(i int) bool { return list[i] == lowest })

	list[pointer] = lowest
	list[indexOfLowest] = toSwap
}

func main() {
	list := []int{5, 2, 7, 4, 1, 6, 3, 0}

	for pointer < len(list) {
		swapValues(list, findLowest(pointer, list))
		pointer++
	}

	fmt.Println(list)

}
