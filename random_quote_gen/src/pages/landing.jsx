import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Landing() {
    const [response, setResponse] = useState({})
    const [nextQuote, setNextQuote] = useState(true)

    useEffect(() => {

        if (nextQuote) {
            const req = async () => {
                const res = await (await axios.get('https://api.quotable.io/random')).data
                setResponse(res)
            }
            req();
            setNextQuote(!nextQuote)
        }
    },[nextQuote])

    console.log('response', response)

    return (
        <div>
            <section id='quote-box'>

                <div className='text-author'>
                    <blockquote id='text'>
                        {response.content}
                    </blockquote>
                    <span id='author'> - {response.author}</span>
                </div>

                <button type='button' id='new-quote' onClick={() => setNextQuote(true)}> Next quote </button>
                <button type='button' id='tweet-quote'> Tweet quote </button>

            </section>
        </div>
    )
}

export default Landing;
