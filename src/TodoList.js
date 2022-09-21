import react from "react";

function TodoList(props){
    return(
        <section className="TodoListSection">
            <ul className='TodoListSection__lista'>
                {props.children}
            </ul>
        </section>
    )
};

export { TodoList};