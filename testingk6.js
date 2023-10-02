//cara export
// import bambang from ('bambang')
// import {bambang} from ('bambangg')
//similiar to
// consst inven = require('../pageobjects/halamaninventory)

//similiar to module.exports = inventory
import http from 'k6/http'

export const options = {
    iterations : 20,
    
    vus: 2,
    
    // duration : '10s'

    //pilih antara iterations atau duration
}

export default () => {
    const res = http.get('https://dummyjson.com/todos/1')
    // console.log(res.json())
    // console.log(res.status)
    // console.log(res.body)
    // console.log(res.headers)
    // console.log(res.timings)


}