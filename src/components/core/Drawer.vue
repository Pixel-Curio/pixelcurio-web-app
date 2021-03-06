<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="90"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile to="/" avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="50"
              margin-top="100"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
          </v-list-tile-title>
        </v-list-tile>
      
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>

        <v-list-tile
          active-class="primary"
          class="v-list-item v-list__tile--twitter"
          href="https://twitter.com/pixel_curio"
        >
          <v-list-tile-action>
            <v-icon>mdi-twitter-box</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile
          active-class="primary"
          class="v-list-item v-list__tile--linkedin"
          href="https://www.linkedin.com/in/pixelcurio/"
        >
          <v-list-tile-action>
            <v-icon>mdi-linkedin</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: './img/pc_icon_color.png',
    links: [
      {
        to: '/home',
        icon: 'mdi-home-outline',
        text: ''
      },
      {
        to: '/portfolio',
        icon: 'mdi-folder-open',
        text: ''
      },
      {
        to: '/resume',
        icon: 'mdi-file-document',
        text: ''
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;
      
      &--twitter {
        margin-top: auto;
      }

      &--linkedin {
        margin-bottom: 17px;
      }
    }

    .v-list__tile--active{
      background: var(--v-primary-base) !important;
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>
