import { App, createApp } from 'vue'
import AppVue from '@/App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import store from './store/vuex'
import { message,notification } from 'ant-design-vue';
import MdEditor from 'md-editor-v3';
import "@/styles/reset.scss";
import './app.less'
import 'md-editor-v3/lib/style.css';
import 'ant-design-vue/es/message/style'
import 'ant-design-vue/es/notification/style'
// import Vue3ColorPicker from "vue3-colorpicker";
// import "vue3-colorpicker/style.css";


let theme = localStorage.getItem('theme')
if (!theme) {
    theme = 'default'
}
window.document.documentElement.setAttribute('data-theme', theme)
const app: App<Element> = createApp(AppVue)
console.log('app===',app)
app.use(router)
app.use(createPinia())
app.component('md-editor', MdEditor)
// app.use(Vue3ColorPicker)
// app.use(store)
app.config.globalProperties.$message = message
app.config.globalProperties.$notification = notification
app.provide('$message', message)
app.provide('$notification', notification)
app.mount('#app')




