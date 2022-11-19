const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '71661be18f2fafefa4966ae143fa2251',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;