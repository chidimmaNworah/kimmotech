import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getAuthorProfile } from '../services'

const Authors = () => {
  const [authors, setAuthorProfile] = useState([]);

  useEffect(() => {
    getAuthorProfile()
      .then((newAuthors) =>setAuthorProfile(newAuthors))
  }, [])

  return (
    <div className="bg-white text-center shadow-lg rounded-lg p-8 mb-8">
      <h1 className="text-xl mb-8 font-semibold border-b pb-4">
      Authors
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-0 lg:p-4 pb-6 mb-8">
        {authors.map((author) => (
            <div className='bg-white rounded-lg shadow-xl'>
                <div className="relative overflow-hidden shadow-md mb-6">
                    <img 
                    src={author.photo.url} 
                    alt={author.name}
                    className="object-top h-full w-full rounded-t-lg"
                    /> 
                </div>
                <h3 className='transition duration-100 text-center mb-4 cursor-pointer hover:text-pink-600 text-2xl font-semibold'>
                <Link key={author.id} href={`/author/${author.id}`}>
                    {author.name}
                </Link>
                </h3>
                <p className="text-center text-lg text-gray-700 font-normal px-1 lg:px-2 mb-8">
                    {author.bio}
                </p>
                <div className="text-center mb-8">
                    <Link key={author.id} href={`/author/${author.id}`}>
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-meduim rounded-full text-white px-8 py-3 cursor-pointer">
                        View Posts
                    </span>
                    </Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Authors