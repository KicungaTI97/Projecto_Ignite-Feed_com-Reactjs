
import { Post } from "./components/Post.jsx"
import { Headers } from "./components/Header"
import { Sidebar } from "./components/Sidebar.jsx"

import style from './App.module.css'
import './global.css'

const posts = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://scontent.flad5-1.fna.fbcdn.net/v/t39.30808-6/241339478_606401777159679_645219824700624280_n.jpg?stp=c0.78.304.304a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeF2ukFnkuVhB-iBpnaln3loNazGtCbCpVY1rMa0JsKlVkiTIW6pWy42fj6P9Ob1_o7cpY3BpL0cVU5q8nmIpOle&_nc_ohc=QFunch6VqUYAX9q7K64&_nc_zt=23&_nc_ht=scontent.flad5-1.fna&oh=00_AfDKNtUmLGb4S6ai7Gq6HZA1_KIAZpZti157v_qHwYz94w&oe=65EA6D93',
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
        type: 'paraghraph',
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
          author ={post.author}
          content={post.content}
          publishedAt ={post.publishedAt}
          />)
     })}

      </main>
    </div>

    </div>
  )
}

