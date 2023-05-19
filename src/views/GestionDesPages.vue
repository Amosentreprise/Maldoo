<template>
  <div class="min-h-screen w-full">
    <div>
      <Nav />
    </div>
    <div>
      <component :is="currentComponent"></component>
    </div>
    <div class="w-full">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Home from "../views/entites/Home.vue";
import Mdrive from "../components/Mdrive.vue";
import Mfresh from "../components/Mfresh.vue"
import Footer from "../components/Footer.vue";
export default {
  name: "GestionDesPages",
  components: {
    Nav,
    Footer,
    Home,
    Mdrive,
    Mfresh
  },

  data() {
    return {};
  },
  computed: {
    currentComponent() {
      
      return this.$store.state.currentComponent;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
