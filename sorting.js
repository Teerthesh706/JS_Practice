// BUBBLE SORT ALGORITHM

function bubbleSort(arr) {
    // Write your logic here
    let n = arr.length
    for(let i = 0 ; i < n-1 ; i++){
        for(let j = 0 ; j<n-1-i; j++ ){
            if(arr[j] >= arr[j+1]){
                let temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
     console.log(arr)
}
const arr1 = [2, 5, 6, 3, 4]
// bubbleSort(arr1)

// ____________________________________________________________

// SELECTION SORT ALGORITHM

function selectionSort(arr) {
    // Write your logic here
    let n = arr.length
    for(let i = 0 ; i < n-1 ; i++){
        let min = i
        for(let j = i+1 ; j<n; j++ ){
            if(arr[j]<arr[min]) min = j
        }
            if(min!=i){
                let temp = arr[min]
                arr[min] = arr[i]
                arr[i] = temp
            }
    }
     console.log(arr)
}
const arr2 = [2, 5, 6, 3, 4]
// selectionSort(arr2)

// ____________________________________________________________

// INSERTION SORT ALGORITHM

function insertionSort(arr){
    let n = arr.length
    for(let i = 1 ; i < n ; i++){
        let key = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1]=key
    }
    console.log(arr)
}

let arr3 = [1,5,8,10,5,7]
// insertionSort(arr3)

// ____________________________________________________________

