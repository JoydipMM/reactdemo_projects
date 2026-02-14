import React, { useRef } from 'react'
import openai from '../../utils/openAi';
import { useDispatch } from 'react-redux';
import { lastGptSearch } from '../../utils/gptSlice';
import { API_BASE_URL, TMDB_API_OPTION } from '../../utils/constants';

const GptSearchBar = () => {

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const findSearchMovies = async (movieName) => {    
        const response = await fetch(`${API_BASE_URL}/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTION);
        const data = await response.json();
        return data.results;
    }


    const searchEvent = async (e) => {
        e.preventDefault()
        const text = inputRef.current.value;
        //console.log(text);

        const queryText = `act as a movie recommendation system and suggest some movies for the query: ${text} only gave me name of 5 movies. Also search as per language preference.  comma separated`;

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: queryText }],
            model: 'gpt-5.2',
        });

        if(!gptResult.choices){
            // show error message
        }

        //console.log(gptResult._request_id);
        //console.log(gptResult.choices[0].message.content);
        //console.log(gptResult.choices?.[0]?.message?.content);
        // result is comma separated so convert it to array
        const gptResultArray = gptResult.choices?.[0]?.message?.content.split(",");
        //console.log(gptResultArray);
        //const lastGptSearchObj = { searchContent: text, searchResult: gptResultArray };
        //dispatch(lastGptSearch(lastGptSearchObj));

        const gptSearchPromiseArray = gptResultArray.map((movieName) => findSearchMovies(movieName));
        const gptSearchResult = await Promise.all(gptSearchPromiseArray);
        //console.log(gptSearchResult);
        dispatch(lastGptSearch({searchContent: text, movieNames:gptResultArray, searchResult: gptSearchResult}));
    }

    return (
        <div>
            <form onSubmit={searchEvent}>
                <input ref={inputRef} type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar
