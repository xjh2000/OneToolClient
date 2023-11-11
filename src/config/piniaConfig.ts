import { watch } from 'vue';

const piniaConfig = (pinia: any) => {
    const savedState = localStorage.getItem('one-tool');
    if (savedState) {
        pinia.state.value = JSON.parse(savedState);
    }
    watch(pinia.state, (newState) => {
        localStorage.setItem('one-tool', JSON.stringify(newState));
    }, { deep: true });
}

export default piniaConfig 