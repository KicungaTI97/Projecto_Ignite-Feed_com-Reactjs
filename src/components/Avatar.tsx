import style from './Avatar.module.css'

interface AvatarProps{
  hasBorder?: boolean;
  src: string;
  alt?: string;

}


export function Avatar({hasBorder = true, src, alt}:AvatarProps){

  return(
    <div>
       <img
        className={hasBorder ? style.avatarWhitBorder : style.avatar}
        src={src}
        alt={alt}
        />
    </div>
  )
}