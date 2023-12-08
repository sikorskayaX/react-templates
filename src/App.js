import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './components/PostFilter';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Python', body: 'Python - programming language'},
    {id: 3, title: 'Ruby', body: 'Ruby - programming language'}
  ])

  const [filter, setFilter] = useState({sort:'', query: ''})

  const sortedPosts = useMemo(() =>{
    console.log('getSortedPosts')
    if (filter.sort){
      return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }


  return (
    <div className="App">
        <PostForm create = {createPost}/>
        <hr style={{margin: '15px 0 '}}></hr>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {sortedAndSearchedPosts.length
          ? <PostList remove = {removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>
          : <h1 style={{textAlign: 'center'}}>No posts</h1>
        }
        
    </div>
  );
}


export default App;
