import store from '@/store'
import axios from 'axios'
store.subscribe((mutation) =>{
    console.log(mutation.type)
    switch (mutation.type){
        case 'auth/SET_TOKEN':
            console.log(mutation.payload)
            if(mutation.payload){
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token', mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            console.log(mutation.payload)
            break;
    }
})