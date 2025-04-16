import '../App.css';

function CustomInput(props)  {
  return (
   
       <div className='inputWrapper'>
        <label>{props.name }</label>
        <input className='inputForm' placeHolder={props.placeHolder} />
       </div>
  );
}

export default CustomInput;
