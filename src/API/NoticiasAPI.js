export const NoticiasAPI = async () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'd1a96cd9d8msh3da1c3bbaca6843p11dcf7jsnf351e5d4731e',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    const response = await fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return response.value;
}
