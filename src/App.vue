<template>
  <div id="app">
      <nav>
          <div class="container">
              <ul class="nav__left">

                  <!-- Navigation Links -->
                  <li><router-link to="/">Hem</router-link></li>
                  <li><router-link to="/admin">Admin</router-link></li>
                  <li><router-link to="/varukorg">Varukorg</router-link></li>

              </ul>
          </div>
      </nav>
      <div class="container">
          <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style
  src='../static/css/main.css'>
</style>
