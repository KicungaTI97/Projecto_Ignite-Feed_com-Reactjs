import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comments.module.css'
import { Avatar } from './Avatar'

export function Comments(){
  return(
    <div className={style.comment}>
       <Avatar src="https://scontent.flad4-1.fna.fbcdn.net/v/t39.30808-6/291864186_763540081445847_3519077464262110308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEdqWd8gfshom6kBnYGr6h8hHbDp5tie6iEdsOnm2J7qMTFgwKlSPokb-gA0j8LarmV0HjjndwKha1RjuEr8Roc&_nc_ohc=EbPz5qVfXKEAX8-MkY_&_nc_zt=23&_nc_ht=scontent.flad4-1.fna&oh=00_AfBvNhRJr68JrTkcVvAkxiop0Lsg30L8ekDmM6kUgAWuEQ&oe=65E3F035" />
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

            <p>Muito bom Devon, parabens!! 👌👌</p>
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