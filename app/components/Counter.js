"use client"

import Image from "next/image";

const { useState } = require("react")

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div>
                <Image src="/images/pecho-plano.jpg" width={150} height={150} alt="pecho-plano"/>
            </div>

            <div>
                <Image src="/images/pecho-inclinado.jpg" width={150} height={150} alt="pecho-inclinado"/>
            </div>
                        <div>
                <Image src="/images/espalda-apoyador.png" width={150} height={150} alt="espalda-apoyador"/>
            </div>
                        <div>
                <Image src="/images/espalda-multifuncion.png" width={150} height={150} alt="espalda-multifuncion"/>
            </div>
                        <div>
                <Image src="/images/piernas-cuadriceps.png" width={150} height={150} alt="piernas-cuadriceps"/>
            </div>
                        <div>
                <Image src="/images/piernas-isquios.jpg" width={150} height={150} alt="piernas-isquios"/>
            </div>
        </>
    )
}

export default Counter