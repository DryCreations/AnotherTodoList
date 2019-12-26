<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md8>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-list class="scroll">
            <v-list-item v-for='(item, index) in todoItems' v-bind:key='index'>

              <v-list-item-content>
                <v-list-item-title v-bind:style="item.completed ? {textDecoration: 'line-through'} : {}">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
              <v-btn v-bind:disabled="index==0" icon text @click="shiftItem(index, -1)"><v-icon>mdi-chevron-up</v-icon></v-btn>
              <v-btn v-bind:disabled="index==(todoItems.length-1)" icon text @click="shiftItem(index, 1)"><v-icon>mdi-chevron-down</v-icon></v-btn>
              <v-btn icon text v-bind:color="item.completed ? 'red' : 'green'" @click="toggleItem(index)"><v-icon>{{ item.completed ? "mdi-cancel" : "mdi-check" }}</v-icon></v-btn>
              <v-btn icon text color="red" @click="deleteItem(index)"><v-icon>mdi-delete</v-icon></v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  data() {
    return  {

    }
  },
  computed: {
    ...mapState(['todoItems'])
  },
  methods: {
    deleteItem(index) {
      this.$store.commit("removeTodoItem", index)
    },
    shiftItem(index, by) {
      this.$store.commit("shiftTodoItem", {index, by});
    },
    toggleItem(index) {
      this.$store.commit("toggleTodoItem", index);
    }
  }
}
</script>

<style>
  @media (max-width: 640px) {
    .scroll {
      overflow-y: scroll;
      max-height: 25vh;
    }
  }
  @media (min-width: 641px) and (max-width: 800px) {
    .scroll {
      overflow-y: scroll;
      max-height: 35vh;
    }
  }
  @media (min-width: 801px) and (max-width: 1024px) {
    .scroll {
      overflow-y: scroll;
      max-height: 45vh;
    }
  }
  @media (min-width: 1025px) {
    .scroll {
      overflow-y: scroll;
      max-height: 50vh;
    }
  }

</style>
