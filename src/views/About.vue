<template>
  <v-container>
    <v-layout class="mt-5" align-center justify-center>
      <v-card xs12 sm10 md8>
        <v-toolbar dark>
          <v-toolbar-title>About</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>
            My name is Hayden Mankin, I am a sophomore at Wright State University.
          </p>
          <p>
            This is just a standard todo app. You can add things to a list, move them around, delete them, and cross them off.
            In the future I might look into a database or local storage so that the list can be persistant every time you go to the site.
          </p>
          <p>
            Some of the things I utilized in this project are:
            <ul>
              <li>vue.js</li>
              <li>vue-router</li>
              <li>vuex</li>
              <li>vuetify</li>
            </ul>
          </p>
          <p>
            I really just wanted to familiarize myself with vue so that I could move on to more complex apps. Thanks for visiting!
          </p>
        </v-card-text>

    </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return  {

    }
  }
}
</script>
