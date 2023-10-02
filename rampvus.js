import http from 'k6/http'
import {check} from 'k6'

export const options = {
    thresholds : {
        http_req_duration : ['avg<300', 'p(90)<250'],
        http_req_failed :['rate>0.5']
    },
    stages: [
        {duration: '20s', target: 50},
        {duration: '15s', target: 35},
        {duration: '40s', target: 40},
        {duration: '10s', target: 100}
    ],
    rps : 500,
    batch : 50
}

export default () => {

    http.get('https:www.saucedemo.com/v1')

}