// TODO: https://docs.github.com/en/rest/reference/issues#create-an-issue
<template>
  <Page>
    <div></div>
  </Page>
</template>
<script>
import { Page } from "../templates";
export default {
  data() {
    return {
      myGithub: "/repos/mpreston17/nugs/issues",
      issue: {
        title: "Found a bug",
        body: "I'm having a problem with this.",
        assignee: "octocat",
        milestone: 1,
        labels: ["bug"],
      },
    };
  },
  components: {
    Page,
  },
};
</script>
