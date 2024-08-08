import { IName } from '../interfaces/Name.interface'

const Name: React.FC<IName> = ({name}) => {
  return (
    <div className="display-as-typed-container">
        <h1 className="typing-text">{name}</h1>
    </div>
  )
}

export default Name
