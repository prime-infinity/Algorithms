package main

import "fmt"

func recursiveBinarySearch(list []int, target int) bool {
	if len(list) == 0 {
		return false
	}
}

func main() {

	list := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 4

	fmt.Println(recursiveBinarySearch(list, target))

}
