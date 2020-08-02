<template>
  <div>
    <myHeader></myHeader>
    <Search></Search>
    <Heading></Heading>
    <router-view></router-view>
    <Features></Features>
    <myFooter></myFooter>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Search from "./search";
import Heading from "./heading";
import Features from "./features";

export default {
  name: "insidePage",
  components: {
    myHeader: Header,
    myFooter: Footer,
    Search,
    Heading,
    Features
  }
}
</script>

<style scoped>

</style>
