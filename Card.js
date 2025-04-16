import '../App.css'
import CustomButton from './CustomButton';
function  Card(props)  {
  return (
   <div className='Card'>
    <h3>{props.title}</h3> 
    <p>This task is to be done in a month.</p>
    <div className='btnwrapper'>
        <CustomButton color='White' bg=' #4682B4' name ='Complete'/>
        <CustomButton color='White' bg='#7C0A02' name ='Delete'/>
        </div> 
   </div>
  );
}

export default Card; 