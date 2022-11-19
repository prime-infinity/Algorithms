list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
find = 4


def linear_search(list, target):
    for n in list:
        if n == target:
            print(f'target {target} found at index pos { list.index(target) }')
            return True

    return False


print(linear_search(list, find))
