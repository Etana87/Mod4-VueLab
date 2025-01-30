<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
const newTask = ref('')

const addTask = () => {
  taskStore.addTask(newTask.value)
  newTask.value = ''
}
</script>

<template>
    <div class="container">
      <h1>Lista de Tareas</h1>
      <div class="task-input">
        <input v-model="newTask" placeholder="Nueva tarea" />
        <button @click="addTask" aria-label="Agregar tarea">
          <FontAwesomeIcon :icon="['fas', 'plus']" />
          <span class="sr-only">Agregar tarea</span>
        </button>
      </div>
      <TaskList />
    </div>
  </template>