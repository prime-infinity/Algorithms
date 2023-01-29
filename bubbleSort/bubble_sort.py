list = [5, 2, 7, 4, 1, 6, 3, 0]


def swap_values(fwd, flw):
    [list[fwd], list[flw]] = [list[flw], list[fwd]]


for i in range(1, len(list)):
    for j in range(0, len(list)-1):
        if list[i] < list[j]:
            swap_values(i, j)

print(list)
