// Loads environment vars

process.env.NODE_ENV === 'development' && console.log(`process.env`, process.env)

const get = (key) => parse(process.env[key])

export const config = {
    Neo4j: {
        neoUri: get('VUE_APP_URI'),
        password: get("VUE_APP_PASSWORD"),
        user: get("VUE_APP_USER"),
    },
    Airtable: {
        apiKey: get("VUE_APP_AIRTABLE_API_KEY"),
        base: get("VUE_APP_BASE_KEY")
    }
}

function parse(value, fallback = null) {
    if (typeof value === 'undefined') {
        return fallback
    }
    switch (typeof fallback) {
        case 'boolean':
            return !!JSON.parse(value)
        case 'number':
            return JSON.parse(value)
        default:
            return value
    }
}

export default config