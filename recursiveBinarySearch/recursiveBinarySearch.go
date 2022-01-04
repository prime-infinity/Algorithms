package main

import (
	"fmt"
	"math"
)

func recursiveBinarySearch(list []int, target int) bool {
	if len(list) == 0 {
		return false
	} else {
		midPoint := math.Floor(float64(len(list)) / 2)
		if list[int(midPoint)] == target {
			return true
		} else {
			if list[int(midPoint)] < target {

				return recursiveBinarySearch(list[int(midPoint)+1:], target)

			} else {

				return recursiveBinarySearch(list[:int(midPoint)], target)
			}
		}
	}

}

func main() {

	list := []int{0, 1, 2, 3, 4, 5, 6, 7, 8}
	target := 5

	fmt.Println(recursiveBinarySearch(list, target))

}
