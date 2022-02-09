const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    // baseUrl: 'https://api.themoviedb.org/3/movie/76341?api_key=53a7613c7a7595d574a4edbdf8b70b92&language=pl',
    apiKey: '53a7613c7a7595d574a4edbdf8b70b92',
    language: 'pl',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;