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
```
If the list is 0 or 1 length, then its already sorted and we can return the array. Else, we have to find the mid point of the aray, then split it into a left and right array. Our second piece of logic takes in a left and right array, which returns a merged array. If both left and right arrays have a length, then we compare the first value of both, and push the lower value to the return array. Our first procedure utilizes recursion to get the smallest available arrays.

## insertion sort
For each iteration in our insertion sort method, a single element is taken to find its location in a new sorted list. This pattern repeats until the old array has no elements left.

```
for i = 1 to A.length - 1
    j = i
    while j > 0 and A[j-1] > A[j]
        swap A[j-1] and A[j]
        j = j - 1
```

First, we have to iterate over our array, then we set a variable to our position in the array, j. While j has a length, we compare our values between our position and the next position in the array. If the next position is bigger, then we swap the two, and decrement j by 1;