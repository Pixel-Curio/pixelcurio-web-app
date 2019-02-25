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
          <v-img :src="no_image" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Splunk .conf18</span>
              <h6>Lead Developer (Main Visiualization) - 2018</h6>
              <p></p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex lg4 md6 sm12>
        <v-card>
          <v-img :src="block_busters" class="white--text" height="300px"></v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Block Buster (Global Game Jam 2019)</span>
              <h6>Support Developer - 2019</h6>
              <p>
                5 person, VR, asymmetrical, driving, territory control game. With so many buzz words, you'd think we were making
                this one up, but it in fact exists and you can actually download it
                <a
                  href="https://globalgamejam.org/2019/games/blockbusters"
                >on the GGJ website.</a>
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
              <span class="grey--text">Warbler</span>
              <h6>Lead Developer - 2017</h6>
              <p>
                VR hoverboarding game developed for internal use and exploration. Utilized a physical board that allowed the
                player to control the virtual hoverboard with a real world item. Networking components and the gyroscopic
                portion of the project was not developed by Pixel-Cur.io.
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
              <h6>Lead Developer - 2017</h6>
              <p>
                Developed a 52 screen interactive "cube" for SAP that allowed guests to search through the history of the
                49ers with video clips and images from the entire history of the franchise. 16 of the screens were
                translucent, allowing guests to see into the cube and the 4 internal screens.
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
              <span class="grey--text">Nike Thermasphere</span>
              <h6>Support Developer - 2015</h6>
              <p>
                Created an arduino based LED control system for Nike's flagship NYC store to celebrate the launch of their
                Thermasphere clothing tech. Created the lighting patterns for the LEDs and exposed variables for the sequences
                that could be modified from a DMX control board.
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
    sf_fishing: "./img/Portfolio/sf-fishing.jpg",
    sap_cube: "./img/Portfolio/sap-cube.png",
    thermosphere: "./img/Portfolio/thermosphere.jpg",
    block_busters: "./img/Portfolio/block-busters.gif"
  })
};
</script>

<style>
h6 {
  font-style: italic;
}
</style>