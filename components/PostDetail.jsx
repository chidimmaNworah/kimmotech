import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link';
import { getCategories, getTags } from '../services' 

const PostDetail = ({post}) => {
    const getContentFragment = (index, text, obj, type) => {
      let modifiedText = text;
  
      if (obj) {
        if (obj.bold) {
          modifiedText = (<b key={index}>{text}</b>);
        }
  
        if (obj.italic) {
          modifiedText = (<em key={index}>{text}</em>);
        }
  
        if (obj.underline) {
          modifiedText = (<u key={index}>{text}</u>);
        }
      }
  
      switch (type) {
        case 'heading-three':
          return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'paragraph':
          return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
        case 'heading-four':
          return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'image':
          return (
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          );
        default:
          return modifiedText;
      }
    };

      const [categories, setCategories] = useState([]);
    
      useEffect(() => {
        getCategories()
          .then((newCategories) => setCategories(newCategories))
      }, [])
    
      const [tags, setTags] = useState([]);
    
      useEffect(() => {
        getTags()
          .then((newTags) => setTags(newTags))
      }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      {/* <div className="relative overflow-hidden shadow-md mb-6">
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg" 
        />
      </div> */}
      
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:auto mr-8">
            <img src={post.author.photo.url} 
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
            
            <div className="font-medium text-grey-700 pl-7">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>          
          </div>
        </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
    
      {post.content.raw.children.map((typeObj, index)=>{
        const children = typeObj.children.map((item, itemIndex)=> getContentFragment(itemIndex, item.text, item))

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
      
        <div className="flex items-center">
          <div>
            <p className="text-gray-700 text-lg">Categories: <ul className='text-sm inline'> {categories.map((category) => (<Link key={category.slug} href={`/category/${category.slug}`}><li className='inline mr-2 p-2 cursor-pointer'>{category.name}</li></Link>))}</ul></p>
          </div>
          <div className='ml-8'>
            <p className="text-gray-700 text-lg">Tags: <ul className='text-sm inline'> {tags.map((tag) => (<Link key={tag.slug} href={`/tag/${tag.slug}`}><li className='inline mr-2 p-2 cursor-pointer'>{tag.name}</li></Link>))}</ul></p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default PostDetail