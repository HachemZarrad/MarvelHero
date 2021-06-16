import { fetchHeroes, getFavoriteHero } from '../redux/actions/heroes'


it('fetches List of Heroes', async () => {
    const heroes = await fetchHeroes()
    expect(heroes.length).not.toBe(0)

})