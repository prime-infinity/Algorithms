package main

import (
	"fmt"
	"math"
)

func binarySearch(list []int, target int) bool {

	var firstElement float64 = 0
	var lastElement float64 = float64(len(list) - 1)

	for firstElement <= lastElement {
		midPoint := math.Floor((firstElement + lastElement) / 2)

		if list[int(midPoint)] == target {
			fmt.Println("the index position of target ", target, "is: ", midPoint)
			return true
		} else if list[int(midPoint)] < target {
			firstElement = midPoint + 1
		} else if list[int(midPoint)] > target {
			lastElement = midPoint - 1
		}
	}
	return false

}

func main() {

	list := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 6

	fmt.Println(binarySearch(list, target))

}
