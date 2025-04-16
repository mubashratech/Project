import './App.css'
import CustomInput from './Component/CustomInput';
import CustomButton from './Component/CustomButton';
import Header from './Component/Header';
import Card from './Component/Card';
function App()  {
  return (
    <div className ='main'>
      <div className='inputSection'>
        <Header />
        <CustomInput placeHolder='Enter Task' name='Task'/>
        <CustomInput placeHolder='Work' name='Description'/>
        <div className='btnwrapper'>
        <CustomButton color='White' bg=' #4682B4' name ='Save Task'/>
        <CustomButton color='White' bg='#7C0A02' name ='Cancel'/>
        </div>
      </div>
      <div className='cardSection'>
        <Card/> 
      </div>
    </div>
  );
 }

export default App; 