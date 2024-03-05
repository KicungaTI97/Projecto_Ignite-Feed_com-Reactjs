import { Avatar } from './Avatar'
import { Comments } from './Comments'
import style from './Post.module.css'
export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
              <Avatar hasBorder  src="https://unsplash.com/pt-br/fotografias/menino-vestindo-colete-cinza-e-camisa-rosa-segurando-livro-qDY9ahp0Mto"  
              />
                <div className={style.authorInfo}>
                    <strong>João Kicunga</strong>
                    <span>Web Developer</span>
                </div>
                </div>

                <time title='27 de Fevereiro' dateTime='2024-02-27 23:40:30'>Publicado há 1h</time>
            </header>
            <div className={style.content}>
                
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