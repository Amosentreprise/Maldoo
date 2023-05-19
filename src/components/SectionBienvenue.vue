<template>
  <div class="h-screen w-full relative">
    <div class="h-screen w-full opacity-75 overflow-hidden">
      <img :src="src" alt="" class="w-full  object-cover" />
    </div>
    <div class="h-full flex items-start absolute top-0 bottom-0 right-0 left-0 ">
        <h1 class="mt-20 ml-20 w-80 font-medium text-primary bg-secondary">
          <span
            v-for="(letter, index) in text"
            :key="index"
            :class="`letter-${index}`"
            class="text-5xl mt-8 ml-2"
            >{{ letter }}</span
          >
        </h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "SectionBienvenue",
  props:["src","text"],

  data() {
    return {
    
    };
  },

  mounted() {
    this.animateText();
  },

  methods: {
    animateText() {
      const letters = this.text.split("");

      letters.forEach((letter, index) => {
        setTimeout(() => {
          const className = `.letter-${index}`;
          const element = this.$el.querySelector(className);
          element.classList.add("animate"); // Ajoutez une classe CSS pour animer la lettre
        }, 200 * index); // Délai d'animation pour chaque lettre (ajustez selon vos besoins)
      });
    },
  },
};
</script>

<style scoped>
.animate {
  /* Ajoutez les styles d'animation souhaités */
  animation: fade-in 0.5s ease-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
