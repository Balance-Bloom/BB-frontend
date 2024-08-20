import React, { useEffect, useState } from 'react'
import PostItem from './postItem'

// import { DUMMY_POSTS } from '../data'
const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_URL}/posts`)
                setPosts(response?.data)
            } catch (error) {
                console.log(err)
            }
            setIsLoading(false)
        }
        fetchPosts(false)
    }, [])

    if (isLoading) {
        return <Loader />
    }


    return (
        <section className="posts" >
            {posts.length > 0 ? <div className="container posts_container">
                {
                    posts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) => <PostItem
                        key={id} postID={id} thumbnail={thumbnail} category={category} title=
                        {title} description={description} authorID={creator} createdAt={createdAt} />)
                }
            </div> : <h2 className='center'>No posts founds</h2>}
        </section >
    )
}
export default Posts



// import React, { useEffect, useState } from 'react'
// import BlogCards from './BlogCards';
// const BlogPage = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const pageSize = 12 // blogs per page
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [activeCategory, setActiveCategory] = useState(null);
//     useEffect(() => {
//         async function fetchBlogs() {
//             let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
//             // filter by category
//             if (selectedCategory) {
//                 url += `&category=${selectedCategory}`;
//             }
//             const response = await fetch(url);
//             const data = await response.json();
//             setBlogs(data);
//         }
//         fetchBlogs();
//     }, [currentPage, pageSize, selectedCategory])
//     // page chaging btn
//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     }
//     const handleCategoryChange = (category) => {
//         setSelectedCategory(pageNumber);
//         setCurrentPage(1);
//         setActiveCategory(category)
//     }

//     return (
//         <div>
//             {/*category section */}
//             <div>Page Category</div>
//             {/*blogCards section */}
//             <div>
//                 <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
//             </div>
//             {/* pagination section */}
//             <div>Pagination</div>
//         </div>
//     )
// }

