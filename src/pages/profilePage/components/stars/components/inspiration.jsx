import React from 'react'
import { Link } from 'react-router-dom'
import "../stars.scss"
export const Inspiration = () => {
  return (
    <div className="future">
    <div className="futere__back">
      <Link to="/stars">
        
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-chevron-left mr-2"
        >
          <path
            fill="#58a6ff"
            fill-rule="evenodd"
            d="M9.78 12.78a.75.75 0 01-1.06 0L4.47 8.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L6.06 8l3.72 3.72a.75.75 0 010 1.06z"
          ></path>
        </svg> Stars
      </Link>
    </div>
  </div>
  )
}
