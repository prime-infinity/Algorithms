import math

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
find = 11


def recursive_binary_search(list, target):
    if len(list) == 0:
        return False
    else:
        mid_point = math.floor(len(list)/2)
        if list[mid_point] == target:
            print(f'element {target} found')
            return True
        else:
            if target > list[mid_point]:
                print(
                    "target is greater that midpoint,greater half,from midpoint +1 to end")
                print(list[mid_point + 1:])
                recursive_binary_search(list[mid_point + 1:], target)
            elif target < list[mid_point]:
                print("target is less than midpoint, lesser half,from 0 to midpoint")
                print(list[0:mid_point])
                recursive_binary_search(list[0:mid_point], target)


print(recursive_binary_search(list, find))
