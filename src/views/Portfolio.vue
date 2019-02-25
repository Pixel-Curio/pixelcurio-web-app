<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex lg6 md6 sm12>
        <v-card>
          <v-img :src="sf_fishing" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">State Farm Fishing</span>
              <h6>Lead Developer - 2019</h6>
              <p>
                Developed a multiplayer fishing experience where guests could use phones mounted to a fishing poles
                to control the on-screen fishing poles. Scores were saved to a daily leaderboard so guests could compete
                to be the best virtual fisher.
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg6 md6 sm12>
        <v-card>
          <v-img :src="sf_fishing" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">State Farm Fishing</span>
              <h6>Lead Developer</h6>
              <p>
                Developed a multiplayer fishing experience where guests used a phone mounted to a fishing pole
                to control an on-screen fishing pole.
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg4 md6 sm12>
        <v-card>
          <v-img :src="no_image" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">State Farm Fishing</span>
              <h6>Lead Developer</h6>
              <p>
                Developed a multiplayer fishing experience where guests used a phone mounted to a fishing pole
                to control an on-screen fishing pole.
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg4 md6 sm12>
        <v-card>
          <v-img :src="sap_cube" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">SAP Cube</span>
              <h6>Lead Developer</h6>
              <p>
                Developed a multiplayer fishing experience where guests used a phone mounted to a fishing pole
                to control an on-screen fishing pole.
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg4 md6 sm12>
        <v-card>
          <v-img :src="thermosphere" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Nike Thermosphere</span>
              <h6>Support Developer</h6>
              <p>
                Developed a multiplayer fishing experience where guests used a phone mounted to a fishing pole
                to control an on-screen fishing pole.
              </p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    no_image: "./img/Portfolio/no-image.png",
    sf_fishing: "./img/portfolio/sf-fishing.jpg",
    sap_cube: "./img/portfolio/sap-cube.png",
    thermosphere: "./img/portfolio/thermosphere.jpg"
  })
};
</script>

<style>
h6 {
  font-style: italic;
}
</style>