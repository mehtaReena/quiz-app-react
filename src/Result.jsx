

import { useHistory } from "react-router-dom";


export default function Result(){

    let history = useHistory();
    let choice=[];
    let question=[];
    let answer=[];
    let result= history.location.state.finalOutput;
    let score=0;

   
   
    console.log(history.location.state.finalOutput)
     // eslint-disable-next-line
    result.map((item)=>{
      choice.push(item.choice);
      question.push (item.question);
      answer.push(item.correct);
      if(item.choice === item.correct){
       score++;
      }

  })

    
    return(
        
        <div className='result-container'>
         <h1> Total Scores: {score}</h1>
         <div className='result'>
             <div className='ques-container'>
            {question.map((item)=>
               <div className='res-question'>{item}</div>
             )} 
             </div>  

             <div className='ques=container'>
             {answer.map((item)=>
              <div className='answer'>{item}</div>
             )}
             </div>

                <div className='ques=container'>
             {result.map((item)=>
              <div className='choice'
              style={{ backgroundColor: (item.choice === item.correct) ?'green' :  'red'}}
              
              >{item.choice}</div>
             )}
             </div>
            
         </div>
        


        </div>
       
    )
}