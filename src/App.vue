<template>
  <main class="">
    <div class="background"></div>
    <div class="">
   
      <img src="./assets/IMG/Logo.svg" class="Logo__img" />
     
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script>
 
export default {
  name: "App",
 
};
</script>

<style>
@import "./assets/CSS/global.css";

main {
  display: flex;
  text-align: center;
}

main div img {
  margin-top: 50px;
}
.background {
  background-image: url("assets/IMG/MainBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 900px;
  height: 99.7vh;
}

.Logo__img {
  width: 94px;
}

/* CSS para animação out-in */

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
