import axios from 'axios'
async function getMovieList(year) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
    const res = async() =>
    {
        const data = await axios(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
        return data.json
    }
    console.log(res())
}

getMovieList(1996)