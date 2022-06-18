# Nugs Factory!

[Visit the Website Here](https://nugs.vercel.app/parts)

# Why this?

What if there was a way to create your dream Nug (legally) from popular parts on the internet? This project aims to acheive this by suggesting builds within budget, while eliminating confusion and compatibility issues for new private gunsmiths!

# Domain Objects

Parts - A specific Nug part, complete with pictures (when able).
Build - Specific custom Nugs for a User. Builds will have notifications of incompatible Parts.
Recipe - A "grocery list" (parts list) in checklist format to make buying and building a lot easier for the User.

# Features

## Major

1. Builds should be recorded by [Neo4j](https://neo4j.com/) and can be 'liked' and shared with buddies.
2. Builds should be updated and treated as a Todo list of Parts
3. [Upload Part Images](https://serversideup.net/courses/guide-uploading-files-vuejs-axios/)

## Minor

1. [Infinite Scroll list](https://vuejsexamples.com/an-infinite-scroll-component-compatible-with-vue-js-3-and-vite/)
2. [Virtually infinite scroll grid](https://github.com/rocwang/vue-virtual-scroll-grid)
3. Parts may be submitted via url and Name. Matching domains should be farmed for current prices and photos.
4. Adjust for mobile button (saves to localstorage)
5. Allow user to suggest updated image urls (don't accept tinyurls or redirects)

# Fixes :bug:

- [x] Disable all lorems in prod.
- [x] Fix all CREATE forms.
- [x] Add and test all findAll methods.
- [x] Finish basic cards.
- [x] Add Youtube Support to database
- [x] Create a custom Embed atom for viewing YT videos.
- [x] Put YT embeds in cards for now. (https://morioh.com/p/487a79571ccb)
- [x] [Scaffold forms by Type](https://www.meziantou.net/generate-an-html-form-from-an-object-in-typescript.htm)

- [x] Avoiding Direct Props alterations
      [Fix altering a prop](https://dev.to/jakzaizzat/avoid-mutating-a-prop-directly-ab9)
      [fixing altering a prop #2](https://michaelnthiessen.com/avoid-mutating-prop-directly/)

- [x] Add Recipe, Part and Build placement (Airtable's embeds)
- [x] Add a generic Controller or Hook for Vue using the Composition API, to encourage sharing between components. 🐫
- [x] Add Basic Update forms and Update functions to the useTable hook.

# Nice to Have

- [x] [Radial Progress](https://vuejsexamples.com/a-smart-and-light-radial-progress-bar-component-for-vue-3/)

- [x] [Number Slider](https://vuejsexamples.com/vue-3-slider-component-with-multihandles-and-formatting/)
- [ ] IDEA: Evolution of blasters svg
      https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KcXLemEwyV_kTP4_m6OcGwHaFj%26pid%3DApi&f=1
      wheel gun -> pistol -> musket -> shotgun -> bolt action -> AR-15/10

# Help or Guide

- Normal pic to [fancy SVG pattern](https://picsvg.com/)
- [Toasts](https://vuejsexamples.com/a-vue-toast-plugin-that-lets-you-create-your-own-toast-component/)
- [Share on social media](https://github.com/nicolasbeauvais/vue-social-sharing)
- [Form builder in Vue](https://vueformulate.com/)
- [Automated Web Scraping with Chron and Python](https://towardsdatascience.com/automated-web-scraping-python-cron-e6bedf4c39eb) See your spider.py implementation
- API playground for vue https://functions.netlify.com/playground/

## Guiding Principles

### [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

![icon](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)

# Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Closing Remarks

> Go ahead! Build your Budget Blaster, Dream DMR or Hunter's Heatmaker!
