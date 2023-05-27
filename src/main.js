import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import First from '@/components/First.vue'
import Second from '@/components/Second.vue'
import Sub from '@/components/Sub.vue'

const store = createStore({
	state(){
		return{
			pageName: '',
			num : 0,
		}
	},
	getters: {
		getPageName(state){
			return state.pageName;
		}
	},
	mutations: {
		setPageName(state, payload) {
			state.pageName = payload;
			
			if(payload == "First")
			state.num = 1

			if(payload == "Second")
			state.num = 2

			console.log(state.num)

		}
	},
	actions: {
		setPageName(context, payload) {
			context.commit('setPageName', payload);
			console.log('setPageName', payload)
		}
	}
})

const app = createApp(App);

app.component('First', First);
app.component('Second', Second);
app.component('Sub', Sub);

app.use(store);
app.mount("#app")