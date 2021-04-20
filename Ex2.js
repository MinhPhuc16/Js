const Ex2 = (s) => {
    newString = s
        .toLowerCase()
        .split(" ")
        .filter(value => value !== "")
        .map(value => value.charAt(0).toUpperCase() + value.slice(1))
        .reduce((result, value) => result + " " + value)
    return newString
}
console.log(Ex2("công tY   yêu qUý CỦA chúng tôi"))

