<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <div class="footer-items">
      <span
        v-for="link in links"
        :key="link.name"
      >
        <a
          :href="link.Link"
          class="tertiary--text footer-links">{{ link.name }}</a>
      </span>
    </div>
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      Pixel-Cur.io
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/home' },
      { name: 'Writing', Link: 'https://medium.com/@pixelcurio' },
      { name: 'Portfolio', Link: '/Portfolio' },
      { name: 'Resume', Link: '/Resume' }
    ]
  })
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
