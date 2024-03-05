import style from './Avatar.module.css'

export function Avatar(props){

  return(
    <div>
       <img
        className={props.hasBorder ? style.avatarWhitBorder : style.avatar}
        src={props.src} />
    </div>
  )
}