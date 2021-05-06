export default function  ProgressBar  (props)  {  


 
  const {  completed } = props;
  
    let bgcolor='green';

    (completed <= 50) ? bgcolor='green': bgcolor='red';

    console.log(completed   + " bgcolor "+   bgcolor); 
  
  
  
  
    return (
      <div className='containerStyles'>
        <div className= 'fillerStyles' style={{width:props.completed+'%' , backgroundcolor:bgcolor }}>
          <span className=''>{`${completed}%`}</span>
        </div>
      </div>
    ); 
  };
  
  