import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comments({content}){
  return(
    <div className={style.comment}>
      <Avatar hasBorder  src="https://scontent.flad5-1.fna.fbcdn.net/v/t31.18172-8/27912460_939841862848618_1413740228598997692_o.jpg?stp=c0.211.1376.1376a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeHRgUmC5aO344p7aAjuxgJLssZGk1er7eqyxkaTV6vt6h7jiUqK4vrdz1G1u06_ecgHLoAgHLSwsfrKR-3vC0hd&_nc_ohc=bpgMjXAFU9wAX8HJ-iT&_nc_ht=scontent.flad5-1.fna&oh=00_AfCK3jVpFMkiZRlpfV1JbXk7xwkO-6_og95PYKsf1qHj8Q&oe=660EB098" />
       <div className={style.commentBox}>
          <div className={style.commentContent}>
            <header>
              <div className={style.authorAndTime}>
                <strong>Joao Kicunag</strong>
                <time title='27 de Fevereiro' dateTime='2024-02-27 23:40:30'>Cerca de 1h atrás</time>
              </div>
              <button title='Deletar comentario'>
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
            <footer>
             <button>
             <ThumbsUp />
              Aplaudir <span>20</span>
             </button>
            </footer>
          </div>
       </div>
    </div>
  )
}