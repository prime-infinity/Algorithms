package main

import "fmt"

func linearSearch(list []int, target int) bool {
	for index, value := range list {
		if target == value {
			fmt.Println("the index position of target ", value, "is: ", index)
			return true
		}
	}
	return false
}

func main() {

	list := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 4

	fmt.Println(linearSearch(list, target))

}
