import axios from 'axios';

const apiKey = 'YzXdKA-Gv1udacguQL4ZU-7BeHK6LeRaWOBvnguvjaE'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: `Client-ID YzXdKA-Gv1udacguQL4ZU-7BeHK6LeRaWOBvnguvjaE`,
        },
        params:{
            query: term,
        }
    });

    console.log(response);

    return response.data.results;
}

export default searchImages