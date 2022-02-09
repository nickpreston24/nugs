/* https://tailwindcss.com/docs/box-shadow */

<template>
  <button
    class="btn btn-primary m-0 text-white bg-orange-500 inline-flex items-center px-6 py-3 font-semibold rounded-md shadow-sm border-white border-4"
  >
    <div class="m-2">
      <slot></slot>
    </div>
  </button>
</template>
