list = [5, 2, 7, 4, 1, 6, 3, 0]

pointer = 0


def find_lowest(start, list):
    smallest = start
    for i in list[start:]:
        if i < smallest:
            smallest = i
    return smallest


def swap(lowest):
    to_swap = list[pointer]
    index_of_lowest = list.index(lowest)

    list[pointer] = lowest
    list[index_of_lowest] = to_swap


while pointer < len(list):
    swap(find_lowest(pointer, list))
    pointer += 1

print(list)
