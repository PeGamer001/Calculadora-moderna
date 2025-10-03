import React, {useState} from "react";


function Counter() {
    const [contador, setContador] = useState(0)

    //Função que é chamada pra incrementar o contador

    const incrementar = () => {
        // Incrementar mais 1 ao contador
        setContador(contador + 500);

    }

    return (
        <div>
            <h1>Contagem: {contador}</h1>

            <button onClick={incrementar}>Clique em mim</button>
        </div>
    );
}
export default Counter;