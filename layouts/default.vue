<template>
  <div>
    <Navbar />
    <Slider />

    <Nuxt />
    
    <Footer />
  </div>
</template>


<script>
import Navbar from "~/components/navbar";
import Slider from "~/components/slider";
import Footer from "~/components/footer";

export default {
  components: {
    Navbar,
    Slider,
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
