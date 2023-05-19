<template>
  <div class="w-full h-auto p-8 bg-secondary">
    <h1 class="text-center text-3xl font-medium">{{ SectionName }}</h1>
    <ul class="flex justify-evenly mt-3">
      <li v-for="marque in marques" :key="marque.id"><img :src="marque.image" alt="nos marques" /></li>
    </ul>
  </div>
</template>

<script>
import marque from "../assets/mongodb.png"
export default {
  name: "VueMaldooProjectSectionMarque",

  data() {
      return {
    SectionName:"Nos marques",
      marques: [
        {
          id: 0,
          image: marque,
        },
        {
          id: 1,
          image: marque,
        },
        {
          id: 2,
          image: marque,
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
