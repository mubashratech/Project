import '../App.css';


function CustomButton(props)  {
  return (
   
        <button className ='btn' style={{backgroundColor:props.bg,color:props.color}}>{props.name}</button>
  );
}

export default CustomButton;