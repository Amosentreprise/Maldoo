<template>
  <div class="w-full font-milky">
    <img
      :src="welcomeImage"
      :alt="alt"
      class="w-full min-h-screen object-cover relative"
    />
    <div class="absolute top-3 right-0 left-0 text-center leading-10">
      <!--Section 1-->
      <div class="h-auto xl:h-screen flex flex-col">
        <div class="mt-2 xl:mt-20">
          <h2 class="text-xl lg:text-3xl xl:text-3xl text-white">
            {{ titre }}
          </h2>
          <h1 class="text-3xl lg:text-5xl xl:text-6xl text-white">
            {{ grantitre }}
          </h1>
          <h3 class="text-xl text-white">
            VOTRE STARTUP RÉ<span class="text-secondary">FOOD</span>LUTIONNAIRE
          </h3>
        </div>
        <div class="my-auto md:my-11">
          <img
            :src="logo"
            alt="logo"
            class="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto"
          />
        </div>
      </div>
      <!--Section 2-->
      <div class="mt-20 md:mt-32">
        <h2 class="text-xl px-2 font-medium text-black py-10">
          {{ section2name }}
        </h2>
        <div class="flex flex-wrap justify-evenly">
          <div
            v-for="marque in marques"
            :key="marque.id"
            class="flex flex-col bg-white shadow-md rounded-xl hover:shadow-xl hover:cursor-pointer w-40 h-32 p-3 mt-3 mr-2"
            @click="visiteEntité(marque.id)"
          >
            <img :src="marque.icone" alt="icones" :class="marque.classIcone" />
            <hr class="border border-gray-400 mx-2" />
            <img :src="marque.logo" alt="logos" :class="marque.class" />
          </div>
        </div>
      </div>
      <!--Section 3-->
      <div class="flex flex-wrap justify-evenly mt-40 p-4">
        <div>
          <img
            :src="downloadapplogo"
            alt="app"
            class="h-[400px] w-[400px] object-cover"
          />
        </div>
        <div>
          <div>
            <h1 class="text-orange-400 text-2xl">{{ titleapp }}</h1>
            <h2 class="text-primary text-xl">
              {{ soustitleapp }}
            </h2>
            <div class="mt-5">
              <button v-for="button in buttons" :key="button.id">
                <img
                  :src="button.icone"
                  alt="telechargement"
                  class="w-32 mr-2"
                />
              </button>
            </div>
          </div>
          <div class="font-montsserat">
            <h2 class="flex items-center">
              <span class="pr-3">NOUS JOINDRE</span>
              <hr class="border border-black w-52" />
            </h2>
            <div class="flex flex-col">
              <div class="flex items-center p-2">
                <img
                  src="../assets/marquesIcone/send.png"
                  alt="telegram"
                  class="w-10 h-10 pr-2"
                /><span
                  ><span class="font-medium">partenaire@</span
                  >maldooafrica.bj</span
                >
              </div>
              <div class="flex items-center p-2">
                <img
                  src="../assets/marquesIcone/Whatmobile.png"
                  alt="whatsapp"
                  class="w-30 h-12 object-cover pr-2"
                /><span>+229 <span class="font-medium">68 89 89 89</span></span>
              </div>
              <div class="flex items-center p-2">
                <img
                  src="../assets/marquesIcone/website.png"
                  alt="website"
                  class="w-20 h-20 p-2"
                /><span class="font-medium">www.maldooafrica.bj</span>
              </div>
            </div>
          </div>
          <div class="font-montsserat">
            <h2 class="flex items-center">
              <span class="font-medium pr-5">NOUS SUIVRE</span>
              <hr class="border border-black w-52" />
            </h2>
            <div class="flex">
              <div v-for="reseau in reseaux" :key="reseau.id">
                <img
                  :src="reseau.icone"
                  alt="reseau sociaux"
                  class="w-10 h-10 p-2"
                />
              </div>
              <div>@maldooafrica</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import background from "../assets/welcome/background.jpg";
import logo from "../assets/welcome/m.png";
import maldoologo from "../assets/marquesIcone/maldoo.png";
import maldooicone from "../assets/marquesIcone/food.png";
import goutelogo from "../assets/marquesIcone/logo-hellogouter.png";
import gouteicone from "../assets/marquesIcone/breakfast.png";
import mfreshlogo from "../assets/marquesIcone/mfresh.png";
import mfreshicone from "../assets/marquesIcone/juice.png";
import mcafelogo from "../assets/marquesIcone/mcafe.png";
import mcafeicone from "../assets/marquesIcone/restaurant.png";
import mdrivelogo from "../assets/marquesIcone/mdrive.png";
import mdriveicone from "../assets/marquesIcone/delivery.png";
import phone from "../assets/marquesIcone/phone.png";
import playstore from "../assets/marquesIcone/playstore.png";
import facebook from "../assets/marquesIcone/facebook.png";
import insta from "../assets/marquesIcone/Insta.png";
import tweet from "../assets/marquesIcone/You.png";
import tictok from "../assets/marquesIcone/Tik.png";
import linkedin from "../assets/marquesIcone/in.png";
import malldoo from "../assets/marquesIcone/MallDoo.png";
import malldooIcone from "../assets/marquesIcone/noun-maketplace.png";

import downloadapplogo from "../assets/welcome/app.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Welcome",

  data() {
    return {
      welcomeImage: background,
      alt: "Welcome image",
      titre: "BIENVENUE À",
      grantitre: "MALDOO AFRICA",
      section2name: "QUE SOUHAITEZ-VOUS FAIRE AUJOURDHUI ?",
      logo: logo,
      marques: [
        {
          id: 0,
          icone: maldooicone,
          logo: maldoologo,
          class: "w-20 h-20 mx-auto py-1",
          classIcone:"mx-auto w-10 h-10"
        },
        {
          id: 1,
          icone: gouteicone,
          logo: goutelogo,
          class: "w-20 h-20 mx-auto py-1",
          classIcone:"mx-auto w-14 h-14"
        },
        {
          id: 2,
          icone: mfreshicone,
          logo: mfreshlogo,
          class: "w-20 h-20 mx-auto pb-5",
          classIcone:"mx-auto w-14 h-14"
        },
        {
          id: 3,
          icone: mcafeicone,
          logo: mcafelogo,
          class: "w-20 h-20 mx-auto pb-3",
          classIcone:"mx-auto w-10 h-10"
        },
        {
          id: 4,
          icone: mdriveicone,
          logo: mdrivelogo,
          class: "w-20 h-20 mx-auto py-1",
          classIcone:"mx-auto w-14 h-14"
        },
        {
          id: 5,
          icone: malldooIcone,
          logo: malldoo,
          class: "w-20 h-20 mx-auto py-1",
          classIcone:"mx-auto w-14 h-14"
        },
      ],
      downloadapplogo: downloadapplogo,
      titleapp: "Téléchargez malldoo",
      soustitleapp: "pour profitez de nos meilleures offres",
      buttons: [
        {
          id: 0,
          icone: phone,
          title: "App Store",
          soustitle: "Available on the",
        },
        {
          id: 1,
          icone: playstore,
          title: "Google Play",
          soustitle: "ANDROID APP ON",
        },
      ],
      reseaux: [
        {
          id: 0,
          icone: facebook,
        },
        {
          id: 1,
          icone: insta,
        },
        {
          id: 2,
          icone: tweet,
        },
        {
          id: 3,
          icone: tictok,
        },
        {
          id: 4,
          icone: linkedin,
        },
      ],
    };
  },

  mounted() {
     AOS.init();
  },

  methods: {
    visiteEntité(id) {
      this.$store.commit("setselectedOption", id);
      if (id == 0) {
        this.$router.push("/Home");
        
      }
      if (id == 1) {
        this.$router.push("/HelloGouter");
      }
      if (id == 2) {
        this.$router.push("/Mfresh");
      }
      if (id == 3) {
        this.$router.push("/Mcafe");
      }
      if (id == 4) {
        this.$router.push("/Mdrive");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
