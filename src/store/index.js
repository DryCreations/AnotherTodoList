import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  mutations: {
    addTodoItem(state, item) {
      state.todoItems.push({text: item,completed: false});
    },
    removeTodoItem(state, index) {
      state.todoItems.splice(index, 1);
    },
    shiftTodoItem(state, params) {
      state.todoItems.splice(params.index + params.by, 0, state.todoItems.splice(params.index, 1)[0]);
    },
    toggleTodoItem(state, index) {
      state.todoItems[index].completed ^= true;
    }
  }
});
