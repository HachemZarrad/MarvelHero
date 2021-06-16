import { fetchComics } from '../redux/actions/comics'

it('fetches List of comics', async () => {
    const comics = await fetchComics(1011334)
    expect(comics.length).not.toBe(0)

})