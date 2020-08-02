<template>
  <div>
    <header class="header-main">
      <b-navbar toggleable="lg" fixed="top" type="light" variant="light">
        <b-navbar-brand href="#">VueApp</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-bind:to="{name: 'index'}">
               Home
            </b-nav-item>
            <b-nav-item v-bind:to="{name: 'about'}" >
              About
            </b-nav-item>
            <b-nav-item v-bind:to="{name: 'services'}" >
              Services
            </b-nav-item>
            <b-nav-item v-bind:to="{name:'blog'}" >
              Blog
            </b-nav-item>
            <b-nav-item v-bind:to="{name: 'contact'}" >
              Contact
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto pull-right" >
            <!--          <b-nav-form>-->
            <!--            <b-form-input size="sm" class="mr-sm-2" placeholder="關鍵字"></b-form-input>-->
            <!--            <b-button size="sm" class="my-2 my-sm-0">搜尋</b-button>-->
            <!--          </b-nav-form>-->
            <b-nav-item href="#" >Register</b-nav-item>
            <b-nav-item href="#" >Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>

<script>
export default {
name: "myHeader"
}
</script>

<style scoped>

</style>
