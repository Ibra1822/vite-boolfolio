<script>
import axios from "axios";
import { store } from "../data/store";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "projects",
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
      });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
<template>
  <ProjectCard
    v-for="project in store.projects"
    :key="project.id"
    :project="project"
  />
</template>

<style lang="scss" scoped></style>
