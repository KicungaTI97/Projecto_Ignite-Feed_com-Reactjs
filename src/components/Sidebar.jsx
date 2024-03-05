import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        
            <aside className={styles.sidebar}>
                <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className={styles.profile}>
                   <Avatar src="https://scontent.flad4-1.fna.fbcdn.net/v/t39.30808-6/291864186_763540081445847_3519077464262110308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEdqWd8gfshom6kBnYGr6h8hHbDp5tie6iEdsOnm2J7qMTFgwKlSPokb-gA0j8LarmV0HjjndwKha1RjuEr8Roc&_nc_ohc=EbPz5qVfXKEAX8-MkY_&_nc_zt=23&_nc_ht=scontent.flad4-1.fna&oh=00_AfBvNhRJr68JrTkcVvAkxiop0Lsg30L8ekDmM6kUgAWuEQ&oe=65E3F035"  
                   />
                    <strong>Joao Kicunga</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
  
    )
}

