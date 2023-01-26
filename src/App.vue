<script>
import ProjectCard from "./components/ProjectCard.vue";
import { store } from "./data/store";
import axios from "axios";
export default {
  name: "App",
  components: {
    ProjectCard,
  },
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
  <div class="cont-cards">
    <ProjectCard
      v-for="project in store.projects"
      :key="project.id"
      :projects="project"
    />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
.cont-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 40px;
}
</style>
