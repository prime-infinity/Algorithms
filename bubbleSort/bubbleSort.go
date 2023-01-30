package main

import "fmt"

func swapValues(list []int, fwd int, flw int) {
	list[fwd], list[flw] = list[flw], list[fwd]
}

func main() {
	list := []int{5, 2, 7, 4, 1, 6, 3, 0}

	for i := 1; i < len(list); i++ {
		for j := 0; j < len(list)-1; j++ {
			if list[i] < list[j] {
				swapValues(list, i, j)
			}
		}
	}
	fmt.Print(list)
}
