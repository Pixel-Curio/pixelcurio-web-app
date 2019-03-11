<template>
  <v-layout>
    <v-flex ml-4 mr-4 lg10 md12 sm12>
      <v-timeline>
        <v-timeline-item v-for="(item, i) in portfolio_items" :key="i" color="red lighten-2" small>
          <template v-slot:opposite>
            <span v-html="item.desc"></span>
          </template>
          <v-card>
            <v-img :src="item.img" class="white--text"></v-img>
            <v-card-title>
              <div>
                <span class="grey--text">{{ item.title }}</span>
                <h6>{{ item.role }} - {{ item.date }}</h6>
              </div>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    portfolio_items: [
      {
        img: "./img/portfolio/block-busters.gif",
        title: "Block Busters",
        role: "Support Developer",
        date: "2019",
        desc:
          "5 person, VR, asymmetrical, driving, territory control game. With so many buzz words, you'd think we were making this one up, but it in fact exists and you can actually download it on the <a href='https://globalgamejam.org/2019/games/blockbusters'>GGJ website.</a>"
      },
      {
        img: "./img/portfolio/fishing.jpg",
        title: "State Farm Fishing",
        role: "Lead Developer",
        date: "2019",
        desc:
          "Developed a multiplayer fishing experience where guests could use phones mounted to a fishing poles to control the on-screen fishing poles. Scores were saved to a daily leaderboard so guests could compete to be the best virtual fisher."
      },
      {
        img: "./img/portfolio/splunk-day2.gif",
        title: "Splunk - Day 2",
        role: "Lead Developer",
        date: "2018",
        desc:
          ""
      },
      {
        img: "./img/portfolio/splunk.jpg",
        title: "Splunk - Day 1",
        role: "Lead Developer",
        date: "2018",
        desc:
          ""
      },
      {
        img: "./img/portfolio/",
        title: "Meyer's Sound",
        role: "Lead Developer",
        date: "2018",
        desc:
          ""
      },
      {
        img: "./img/portfolio/",
        title: "HIMSS Conference",
        role: "Lead Developer",
        date: "2018",
        desc:
          ""
      },
      {
        img: "./img/portfolio/sap-cube.png",
        title: "SAP Cube",
        role: "Lead Developer",
        date: "2017",
        desc:
          "Developed a 52 screen interactive 'cube' for SAP that allowed guests to search through the history of the 49ers with video clips and images from the entire history of the franchise. 16 of the screens were translucent, allowing guests to see into the cube and the 4 internal screens."
      },
      {
        img: "./img/portfolio/warbler.gif",
        title: "Warbler",
        role: "Lead Developer",
        date: "2017",
        desc:
          "VR hoverboarding game developed for internal use and exploration. Utilized a physical board that allowed the player to control the virtual hoverboard with a real world item. Networking components and the gyroscopic portion of the project was not developed by Pixel-Cur.io."
      },
      {
        img: "./img/portfolio/",
        title: "State Farm AR Wall",
        role: "Lead Developer",
        date: "2017",
        desc:
          ""
      },
      {
        img: "./img/portfolio/",
        title: "Golden State Warriors Fan Cam",
        role: "Support Developer",
        date: "2016",
        desc:
          ""
      },
      {
        img: "./img/portfolio/thermosphere.jpg",
        title: "Nike Thermasphere",
        role: "Support Developer",
        date: "2015",
        desc:
          "Created an arduino based LED control system for Nike's flagship NYC store to celebrate the launch of their Thermasphere clothing tech. Created the lighting patterns for the LEDs and exposed variables for the sequences that could be modified from a DMX control board."
      },
      {
        img: "./img/portfolio/rogue-mechs.gif",
        title: "Rogue Mechs",
        role: "Lead Developer",
        date: "2015",
        desc:
          "Developed a multiplayer Smash Brothers clone in just over a week for <a href='https://pigsquad.com/'>PIGSquad's</a> Summer Slow Jam. Due to time restrictions, relied on a custom physics driven animation system for all character animations."
      },
      {
        img: "./img/portfolio/microbiome.jpg",
        title: "OMSI Human Microbiome",
        role: "Lead Developer",
        date: "2015",
        desc:
          ""
      },
      {
        img: "./img/portfolio/coke.gif",
        title: "Coca-Cola Happy Cycle",
        role: "Support Developer",
        date: "2014",
        desc:
          ""
      }
    ]
  })
};
</script>

<style>
h6 {
  font-style: italic;
}
</style>