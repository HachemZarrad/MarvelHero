import { fetchHeroes, getFavoriteHero } from '../redux/actions/heroes'


it('fetches List of Heroes', async () => {
    const heroes = await fetchHeroes()
    expect(heroes.length).not.toBe(0)

})


it('Checks Selected Hero', () => {
    const defaultHero = {
        "id": 1011334,
        "name": "3-D Man",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            "extension": "jpg"
        }
    }
    expect(getFavoriteHero(defaultHero)).toEqual(defaultHero)
})