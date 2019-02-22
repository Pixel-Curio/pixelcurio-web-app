<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
        <v-flex lg12>
        <material-card
          color="primary"
          title="This is Primary"
          text="Created with love in Portland, OR."
        ></material-card>
      </v-flex>
      <v-flex lg6>
        <material-card
          color="primary"
          title="This is Primary"
          text="Created with love in Portland, OR."
        ></material-card>
      </v-flex>
      <v-flex lg6>
        <material-card
          color="secondary"
          title="This is Secondary"
          text="Created with love in Portland, OR."
        ></material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>