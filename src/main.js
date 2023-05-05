import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/Ui/BaseButton.vue'
import BaseCard from './components/Ui/BaseCard.vue'
import BaseDialog from './components/Ui/BaseDialog'
const app=createApp(App);
app.mount('#app');
app.component('base-card', BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);

