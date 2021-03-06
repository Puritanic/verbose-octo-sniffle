// quick sort
// https://www.youtube.com/watch?v=3DV8GO9g7B4


// i, j   pivot


// pivot is the last


// i starts as first element index - 1 (so, before the first index!)

// j goes from first element inclusive, to the right,  until it finds a number less than the pivot, and when it does:

// increment i, then swap with j

// j continues until the element before the last one, that is the pivot

// now the correct place of the current pivot is the index of i + 1, we need to swap with the element that is in that position

// now the pivot is in its correct position!

//-------

// partition is moving elements less than the pivot to the left,
// and elements greater then the pivot to the right


function partition(array, first_index, last_index){ // O(n)
    var pivot_val = array[last_index];
    var i, j;
    console.log("pivot_val: " + pivot_val);
    i = first_index - 1;
    j = first_index;
    console.log("j: " + j);

    // from first to second to last
    for(j = first_index; j < last_index; j++){ // first_index upto last_index - 1

    //first_index.upto(last_index - 1) do |j|
        console.log('j: ' + j);
        if(array[j] <= pivot_val){
            i += 1;
            console.log('i should increment to ' + i);

            // swap
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            // here the first element, upto and including i are less than the pivot, and all elements after i upto and including j are greater than the pivot
        }
    }
    console.log('i: ---------- ' + i);

    // now put the pivot in the correct place,
    // it should go to the element after i,
    // since the first element, upto and including i are less than the pivot,
    // so swap whats after i with the pivot
    temp = array[i + 1];
    array[i + 1] = array[last_index];
    array[last_index] = temp;

    // now the pivot is in its correct position!

    // return the position of the current pivot
    return i + 1;
}



function quicksort(array, first_index, last_index){
    // make sure the first_index is less than the right_index, duh! (not values, but indexes!!!)
    if(first_index < last_index){
        var prev_pivot_index = partition(array, first_index, last_index)

console.log("prev_pivot_index " + prev_pivot_index);
        // quicksort the left side!
        quicksort(array, first_index, prev_pivot_index - 1);

        // quicksort the right side!
        quicksort(array, prev_pivot_index + 1, last_index);
    }
}



// usage:

array = [5,4,10,6,3,7,0,12,2,8,1,11,9];

quicksort(array, 0, 12);

console.log(array);


