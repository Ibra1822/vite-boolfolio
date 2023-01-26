<script>
import { store } from "./data/store";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios.get(store.api).then((result) => {
        store.projects = result.data.projects;
        console.log(store.projects);
      });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <h1>Projects</h1>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
