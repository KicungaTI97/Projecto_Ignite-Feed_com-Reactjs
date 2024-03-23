import { format, formatDistanceToNow, set } from 'date-fns';
import pt from 'date-fns/locale/pt'

import { Avatar } from './Avatar'
import { Comments } from './Comments'

import style from './Post.module.css'
import { useState } from 'react';



export function Post({author, publishedAt, content}){

    const [comments, setComments ] = useState([
        'Post muito bacana, hein?!'
    ])

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: pt,
    })

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt,{
        locale: pt,
        addSuffix: true,

    })

    function handleCreateComment(event){
        const newCommentText = event.target.comment.value
        event.preventDefault()
        setComments([...comments, newCommentText])

        event.target.comment.value = '';
    }

    function deleteCommet(commentToDelete){
        const commentsWithoutDelete = comments.filter(comment =>{
            return comment !== commentToDelete
        })

       setComments(commentsWithoutDelete)
    }

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
              <Avatar hasBorder  src={author.avatarUrl} 
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

            <form onSubmit={handleCreateComment} className={style.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                name='comment'
                
                placeholder='Deixe um comentário'
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