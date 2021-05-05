export default function  ProgressBar  (props)  {  


 
  const { bgcolor, completed } = props;
  console.log(completed);
  
  
  
  
    return (
      <div className='containerStyles'>
        <div className= 'fillerStyles' style={{width:props.completed+'%'}}>
          <span className=''>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  