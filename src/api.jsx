import axios from 'axios';

// const key = process.env.REACT_APP_API_KEY;

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID YzXdKA-Gv1udacguQL4ZU-7BeHK6LeRaWOBvnguvjaE' ,
        },
        params:{
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages