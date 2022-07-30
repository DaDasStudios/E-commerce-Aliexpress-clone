
interface ButtonProps {
  className?: string
  content: string
}

export const Button = ({ className, content }: ButtonProps) => {
  return (
    <button className={`button ${className}`}>{content}</button>
  )
}

export const LightButton = ({ className, content}: ButtonProps ) => {
  return(
    <Button className={`${className} is-light`} content={content}></Button>
  )
}

export const OutlinedButton = ({ className, content}: ButtonProps ) => {
  return(
    <Button className={`${className} is-outlined`} content={content}></Button>
  )
}

export const InvertedButton = ({ className, content}: ButtonProps ) => {
  return(
    <Button className={`${className} is-inverted`} content={content}></Button>
  )
}

export const RoundedButton = ({ className, content}: ButtonProps ) => {
  return(
    <Button className={`${className} is-rounded`} content={content}></Button>
  )
}