<template>
  <h1>Login</h1>
  <form class="form__login" @submit.prevent="handleSubmit()">
    <div class="input__container">
      <label for="username">Usuário: </label>
      <input type="text" name="username" id="username" />
    </div>
    <div class="input__container">
      <label for="password">Senha: </label>
      <input type="password" name="password" id="password" />
    </div>
    <input type="submit" />
    <input type="reset" />
  </form>
</template>

<script setup>
function handleSubmit() {
  console.log('Formulário enviado')
}
</script>

<style scoped></style>
