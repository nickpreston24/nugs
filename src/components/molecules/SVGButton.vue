<template>
  <button
    class="inline-flex items-center font-semibold rounded-md shadow-sm lg:shadow-3xl"
  >
    <Row class="m-2 inline-flex items-center">
      <div class="mr-3">
        <slot></slot>
      </div>
      <svg class="ml-4 w-16" height="100%" fill="fill" viewBox="0 0 50 20">
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Row>
  </button>
</template>
<script>
import { Grid, Row, Stack } from "../../components/flex";

export default {
  components: {
    Stack,
  },
};
</script>
<!-- NOTE:
    
    All your <g>, <path>, <ellipse>, <rect>, etc...
      Good svg tools:  Inkscape, pngtosvg, avoid VSCODE's SVG Editor, it's crap
     -->
