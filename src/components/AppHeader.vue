<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'projects' }">Projects</router-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: lightslategrey;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    li {
      font-size: 1.3rem;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #fff;
        padding: 10px 20px;
        border: 1px solid transparent;
        &:hover,
        &.router-link-exact-active {
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>
