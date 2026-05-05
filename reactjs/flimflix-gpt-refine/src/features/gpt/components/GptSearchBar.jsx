import React, { useRef } from 'react'
import openai from '../../../shared/utils/openAi';
import { useDispatch } from 'react-redux';
import { lastGptSearch } from '../gptSlice';
import apiClient from '../../../shared/api/client';
import { transformMovie } from '../../../shared/utils/transformAPI';

const GptSearchBar = () => {

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const findSearchMovies = async (movieName) => {    
        const { data } = await apiClient.get(`/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`);
        return data.results.map(transformMovie);
    }


    const searchEvent = async (e) => {
        e.preventDefault()
        const text = inputRef.current.value;
        //console.log(text);

        // const queryText = `act as a movie recommendation system and suggest some movies for the query: ${text} only gave me name of 5 movies.  comma separated`;
        const queryText = `act as a movie recommendation system and suggest some movies for the query: ${text} only gave me name of 5 movies. also if any specific language is mentioned then only give movies of that language.  comma separated`;

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

