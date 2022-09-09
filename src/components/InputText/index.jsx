import './InputText.css'

const Index = (props) => {

    const placeholderModified = `${props.placeholder}...`

  return(
      <div className='input-text'>
          <label htmlFor="" className='input-text__label'>{props.label}</label>
          <input type="text" className='input-text__input' placeholder={placeholderModified}/>
      </div>
  )
}

export default Index