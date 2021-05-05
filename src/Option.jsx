/* import Confetti from 'react-dom-confetti';
 */
export default function Option(props){
  let color='transparent'
  let selected=props.selected; 
  
  
	/* const config = {
		angle: 30,
		spread: 300,
		startVelocity: 40,
		elementCount: 70,
		dragFriction: 0.12,
		duration: 3000,
		stagger: 3,
		width: "10px",
		height: "10px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
	  }; */


  (selected===true && props.isCorrect) ? color= 'green' : (selected && !props.isCorrect) ?color='red' :color='transparent' ;
 
  return (  
  <button className='option' 
       style={{ backgroundColor: color }}
      onClick={(e)=>props.clickHandler ( props.isCorrect, props.index ,props.value , props.question ,props.correct) }>
   {props.value}
   
   {/* <Confetti active={selected===true && props.isCorrect}config={config} ></Confetti> */}
   </button>
   

  )}

