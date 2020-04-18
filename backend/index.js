const fetch = require('node-fetch')
require('dotenv').config()

fetch('https://api.guildwars2.com/v2/characters?ids=all', {
    headers: {
        Authorization: `Bearer ${process.env.API}`,
    },
})
    .then((res) => res.json())
    .then((json) => {
        json.map((e) => {
            console.log(e.name)
        })
    })
