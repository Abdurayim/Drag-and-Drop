import React,{useState} from "react";
import Header from "./components/Header";

function App() {
  const [boards,setBoards] = useState([
     {id:1, title:"New", cards:[{id:1, title:"Expertise", position:"Position.name"},{id:2, title:"Expertise", position:"Position.name"},{id:3, title:"Expertise", position:"Position.name"}]},
     {id:2, title:"Current", cards:[{id:4, title:"Expertise", position:"Position.name"},{id:5, title:"Expertise", position:"Position.name"},{id:6, title:"Expertise", position:"Position.name"}]},
     {id:3, title:"Closed", cards:[{id:7, title:"Expertise", position:"Position.name"},{id:8, title:"Expertise", position:"Position.name"},{id:9, title:"Expertise", position:"Position.name"}]},
     {id:4, title:"Archeive", cards:[{id:10, title:"Expertise", position:"Position.name"},{id:11, title:"Expertise", position:"Position.name"},{id:12, title:"Expertise", position:"Position.name"}]}
  ]);

  const [currentBoard,setCurrentBoard] = useState(null);
  const [currentCard,setCurrentCard] = useState(null);


  function dragOverHandler(e){
    e.preventDefault();
    if(e.target.className === 'card'){
      e.target.style.boxShadow = '0 4px 3px blue'
    }
  };
  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none';
  };
  function dragStartHandler(e,board,card){
      setCurrentBoard(board);
      setCurrentCard(card);
  };
  function dragEndHandler(e){
    e.target.style.boxShadow = 'none';
  }
  function dropHandler(e,board,card){
    e.preventDefault();
    const currentIndex = currentBoard.cards.indexOf(currentCard);
    currentBoard.cards.splice(currentIndex,1);
    const dropIndex = board.cards.indexOf(card);
    board.cards.splice(dropIndex + 1,0, currentCard);
    setBoards(boards.map( b =>{
      if(b.id === board.id){
          return board
      }
      if(b.id === currentBoard.id){
          return currentBoard
      }
          return b
    }))
      e.target.style.boxShadow = 'none';
  }
  function dropCardHandler(e, board){
    board.cards.push(currentCard)
    const currentIndex = currentBoard.cards.indexOf(currentCard);
    currentBoard.cards.splice(currentIndex,1)
    setBoards(boards.map( b =>{
      if(b.id === board.id){
          return board
      }
      if(b.id === currentBoard.id){
          return currentBoard
      }
          return b
    }))
      e.target.style.boxShadow = 'none';
  }
  return (
    <div className="App">
      <Header/>
    <div className="main">
      {boards.map(board =>
        <div className="board"
        onDragOver={(e)=>dragOverHandler(e)}
        onDrop={(e)=>dropCardHandler(e,board)}
        >
          <div className="chead"><h1>{board.title}</h1></div>
           {board.cards.map(card=>
         <div 
             onDragOver={(e)=>dragOverHandler(e)}
             onDragLeave={(e)=>dragLeaveHandler(e)}
             onDragStart={(e)=>dragStartHandler(e,board,card)}
             onDragEnd={(e)=>dragEndHandler(e)}
             onDrop={(e)=>dropHandler(e,board,card)}
             draggable={true}
             className='card'>
             <h3>{card.title}</h3>
             <p>{card.position}</p>
             <div 
             className='features'>other features</div>
             <div className='others'>Recruiter</div>
         </div>

              
           )}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
