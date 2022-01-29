# Nugs Factory!

[Visit the Website Here](https://nugs.vercel.app/parts)

# Why this?

What if there was a way to create your dream Nug (legally) from popular parts on the internet?  This project hopes to acheive that with suggested builds within budget, while eliminating confusion and compatibility issues for new private builders!

# Domain Objects

Parts - A specific Nug part, complete with pictures (when able).
Build - Specific custom Nugs for a User.  Builds will have notifications of incompatible Parts.
Recipe - A "grocery list" (parts list) in checklist format to make buying and building a lot easier for the User.


# Features

## Major

1. Builds should be recorded by Neo4j and can be 'liked' and shared with buddies.
2. Recipes should be updated and treated as a Todo list of Parts
3. 

## Minor

1. 
2. 
3. Parts may be submitted via url and Name.  Matching domains should be farmed for current prices and photos.



# Fixes :bug:

- [x] Disable all lorems in prod.
- [x] Fix all CREATE forms.
- [x] Add and test all findAll methods.
- [x] Finish basic cards.
- [ ] Add image upload xor link support to cards.
- [x] Add Youtube Support to database 
- [x] Create a custom Embed atom for viewing YT videos.
- [x] Put YT embeds in cards for now. (https://morioh.com/p/487a79571ccb)
- [x] [Scaffold forms by Type](https://www.meziantou.net/generate-an-html-form-from-an-object-in-typescript.htm)

- [ ] Props
    [Fix altering a prop](https://dev.to/jakzaizzat/avoid-mutating-a-prop-directly-ab9)
    [fixing altering a prop #2](https://michaelnthiessen.com/avoid-mutating-prop-directly/)
    

- [ ] Store things across function calls: https://lihbr.com/blog/rate-limiting-without-overhead-netlify-or-vercel-functions
use-serverless-functions-send-sms-react-vercel-twilio
- [x] Add Recipe, Part and Build placement (Airtable's embeds)  
- [ ] Builds:
    - Greedy Algorithm
        a. Favors more expensive/least expensive (toggle this as a mode)
        b. Introduce slots (grip, LPK, lower, etc.)...make custom builder object for this
        c. Display the fully built AR, within price.
        d. Dipspay a slider bar for budget.
        e. Add a Randomizer button.
        f. Finish the Types and Categories in Airtable (build the form for this later)
- [ ] Build Checklist (todolist) on Builds and Recipes and Shipping
- [x] Add a generic Controller or Hook for Vue using the Composition API, to encourage sharing between components. 🐫
- [ ] Add Basic Update forms and Update functions to the useTable hook.
- [ ] 

# Nice to Have:

* [Toasts](https://vuejsexamples.com/a-vue-toast-plugin-that-lets-you-create-your-own-toast-component/)
* [Share on social media](https://github.com/nicolasbeauvais/vue-social-sharing)
* [Form builder in Vue](https://vueformulate.com/)
* [Automated Web Scraping with Chron and Python](https://towardsdatascience.com/automated-web-scraping-python-cron-e6bedf4c39eb) See your spider.py implementation
- [ ] Ammoseek URL generator.
- [ ] API playground for vue https://functions.netlify.com/playground/
- [ ] Send sms? https://www.twilio.com/blog/
- [ ] Portal 2 Style Animation
    - Borrow the code from your 1st website
        a. Animate each 'tile' (Part, Build, etc.) transition to be timed like in your portfolio
        b. Set a nice patterned background (see Braden's linked background cdn from Scrib)
- [ ] 
    [Validation with Yup and Typescript](https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e)
    [Yup Validation #2](https://github.com/vijitail/vue-form-validation-yup/blob/master/src/App.vue)
- [ ] [Floating Action Button](https://vuetifyjs.com/en/components/floating-action-buttons/#lateral-screens)
- [ ] [Emulate this awesome menu](https://codesandbox.io/s/xn8xx?file=/src/SmartHome/SmartHome.vue)
- [ ] Add Yup validation to each form -- allow only valid data to turn on the Submit buttons.
- [ ] Custom Cartridge pattern background, like [these](https://www.svgbackgrounds.com/)
- [ ] Normal pic to [fancy SVG pattern](https://picsvg.com/)



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Closing Remarks

> Go ahead!  Build your Budget Blaster, Dream DMR or Hunter's Heatmaker!