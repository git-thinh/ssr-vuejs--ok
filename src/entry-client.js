import { createApp } from './main'

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mount('#app');

    //const v = app.mount();
    //document.querySelector('body').appendChild(v.$el);
    //console.log(v);

})
