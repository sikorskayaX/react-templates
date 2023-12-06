import React, {useState} from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - programming language'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - programming language'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - programming language'}
  ])

  // способ получить инпут (управляемый элемент)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e)=>{
    e.preventDefault()
    const newPost ={
      id: Date.now(),
      title, 
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        {/*Управляемые компоненты*/}
        <MyInput 
          value = {title}
          onChange = {e => setTitle(e.target.value)}
          type='text' 
          placeholder ='Post header'/>
        <MyInput 
          value = {body}
          onChange = {e => setBody(e.target.value)}
          type='text' 
          placeholder ='Post body'/>
        <MyButton onClick = {addNewPost}>Create post</MyButton>
      </form>
        <PostList posts={posts} title="Posts about JS"/>
    </div>
  );
}


export default App;
