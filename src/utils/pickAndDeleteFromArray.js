/**
 * returns the element from arrays given index and deletes it from
 * the array
 * @param array
 * @param index from where the element will be removed
 */
export default function pickAndDeleteFromArray(array, index) {
    let picked = array[index];

    array.splice(index, 1);

    return picked;
}

