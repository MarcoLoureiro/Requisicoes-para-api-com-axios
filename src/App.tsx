import { useState, useEffect, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'
import { PostsTypes } from './types/PostsTypes';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { api } from './api';
const App = () =>{

  useEffect(()=>{
    loadPosts();
  },[]);

  const [posts,setPosts] = useState<PostsTypes[]>([]);
  const [view,setView] = useState(false);

  const loadPosts = async () =>{
    setView(true);
    let json = await api.getAllPosts();
    setView(false);
    setPosts(json);
  }

  const handleAddPost = async (title:string, body:string) =>{
    let json = await api.addNewPost(title,body,1);
    if(json.id){ 
        alert('Post adicionado com sucesso');
      }else{
        alert('Ocorreu um erro');
      }
    }

  return(
    <div>
      <PostForm onAdd={handleAddPost}></PostForm>
        <ul>
      {view?(
        
        posts.map((item,index)=>(
          <li key={index}>
            <PostItem data={item}></PostItem>
          </li>
  
        ))
      ):null
      }
      </ul>
      
    </div>
  );
}

export default App;