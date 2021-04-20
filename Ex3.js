const Ex3 = (s) => {
    let result = s.toLowerCase().split("")
    lowercaseIndex = []
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i)
        if ((charCode >= 97 && charCode <= 122) || (charCode >= 224 && charCode <= 253)){
            lowercaseIndex.push(i)
        }
    }

    for (const index of lowercaseIndex) {
        result[index] = result[index].toUpperCase()
    }

    return result.join("")
}

console.log(Ex3("công tY yêu qUý CỦA chúng tôi"))