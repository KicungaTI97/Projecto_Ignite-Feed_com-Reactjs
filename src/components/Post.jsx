import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt'

import { Avatar } from './Avatar'
import { Comments } from './Comments'

import style from './Post.module.css'

export function Post({author, publishedAt, content}){
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: pt,
    })

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt,{
        locale: pt,
        addSuffix: true,

    })

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
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={style.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentLsit}>
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
    )
}