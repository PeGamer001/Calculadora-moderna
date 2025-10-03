import { useState } from "react";
import { evaluate } from "mathjs"

export function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const buttonClassName = "justify-center items-center";


    const hoverClassName =
    "hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]";

    const handleClick = (value) => {
        setInput(input + value);
    }

const handleCalculate = () => {
    try {
        if (!input) return;
        setResult(evaluate(input).toString());
    } catch (error) {
        setResult("Error");
    }
};

    // Função que limpa o display inteiro
    const handleClear = () => {
        setInput("");
        setResult("");
    }

    // Função que deleta parcialmente os numeros
    const handleDelete = () => setInput((prev) => prev.slice(0, -1));


    return (
        <div className="grid shadow-md w-[360px] text-2xl font-bold">

            {/* Leitor */}
            <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">{input}</span>
                <div className="flex justify-between w-full items-center text-5xl">
                    <span>=</span>
                    <span className="flex h-fit">{result}</span>
                </div>
            </div>

            {/* Botões */}
            <div className="bg-white grow h-[480px] grid grid-cols-4">

                {/* Botão Clear */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#FEFAE0]`}
                    onClick={handleClear}
                >
                    C
                </button>

                 {/* Botão de Adição */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("+")}
                >
                    +
                </button>

                  {/* Botão de subtração */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("-")}
                >
                    -
                </button>

                {/* Botão de Divisão */}
                <button className={`${buttonClassName} bg-[#E9EDC9] text-[#D4A373]`}
                        onClick={() => handleClick("/")}>
                            /
                </button>

                {/* Botão 7 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("7")}
                >
                    7
                </button>

                 {/* Botão 8 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("8")}
                >
                    8
                </button>

                {/* Botão 9 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("9")}
                >
                    9
                </button>

                {/* Botão de Multiplicação */}
                <button className={`${buttonClassName} bg-[#E9EDC9]`}
                    onClick={() => handleClick("*")}>
                        *
                </button>

                {/* Botão 4 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("4")}
                >
                    4
                </button>

                {/* Botão 5 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("5")}
                >
                    5
                </button>

                {/* Botão 6 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#E9EDC9] text-[#D4A373]`}
                    onClick={() => handleClick("6")}
                >
                    6
                </button>

                {/* Botão de Molde */}
                <div className={`${buttonClassName} bg-[#E9EDC9]`} />

                {/* Botão 1 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#E9EDC9] text-[#D4A373]`}
                    onClick={() => handleClick("1")}
                >
                    1
                </button>

                {/* Botão 2 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#E9EDC9] text-[#D4A373]`}
                    onClick={() => handleClick("2")}
                >
                    2
                </button>

                {/* Botão 3 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#E9EDC9] text-[#D4A373]`}
                    onClick={() => handleClick("3")}
                >
                    3
                </button>

                {/* Botão de Molde */}
                <div className={`${buttonClassName} bg-[#E9EDC9]`} />

                {/* Botão . */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm bg-[#E9EDC9] text-[#D4A373]`}
                    onClick={() => handleClick(".")}
                >
                    .
                </button>

                {/* Botão 0 */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={() => handleClick("0")}
                >
                    0
                </button>

                {/* Botão de Apagar */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm `}
                    onClick={handleDelete}
                >
                    DEL
                </button>

                {/* Botão de Resultado */}
                <button
                    className={`${buttonClassName} ${hoverClassName} text-sm`}
                    onClick={handleCalculate}
                >
                    =
                </button>

                

            </div>

        </div>
    );
}

