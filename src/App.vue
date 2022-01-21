<template>
  <div>
    <sidebar/>    
    <footer class="bg-blue">
      <div>footer</div>
    </footer>
  </div>
</template>
<script>
import Sidebar from './Sidebar.vue';
export default {
  components: { Sidebar },
  
};
</script>
<style global>
/* No hover borders */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* Todo: move to tailwind component */
label {
  padding: 1rem;
  font-weight: 500;
  color: #42b983;
}

/* Todo: move to tailwind component */
input.bullet-border {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  outline: none;
}

/* Auto-center component and contents */
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}

#app {
  font-family: "Trebuchet MS", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}



/*route transitions*/
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.15s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.15s ease-in;
}
</style>
