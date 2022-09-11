import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
      <div>
    <div className="flex page navigation justify-center">
        <ul className="flex list-style-none">
            {pageNumbers.map(number => 
                <li key={number} className="page-item p-5 text-black font-bold">
                    <a onClick={() => paginate(number)} href="#" className="page-link">
                        {number}
                    </a>
                </li>
            )}
        </ul>
    </div>
    </div>
  )
}

export default Pagination