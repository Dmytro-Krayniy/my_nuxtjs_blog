<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  head () {
    return {
      link: [
        { rel: "canonical", href: `http://localhost:3000${this.$route.path}`}
      ]
    }
  },
};
</script>

<style>

</style>
