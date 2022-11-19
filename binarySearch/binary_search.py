import math

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

find = 8


def binary_search(list, target):
    first_index = 0
    last_index = len(list)-1

    while first_index <= last_index:
        mid_index = math.floor((first_index + last_index) / 2)
        print(mid_index)
        if list[mid_index] == target:
            print(f'target {target} found at pos {mid_index}')
            return True
        elif target > list[mid_index]:
            first_index = mid_index + 1
        elif target < list[mid_index]:
            last_index = mid_index - 1
    else:
        return False


print(binary_search(list, find))
