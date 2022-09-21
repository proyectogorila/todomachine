import react from "react";

function DivPrincipal(Contenido){
    return(
        <div className="DivPrincipal">
            {Contenido.children}
    </div>
    );
}

export {DivPrincipal};