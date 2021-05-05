export default function  ProgressBar  (props)  {  


  const { completed } = props;
  /* const { bgcolor, completed } = props;
   */
  
  
  
  
    return (
      <div className='containerStyles'>
        <div className= 'fillerStyles' style={{width:props.completed+'%'}}>
          <span className=''>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  