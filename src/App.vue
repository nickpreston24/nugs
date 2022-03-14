<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- <ErrorBoundary> -->
    <Page>
      <template v-slot:header>
        <Sidebar />
      </template>
    </Page>
    <!-- </ErrorBoundary> -->
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Footer from "./components/molecules/Footer.vue";
import Stack from "./components/flex/Stack.vue";
import Row from "./components/flex/Row.vue";
import Gradient from "./components/atoms/Gradient.vue";
import Page from "./components/templates/Page.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";

export default {
  components: {
    Sidebar,
    Footer,
    Stack,
    Row,
    Gradient,
    Page,

    ErrorBoundary,
  },
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
