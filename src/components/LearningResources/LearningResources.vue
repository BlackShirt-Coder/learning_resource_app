<template>
  <li>
    <base-card>
      <div style="display:flex;justify-content: space-between;">
        <h2>{{ title }}</h2>
        <base-button type="submit" class="flat">Delete</base-button>
      </div>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View resources</a>
      </nav>
    </base-card>

  </li>
</template>

<script>

export default {
  props: ['title', 'link', 'description'],

};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
  align-self: center;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>