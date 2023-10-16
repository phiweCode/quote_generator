import React from 'react'
import { useParams } from 'react-router-dom'


export const loader = ({params}) =>
{

}

function AuthorQuotes() {

  const slug = useParams()

  return (
    <section className='author-section'>

      <div className='author-bio'>
          <div className='author-div'>
            <img src='' />
          </div>

          <div className='author-details'>
            <h2> Bernard Waterson </h2>
            <p>Non occaecat anim cillum cillum cupidatat irure. Reprehenderit qui ex in exercitation cillum ad officia. Veniam anim occaecat ad ea elit anim mollit.
            </p>
            <h3>American Philosopher </h3>

            <span> Returned results 50</span>
          </div>

      </div>

        <div className='author-quotes'>

        </div>
      </section>
  )
}

export default AuthorQuotes
