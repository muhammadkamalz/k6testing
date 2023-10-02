import http from 'k6/http'
import {check} from 'k6'


export default () => {

    const res = http.get('https://www.saucedemo.com/v1')
    check(res, {
    'Response code must be 200' : (rescheck) => rescheck.status === 200
}) 
}