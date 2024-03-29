import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt'

import { Avatar } from './Avatar'
import { Comments } from './Comments'

import style from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];

}

export function Post({author, publishedAt, content}:PostProps){

    const [comments, setComments ] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState("") 

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: pt,
    })

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt,{
        locale: pt,
        addSuffix: true,

    })
    function handleCreateNewComment(event:FormEvent){
        //const newCommentText = event.target.comment.value
        event.preventDefault()
        setComments([...comments, newCommentText])

        event.target.comment.value = '';
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

   
   
   /*  function handleCreateNewCommentChange(){
        event.preventDefault();
        setNewCommentText(event.target.value)

    }
 */
    function deleteCommet(commentToDelete:string){
       
        const commentWhithOutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentWhithOutDeleteOne)
    }

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
              <Avatar src={author.avatarUrl} 
              />
                <div className={style.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativetoNow}
                </time>
            </header>
            <div className={style.content}>
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                onChange={handleNewCommentChange}
               value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentLsit}>
               {comments.map(comment =>{
               
                return (<Comments
                    key = {comment}
                    content = {comment}
                    onDeleteCommet = {deleteCommet}
                />)
               })}
            </div>

        </article>
    )
}