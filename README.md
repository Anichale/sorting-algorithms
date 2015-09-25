# Sorting Algorithms

## bubble sort

Bubble sort works in a nature similar to its name, the lesser or lighter values will 'bubble' to the beginning of the array, and the heavier values will sink.
```
procedure bubbleSort( A : list )
do
    swapped = false
    for i < A.length - 1
        if A[i-1] > A[i]
        swap ( A[i-1] > A[i] )
        swapped = true
        end if
    end for
    while swapped == true
end procedure
```
This process is done by making a do while loop, where the condition will exit if the array is sorted. Then we  iterate over the array, and compare each element to the next one. If the element is lighter, then you swap their positions in the array, repeat until you hit the end of the array while always setting a conditional value to true. If you loop through the array, and the conditional value is never set, meaning there are no swaps, then you exit out of the array.


## merge sort

The process for this method takes two procedures, first splitting the array into smaller lists, then merging those lists back together, comparing the values of the two lists. Recursion is used to split the array into the smallest possible lists.
``` psuedocode
procedure mergeSort ( A : list )
    if A.length < 2
        return A

    middle = A.length / 2
    left = A.slice 0, middle
    right = A.slice middle, A.length

    return merge(mergeSort(left), mergeSort(right);
end procedure

procedure merge (left, right)
    result = []
    while left.length && right.length both exist
        if left[0] <= right[0]
            push left to result
        else
            push right to result
    end while

    while only left exists
        push left

    while only right exists
        push right

    return result
end procedure
```