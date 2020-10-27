<template>
    <div id="app">
        <q-table-test />
    </div>
</template>

<script>
import QTableTest from './components/QTableTest/index.vue';

export default {
    name: 'App',
    components: {
        QTableTest
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
