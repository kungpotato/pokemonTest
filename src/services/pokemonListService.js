export default {
    getPokemonCard: async (id) => { //eslint-disable-line
        const url = 'http://localhost:3030/api/cards'
        try {
            const response = (id !== undefined) ? await fetch(`${url}?_id=${id}`) : await fetch(`${url}`)
            const json = await response.json()
            // console.log('Success: ',json);
            return json
        } catch (error) {
            // console.log('Error: ',error);
        }
    }
}