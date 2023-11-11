import { watchEffect } from 'vue';

const piniaConfig = (pinia: any) => {
    const savedState = localStorage.getItem('one-tool');
    if (savedState) {
        pinia.state.value = JSON.parse(savedState);
    }
    watchEffect(() => {
        localStorage.setItem('one-tool', JSON.stringify(pinia.state.value));
    });
}

export default piniaConfig 