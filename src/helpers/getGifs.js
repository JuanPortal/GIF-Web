export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&limit=12&api_key=HbU13fYXOGcszdJ89CVjjuP8sK079Jro`
    const res = await fetch(url)
    const { data } = await res.json()
    
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    return gifs
}