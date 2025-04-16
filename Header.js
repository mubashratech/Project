import '../App.css'
import CustomButton from './CustomButton';
function Header()  {
  return (
   <div className='header'>
    <h1>Task Manager</h1>
    <div className='btnWrapper'>
        <CustomButton name='Add' bg=' #4682B4' color='white'/>
    </div>
   </div>
  );
}

export default Header;