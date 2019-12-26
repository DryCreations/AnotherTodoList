<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md8>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>What Needs Done?</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            prepend-icon="mdi-pencil"
            name="NewTask"
            label="Task"
            id="NewTask"
            type="text"
            ref="NewTask"
            v-model.trim="newTaskForm.text"
            @keyup.enter='addTodoItem'>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click='addTodoItem'>Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return  {
      newTaskForm: {
        text: ""
      }
    }
  },
  methods: {
    addTodoItem() {
      if (this.newTaskForm.text) {
        this.$store.commit("addTodoItem", this.newTaskForm.text);
        this.newTaskForm.text = "";
      }
    }
  }
}
</script>
