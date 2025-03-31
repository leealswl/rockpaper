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
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9RrK_N2rWLPoHHcKxOwk0LL9kZ_WQ_2nekn_bEZOYsqp6_jWwPpiQV1RjNXXDoftCJA&usqp=CAU'
  },
  scissors :{
    name: 'Scissors',
    url : 'https://thumb.silhouette-ac.com/t/d9/d949570c3572d4173e309d96a0f9ff03_t.jpeg'
  },
  paper :{
    name: 'Paper',
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWG5ZPjwAItBdaR-dRdaI7cizXh-Z97w4RA&s'
  }
}

function App() {
  const [userSelect, setUserSelect]=useState(choice.rock)
  const [computerSelect, setComputerSelect]=useState(choice.scissors)
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
    } else if (user.name =="Rock") return computer.name=="Scissors"?"WIN":"LOSE"
    else if (user.name =="Scissors") return computer.name=="Paper"?"WIN":"LOSE"
    else if (user.name =="Paper") return computer.name=="Rock"?"WIN":"LOSE"
  }

  
  return (
    <div>
      <div className='main'>
        <Box title='you'item={userSelect} result={result} />
        <Box title='computer' item={computerSelect} result={result} />
      </div>
        <div className='main'>
          <button onClick={()=>play('scissors')}>가위</button>
          <button onClick={()=>play('rock')}>바위</button>
          <button onClick={()=>play('paper')}>보</button>
        </div>
    </div>
    )
     }

     export default App;