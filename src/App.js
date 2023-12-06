import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - programming language'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - programming language'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
        <PostForm create = {createPost}/>
        <PostList posts={posts} title="Posts about JS"/>
    </div>
  );
}


export default App;
