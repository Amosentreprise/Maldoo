<template>
  <div class="h-screen w-full relative">
    <div class="h-screen w-full overflow-hidden">
      <img :src="welcomeImage" :alt="alt" class="w-full object-cover" />
    </div>
    <div>
      <div
        class="w-[400px] h-[400px] bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="flex flex-col">
          <div class="mx-auto">
            <img :src="logo" :alt="logoName" />
          </div>
          <div class="mx-auto">
            <h1 class="font-medium text-2xl">{{ titre }}</h1>
            <p class="my-2">{{ texte }}</p>
          </div>
          <div class="mx-auto flex">
            <button v-for="button in buttons" :key="button.id" @click="changePage(button.id)" class="flex flex-col p-1 items-center ring-2 ring-primary hover:bg-primary hover:ring-none hover:text-white mr-5">
              <span><img :src="button.icone" :alt="button.btnName" class="w-10 h-10 "/></span
              ><span>{{ button.btnName }}</span>
            </button>
          </div>
          <div class="mx-auto mt-3">
            <span class="cursor-pointer text-xl" @click="visitHomePage">{{ btnvisitepage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import welcome from "../assets/welcome.jpg";
import delivery from "../assets/delivery.png";
import food from "../assets/food.png";
import logo from "../assets/mongodb.png";
export default {
  name: "Welcome",

  data() {
    return {
      welcomeImage: welcome,
      alt: "Welcome image",
      logo: logo,
      logoName: "LOgo",
      titre: "Êtes-vous majeur ?",
      texte: "Vous devez avoir 18 ans ou plus",
      buttons: [
        {
          id: 0,
          btnName: "Mangez",
          icone: food,
        },
        {
          id: 1,
          btnName: "Boire",
          icone: delivery,
        },
        ],
      btnvisitepage:"Visiter la page ?"
    };
  },

  mounted() {
    
  },

  methods: {
    visitHomePage() {
      this.$router.push("/acceuil");
      this.$store.commit("setCurrentComponent", "Home");
      
    },
    changePage(id) {
      if (id == 0) {
        this.$router.push("/acceuil");
        this.$store.commit("setCurrentComponent", "Mdrive");
        
      } if (id == 1) {
        this.$router.push("/acceuil");
          this.$store.commit("setCurrentComponent", "Mfresh");
      }

    }
  },
};
</script>

<style lang="scss" scoped></style>
