import './App.css';
import Box from './component/Box';
import { useState } from 'react'


// 박스 두개(타이틀(you, computer), 사진정보(가위바위보), 결과값(win,lose,tie))
// 박스 밑에 버튼3개 (짬께뽀)
// 버튼을 클릭하면 클릭한 값이 박스에 보임
// 컴퓨터는 랜덤하게 아이템 선택이됨
// 3번4번의 결과를 가지고 누가 이겼는지 승패를 따짐
// 지면 빨간 비기면 검정 이기면 초록
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9RrK_N2rWLPoHHcKxOwk0LL9kZ_WQ_2nekn_bEZOYsqp6_jWwPpiQV1RjNXXDoftCJA&usqp=CAU
//https://thumb.silhouette-ac.com/t/d9/d949570c3572d4173e309d96a0f9ff03_t.jpeg
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWG5ZPjwAItBdaR-dRdaI7cizXh-Z97w4RA&s

const choice = {
  rock :{
    name: 'Rock',
    url : 'https://thumb.silhouette-ac.com/t/69/69ffced83032519ca680dc3058b9ca26_t.jpeg'
  },
  scissors :{
    name: 'Scissors',
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO15LCdl90ZBY2yMmTCAtmCPG7vnTtt8EVNML8n4nfK6DQImG4iu4Mu09Ab78JlIaO3ZQ&usqp=CAU'
  },
  paper :{
    name: 'Paper',
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPmYxW8e7aHcwazHLUSFCXbhrui5ysttNPcoWXIrc1JBoU5JJ736k9T07ackM1RMt5SA&usqp=CAU'
  }
}
const initialImage  = {
  question :{
    name: 'Questtion',
    url : 'data:image/png;base64,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'
  }
}

function App() {
  const [userSelect, setUserSelect]=useState(initialImage.question)
  const [computerSelect, setComputerSelect]=useState(initialImage.question)
  const [result, setResult]=useState("")


  const play=(userChoice)=>{
    // console.log("온클릭",userChoice)
    setUserSelect(choice[userChoice])
    let computerChoice=randomplay()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  }

  const randomplay=()=>{
    let randomArray=Object.keys(choice)
    // console.log("랜덤어레이",randomArray)
    let randomChoice =Math.floor(Math.random()*randomArray.length)
    console.log("랜덤012",randomChoice)
    let final = randomArray[randomChoice]
    console.log("파이널",final)
    return choice[final]
  }

  const judgement=(user,computer)=>{
    // console.log("유저",user,"컴",computer)
    if(user.name===computer.name){
      return "TIE"
    } else if (user.name ==="Rock") return computer.name==="Scissors"?"WIN":"LOSE"
    else if (user.name ==="Scissors") return computer.name==="Paper"?"WIN":"LOSE"
    else if (user.name ==="Paper") return computer.name==="Rock"?"WIN":"LOSE"
  }

  const resetGame = () => {
    setUserSelect(initialImage.question);
    setComputerSelect(initialImage.question);
    setResult("");
  };
  
  return (
    <div>

      <div className="main-name">
        <h1>가위 바위 보 게임🎮</h1>
      </div>
      <div className='main'>
        <Box title='you'item={userSelect} result={result} />
        <Box title='computer' item={computerSelect} result={result} />
      </div>
        <div className='button-container'>
          <button onClick={()=>play('scissors')}>scissors</button>
          <button onClick={()=>play('rock')}>rock</button>
          <button onClick={()=>play('paper')}>paper</button>
        </div>
        <div className="reset-container">
          <button onClick={resetGame}>RESET</button>
        </div>
    </div>
    )
     }

     export default App;