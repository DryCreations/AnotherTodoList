<template>
  <v-container>
    <Todo class="mt-5"/>
    <TodoList class="mt-5"/>
  </v-container>
</template>

<script>
import Todo from '@/components/Todo.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Home',
  data() {
    return  {

    }
  },
  components: {
    Todo,
    TodoList
  }
}
</script>
