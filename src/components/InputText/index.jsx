import './InputText.css'

const Index = (props) => {

    const placeholderModified = `${props.placeholder}...`

    const toChange = (event) => {
        props.toChange(event.target.value)
    }


  return(
      <div className='input-text'>
          <label htmlFor="" className='input-text__label'>{props.label}</label>
          <input
              value={props.value}
              onChange={toChange}
              required={props.required}
              type="text"
              className='input-text__input'
              placeholder={placeholderModified}/>
      </div>
  )
}

export default Index