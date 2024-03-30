
import { Post, PostType} from "./components/Post.jsx"
import { Headers } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"


import style from './App.module.css'
import './global.css'

const posts:PostType[] = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/86608565?v=4',
      name: 'Jaoa Kicunga',
      role: 'Developement Web'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👍'
      },
      {
        type: 'paragraph',
        content:  'A cabei de subir mais um projecto no meu portifa. É um projecto que fiz no NLW Return, evento da rocketseat.',
      },
      {
        type: 'link',
        content: 'Jane.design/doctorcare'
      },         
    ],
    publishedAt: new Date('2024-03-05 00:01:00')
  },
  { 
    id: 2,
    author: {
      avatarUrl: 'https://scontent.flad5-1.fna.fbcdn.net/v/t31.18172-8/27912460_939841862848618_1413740228598997692_o.jpg?stp=c0.211.1376.1376a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=c21ed2&_nc_eui2=AeHRgUmC5aO344p7aAjuxgJLssZGk1er7eqyxkaTV6vt6h7jiUqK4vrdz1G1u06_ecgHLoAgHLSwsfrKR-3vC0hd&_nc_ohc=bpgMjXAFU9wAX8HJ-iT&_nc_ht=scontent.flad5-1.fna&oh=00_AfCK3jVpFMkiZRlpfV1JbXk7xwkO-6_og95PYKsf1qHj8Q&oe=660EB098',
      name: 'Samuel Paulo António',
      role: 'Developement Web'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👍'
      },
      {
        type: 'paragraph',
        content:  'A cabei de subir mais um projecto no meu portifa. É um projecto que fiz no NLW Return, evento da rocketseat.',
      },
      {
        type: 'link',
        content: 'Jane.design/doctorcare'
      },         
    ],
    publishedAt: new Date('2024-03-15 14:10:00')
  },
]

export function App() {

  return (
    <div> 
    <Headers />

    <div className={style.wrapper}>
      <aside>
        <Sidebar/>
      </aside>

      <main>
        
     {posts.map(post => {
        return (<Post 
          key={post.id}
          post={post}
          />)
     })}

      </main>
    </div>

    </div>
  )
}

