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
			temp: '',
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
			console.log(payload)
			if(payload != 'Sub')
			state.temp = payload;
			console.log('temp', state.temp)
		}
	},
	actions: {
		setPageName(context, payload) {
			context.commit('setPageName', payload);
		}
	}
})

const app = createApp(App);

app.component('First', First);
app.component('Second', Second);
app.component('Sub', Sub);

app.use(store);
app.mount("#app")