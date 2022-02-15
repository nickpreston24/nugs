<template>
  <button
    class="inline-flex items-center px-6 py-3 text-white font-semibold rounded-md shadow-sm border-white border-4"
  >
    <div class="m-2">
      <slot></slot>
    </div>
    <svg class="ml-3 w-24 h-24" fill="fill" viewBox="0 0 20 20">
      <!-- All you <g>, <path>, <ellipse>, <rect>, etc...
      Good svg tools:  Inkscape, pngtosvg, avoid VSCODE's SVG Editor, it's crap
     -->

      <path
        fill-rule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</template>
