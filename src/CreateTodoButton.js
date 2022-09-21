import react from "react";

function CreateTodoButtom() {
    const onClickButton =(msg) =>{
        alert(msg);
    }
  return <button className="CreateTodoButton"
  onClick={()=>onClickButton('aqui se debera abrir el modal')}
  >
    +
    </button>;
}
export { CreateTodoButtom };
