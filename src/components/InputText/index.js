import './InputText.css'

const Index = () => {
  return(
      <div className='input-text'>
          <label htmlFor="" className='input-text__label'>Nome</label>
          <input type="text" className='input-text__input' placeholder='Digite seu nome'/>
      </div>
  )
}

export default Index