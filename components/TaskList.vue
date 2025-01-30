<script setup lang="ts">
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
</script>

<template>
    <ul class="task-list">
      <li v-for="task in taskStore.tasks" :key="task.id" class="task-item">
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <div class="task-actions">
          <!-- Botón de completar tarea -->
          <button @click="taskStore.toggleTask(task.id)" :aria-label="task.completed ? 'Marcar como pendiente' : 'Marcar como completada'">
            <FontAwesomeIcon :icon="['fas', 'check']" />
            <span class="sr-only">{{ task.completed ? 'Marcar como pendiente' : 'Marcar como completada' }}</span>
          </button>
          
          <!-- Botón de eliminar tarea -->
          <button @click="taskStore.removeTask(task.id)" aria-label="Eliminar tarea">
            <FontAwesomeIcon :icon="['fas', 'trash']" />
            <span class="sr-only">Eliminar tarea</span>
          </button>
        </div>
      </li>
    </ul>
  </template>
