const Ex1 = (s) => {
    for (let i = 0; i < (s.length / 2 - 1); i++){
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }
    return true
}

console.log(Ex1("ABCXCBA"))