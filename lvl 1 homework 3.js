// ex 1 -----------------------------------------


let number = 4211133
let number1 = 7791
let number2 = 5

function odd(num) {

    let digit = num % 10

    num = (num - digit) / 10

    if (digit % 2 === 0) {
        return false
    } else if (num === 0) {
        return true
    } else return odd(num)
}

console.log(odd(number))
console.log(odd(number1))
console.log(odd(number2))

// ex 2 -----------------------------------------

let array = [56, -9, 87, -23, 0, -105, 55, 1]
let array1 = [45, -9, 15, 5, 78]
let array2 = [-5, -9, -111, -1000, -7]

function minPos(arr, i = arr.length - 1, num = arr[i]) {

    let num1 = arr[arr.length - 1]

    if (num1 >= 0 && num >= 0) {
        if (num > num1) {
            num = num1
        }
    }
    if (num < 0) {
        num = arr[i - 1]
        i--
    }
    arr.pop()
    if (arr.length === 0)
        if (num === undefined) {
            return -1
        } else return num

    return minPos(arr, i, num)
}

console.log(minPos(array))
console.log(minPos(array1))
console.log(minPos(array2))

// ex 3 -----------------------------------------
let num = 0
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 10

function fib(n) {
    let result = [1, 1];

    function rec(i) {
        if (!result[i - 1]) {
            rec(i - 1)
        }
        result[i] = result[i - 1] + result[i - 2];
    }
    if (n > 2) {
        rec(n - 1)
    } else if (n === 0) {
        return [];
    } else if (n === 1) {
        return [1]
    }
    return result;
}

console.log(fib(num))
console.log(fib(num1))
console.log(fib(num2))
console.log(fib(num3))
console.log(fib(num4))


// ex 4 -----------------------------------------

let array = [1, [3, 4, [1, 2]], 10]
let array1 = [14, [1, [
    [
        [3, []]
    ], 1
], 0]]

function flat(arr) {
    newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            newArr = newArr.concat(flat(arr[i]))
        } else newArr.push(arr[i])
    }

    return newArr
}

console.log(flat(array))
console.log(flat(array1))


// ex 5 ------------------------------------- 

let number = 14
let number1 = 29
let number2 = 999999999

function sum(num) {
    let digit = num % 10
    num = (num - digit) / 10
    let result = digit + num

    if (result > 9) {
        return sum(result)
    } else return result
}

console.log(sum(number))
console.log(sum(number1))
console.log(sum(number2))