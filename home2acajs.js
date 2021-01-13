// first

function foo(a, b, num) {
    let arr = []

    for (var i = a; i <= b; i += (b - a) / (num - 1)) {
        arr.push(i)
    }
    return arr
}

console.log(foo(10, 100, 5))


// second

function foo(arr) {
    let arr1 = arr.map((val) => val)
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
        }
    }
    let secBig = arr[arr.length - 2]
    return arr1.indexOf(secBig)
}

console.log(foo([-60, 44, 2, 43, -18, 5, -19, 36, 7, 56]))



// third

function foo(arr, padAm, rep) {
    if (padAm > arr.length) {
        return 'Invalid padding amount'
    }

    let firstPart = arr.slice(0, padAm).join('').repeat(rep).split('').concat(arr)
    let secondPart = firstPart.concat(arr.slice(arr.length - padAm, arr.length).join('').repeat(rep).split(''))


    return secondPart.map((val) => +val)
}

console.log(foo([1, 2, 3, 4], 2, 2))



// forth


function foo(arr, num) {
    if (arr.filter((val) => val > num).length > 0) {
        return arr.filter((val) => val > num)
    } else {
        return 'Such values do not exist.'
    };
}

console.log(foo([10, 16, -5, 30, 15, 24], 16))


// fivth


function foo(a, b) {
    let arr = []
    let count = 0
    for (i = a; i <= b; i++) {
        i.toString().split('').forEach((val) => {
            if (val % 2 == 0) {
                count++
            }
        })
        if (count == b.toString().length) {
            arr.push(i)
        }
        count = 0
    }

    if (arr.length > 0) {
        return arr
    } else {
        return "Such numbers does not exist."
    }

}

console.log(foo(21, 50))