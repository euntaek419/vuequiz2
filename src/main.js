import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import First from '@/components/First.vue'
import Second from '@/components/Second.vue'
import Sub from '@/components/Sub.vue'
import Sub2 from '@/components/Sub2.vue'

const store = createStore({
	state(){
		return{
			pageName: [''],
		}
	},
	getters: {
		getPageName(state){
			return state.pageName[0];
		}
	},
	mutations: {
		setPageName(state, payload) { //state = '', payload = 'First' 도착
			state.pageName.unshift(payload) //state = 'First'
			console.log(state.pageName)
		},
		closePageName(state) {
			state.pageName.shift();
			console.log(state.pageName)
		}
	},
	actions: {
		setPageName(context, payload) {
			context.commit('setPageName', payload);
		},
		closePageName(context) {
			context.commit('closePageName');
		}
	}
})

const app = createApp(App);

app.component('First', First);
app.component('Second', Second);
app.component('Sub', Sub);
app.component('Sub2', Sub2);

app.use(store);
app.mount("#app")