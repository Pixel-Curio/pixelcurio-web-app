<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex lg7 md7 sm7 xs7>
        <v-img :src="logo" contain="true" height="300px"></v-img>
      </v-flex>
      <v-flex lg7 md7 sm7 xs7>
        <h2 align-center>Oh hey, I didn't see you there<a href="https://www.youtube.com/watch?v=-iQC0Fqpq70" target="_blank">.</a></h2>
        <h3>Thanks for coming to my site. If you came to check out my writing, here's my
             <a href="https://medium.com/@pixelcurio" target="_blank">Medium</a> profile.
        Want to see some some cool stuff I've made? Check out my <a href="/Portfolio">Portfolio</a>. 
        Want to see the who/what/when of my work history? Well, we have a classic <a href="/Resume">Resume</a> this way. 
        Want to just say hi? Then send an <a href="#"
            data-contact="bWljaGFlbEBwaXhlbC1jdXIuaW8="
            data-subj="UGl4ZWwtQ3VyLmlvIEVucXVpcnk="
            onfocus="this.href = 'mailto:' + atob(this.dataset.contact) + '?subject=' + atob(this.dataset.subj || '')">Email</a>.
        </h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    logo: './img/pc_logo_color.png'
  })
};
</script>

<style>
h2{
    text-align: center;
}
</style>