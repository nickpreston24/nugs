<template></template>
<script>
export default {
  methods: {
    sendMail() {
      const mailto: string =
        "mailto:mail@gmail.com?subject=Test subject&body=Body content";
      window.location.href = mailto;
    },
  },
};
</script>
