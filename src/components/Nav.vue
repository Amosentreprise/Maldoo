<template>
  <div class="bg-white w-full flex flex-col">
    <div class="p-3 bg-slate">
      <h1 class="text-center text-xl text-primary font-medium">
        {{ slogan }}
      </h1>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <img :src="logo" alt="logo" class="h-20 w-auto object-cover ml-6" />
      </div>
      <div class="flex pr-8">
        <div v-for="info in infos" :key="info.id" class="mr-6">
          <img src="" alt="" />
          <h3 class="text-gray-500">{{ info.titre }}</h3>
          <h4>{{ info.contenu }}</h4>
        </div>
      </div>
    </div>
    <div class="bg-primary p-2 mx-auto w-full">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden w-full md:flex md:justify-evenly md:w-auto"
        id="navbar-default"
      >
        <ul class="flex">
          <li v-for="icone in icones" :key="icone.id" class="mr-2">
            <a :href="icone.lien"
              ><img
                :src="icone.icone"
                alt="icone reseau"
                class="w-10 h-10 rounded-full object-cover"
            /></a>
          </li>
        </ul>
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 text-white items-center"
        >
          <li v-for="lien in liens" :key="lien.id">
            <span
              :class="{
                'bg-secondary p-2 rounded-md text-black':
                  lien.id === ActionName,
              }"
              @click="selectOption(lien.id)"
              class="cursor-pointer text-white font-medium"
              >{{ lien.nom }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/mongodb.png";
import linkedin from "../assets/home/linkedin.png";
import whatsapp from "../assets/home/whatsapp.png";
import { initFlowbite } from "flowbite";
export default {
  name: "Nav",

  data() {
    return {
      slogan: "Notre force reside dans le M",
      logo: logo,
      selectedOption: 0,
      infos: [
        {
          id: 0,
          icone: "",
          titre: "Avez vous une préoccupation ?",
          contenu: "+229 69878786",
        },
        {
          id: 1,
          icone: "",
          titre: "Notre Adresse",
          contenu: "Cotonou/ste Rita",
        },
      ],
      liens: [
        {
          id: 0,
          class: "",
          nom: "Accueil",
        },
        {
          id: 1,
          class: "lien",
          nom: "Mdrive",
        },
        {
          id: 2,
          classe: "lien",
          nom: "Mfresh",
        },
        {
          id: 3,
          classe: "lien",
          nom: "HelloGouter",
        },
        {
          id: 4,
          classe: "lien",
          nom: "Mcafe",
        },
      ],
      icones: [
        {
          id: 0,
          icone: linkedin,
          lien: "",
        },
        {
          id: 1,
          icone: whatsapp,
          lien: "",
        },
      ],
    };
  },

  mounted() {
    initFlowbite();
  },
  computed: {
     ActionName() {
      return this.$store.state.selectedOption;
    },
  },

  methods: {
    selectOption(id) {
      this.$store.commit("setselectedOption", id); 
      if (id == 0) {
        this.$router.push("/Home");
      }
      if (id == 1) {
        this.$router.push("/Mdrive");
      }
      if (id == 2) {
        this.$router.push("/Mfresh");
      }
      if (id == 3) {
        this.$router.push("/Hellogoute");
      }
      if (id == 4) {
        this.$router.push("/Mcafe");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
