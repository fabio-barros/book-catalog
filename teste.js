function repeatedString(s, n) {
    // let noa = 0;
    // if (n >= s.length) {
    //     let ofa = s.match(/a/g).length;
    //     noa = Math.floor(n / s.length) * ofa;
    // }

    // return noa;
    if (!s.includes('a')) return 0
    if(s === 'a') return n
    let str = "";
    count = 0
    for(let i = 0; i < n; i++)
    {
        count += s.match(/a/g).length;
    }
    // let res = arr.join("").slice(0, n)
    // res = str.slice(0, n).match(/a/g).length;
    return count
}

const i = repeatedString("aba", 10);
console.log(i);
