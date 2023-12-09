import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Python', body: 'Python - programming language'},
    {id: 3, title: 'Ruby', body: 'Ruby - programming language'}
  ])

  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false)

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
    setModal(false)
  }

  //post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{marginTop: 20}} onClick = {() => setModal(true)}>
          create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
        
        <hr style={{margin: '15px 0 '}}></hr>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        <PostList remove = {removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>
    </div>
  );
}


export default App;
