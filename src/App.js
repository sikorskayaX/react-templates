import React, {useState} from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - programming language'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - programming language'}
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'Python - programming language'},
    {id: 2, title: 'Python 2', body: 'Python - programming language'},
    {id: 3, title: 'Python 3', body: 'Python - programming language'}
  ])
  return (
    <div className="App">
        <PostList posts={posts} title="Posts about JS"/>
        <PostList posts={posts2} title="Posts about Python"/>
    </div>
  );
}


export default App;
