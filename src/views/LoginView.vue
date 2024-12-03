<template>
  <h1>Login</h1>
  <form class="form__login" @submit.prevent="handleSubmit()">
    <div class="input__container">
      <label for="username">Usuário: </label>
      <input type="text" name="username" id="username" required />
    </div>
    <div class="input__container">
      <label for="password">Senha: </label>
      <input type="password" name="password" id="password" required />
    </div>
    <input type="submit" />
    <input type="reset" />
  </form>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const token = ref('')
const credentials = {
  username: '',
  password: '',
}

function updateCredentials(username, password) {
  credentials.username = username
  credentials.password = password
}

async function authenticateInFakeStoreAPI(credentials) {
  try {
    const response = await axios.post('auth/login', credentials)
    alert('Usuário autenticado com sucesso')
    console.log(response.data)
    return response.data
  } catch (error) {
    alert('Usuário ou senha incorretos')
    console.log('Usuário ou senha incorretos', error)
  }
}

async function handleSubmit() {
  updateCredentials(
    document.getElementById('username').value,
    document.getElementById('password').value,
  )
  try {
    const response = await authenticateInFakeStoreAPI(credentials)
    token.value = response.token
  } catch (error) {
    console.log('Erro ao armazenar token', error)
  }
}
</script>

<style scoped></style>
