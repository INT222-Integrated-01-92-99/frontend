import axios from 'axios'
export default ({
    namespaced: true,
    state: {
        token: null,
        user: null, //จะเก็บข้อมูลอะไรก็ใส่ไป
    },
    getters:{ //ถ้าอยากนำข้อมูลuserมาshowดูคลิปนี้ https://www.youtube.com/watch?v=H9oODcFslyA&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY&index=7 ตอนนาทีที่ 1:31 ดูให้จบคลิปนะน้อน
        authenticated(state){
            return state.token && state.user
        },
        user(state){
            return state.user
        },
    },

    mutations: {
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
              let response = await axios.post('http://localhost:3000/main/login', credentials)
              console.log(response.data)

              return dispatch('attempt', response.data.token)
    },

        async attempt ({ commit, state }, token){
            console.log(token);
            if(token){
                commit('SET_TOKEN', token)
            }
            if(!state.token){ //token is empty
                return
            }

            try {
                let response = await axios.get('http://localhost:3000/allroles/me')
                commit('SET_USER', response.data)
                console.log(state.user)
            } catch(e){
               commit('SET_TOKEN', null)
               commit('SET_USER', null)
            }
        },
        signOut({ commit }){
            // return axios.post('path sign out (khongkhao= auth/signout)').then(() =>{
                commit('SET_TOKEN', null)
                commit('SET_USER', null)

            // })
           
        }
}
})
//https://www.youtube.com/watch?v=1YGWP-mj6nQ&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY&index=6