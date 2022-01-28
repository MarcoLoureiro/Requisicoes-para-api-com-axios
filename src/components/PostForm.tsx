import { useState,ChangeEvent } from "react";

type Props = {
    onAdd:(title:string,body:string) =>void;
}

export const PostForm = ({onAdd}:Props) =>{

    const [addTitleText,setAddTitleText] = useState('');
    const [addBodyText,setAddBodyText] = useState('');

    const handleAddTitleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText(e.target.value);
      }
    
      const handleAddBodyTextChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(e.target.value);
      }

      const handleAddClick = async () =>{
        if(addTitleText && addBodyText){
            onAdd(addTitleText,addBodyText);
        }    
      else{
        alert('Preencha os campos');
      }
    }

    return(
        <fieldset>
        <legend>Adicionar novo post</legend>
        <input value={addTitleText} type="text" placeholder='Digite um novo post' onChange={handleAddTitleChange} /> <br />
        <textarea value={addBodyText} onChange={handleAddBodyTextChange}></textarea> <br />
        <button onClick={handleAddClick}>Adicionar</button>
      </fieldset>
    );
}