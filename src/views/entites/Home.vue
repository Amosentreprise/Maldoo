<template>
  <div class="min-h-screen">
    <div v-for="image in images" :key="image.id">
      <SectionBienvenue
        :src="image.src"
        v-if="image.id === index"
        :text="image.text"
      />
    </div>

    <SectionMarque />
  </div>
</template>

<script>
import SectionBienvenue from "../../components/SectionBienvenue.vue";
import welcome from "../../assets/welcome.jpg";
import welcome2 from "../../assets/welcome2.jpg";
import welcome3 from "../../assets/welcome3.jpg";
import SectionMarque from "../../components/SectionMarque.vue";
export default {
  name: "Home",
  components: {
    SectionBienvenue,
    SectionMarque,
  },
  data() {
    return {
      index: 0,
      images: [
        {
          id: 0,
          src: welcome,
          text: "BIENVENU SUR CETTE PAGE",
        },
        {
          id: 1,
            src: welcome2,
            text: "Malldoo❤",
        },
        {
          id: 2,
            src: welcome3,
            text: "Merci 👌",
        },
      ],
    };
  },

  mounted() {
    setInterval(this.nextChild, 3000);
  },

  methods: {
    nextChild() {
      if (this.index === this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
  },
};
</script>

<style scoped></style>
