import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - programming language'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - programming language'}
  ])

  const [selectedSort, setSelectedSort] = useState()
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b)=> a[sort].localeCompare(b[sort]))
    )
  }

  return (
    <div className="App">
        <PostForm create = {createPost}/>
        <hr style={{margin: '15px 0 '}}></hr>
        <div>
          <MySelect
            value = {selectedSort}
            onChange = {sortPosts}
            defaultValue="Sort by"
            options={[
              {value:'title', name:'By title'},
              {value:'body', name:'By description'}
            ]}
          />
        </div>
        {posts.length
          ? <PostList remove = {removePost} posts={posts} title="Posts about JS"/>
          : <h1 style={{textAlign: 'center'}}>No posts</h1>
        }
        
    </div>
  );
}


export default App;
