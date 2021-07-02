<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style global>
/* No hover borders */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

label {
  padding: 1rem;
  font-weight: 500;
  color: #42b983;
}

/* Auto-center component and contents */
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}

.bullet-border {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  outline: none;
}

#app {
  font-family: "Trebuchet MS", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
