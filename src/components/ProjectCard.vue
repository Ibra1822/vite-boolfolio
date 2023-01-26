<script>
export default {
  name: "ProjectCard",
  props: {
    projects: Array,
  },
};
</script>
<template>
  <div class="card">
    <div class="center">
      <h2>{{ projects.name }}</h2>
      <h2>{{ projects.client_name }}</h2>
      <p>{{ projects.summary }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #fff;
  width: calc(100% / 4);
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0px 0px 15px #fff;
  border-radius: 10px;
  h2 {
    text-shadow: 0px 0px 10px #fff;
  }
}
</style>
