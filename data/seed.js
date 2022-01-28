// Get a bunch of Parts
const { search } = require('./airtable.ts')


const main = async () => {

    const parts = await search("Parts")
    console.log(`parts`, parts)
}
main()