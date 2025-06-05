

const Nosotros = () => {
    return (
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/3">
                <h1 className="text-4xl font-black text-red-600 mb-4">¿Quiénes somos?</h1>
                <p className="text-lg text-gray-700">
                    Pasión por el entrenamiento. Compromiso con la calidad.
                </p>
            </div>
            <div className="md:w-2/3">
                <p className="text-xl text-gray-800 leading-relaxed">
                    <b>Sonnos Equipamiento</b> es una marca dedicada al diseño, fabricación y comercialización de equipos de gimnasio de alta calidad. Nuestro objetivo es brindar soluciones resistentes, funcionales y estéticamente profesionales tanto para centros de entrenamiento como para uso personal.
                    <br /><br />
                    Creemos en la importancia del movimiento y el bienestar físico, por eso trabajamos día a día para ofrecer productos que acompañen el progreso de cada persona en su camino de superación.
                </p>
                <ul className="list-disc list-inside mt-6 text-gray-700 text-lg">
                    <li>Equipos diseñados y fabricados en acero inoxidable de primera calidad.</li>
                    <li>Soluciones ergonómicas para entrenamiento funcional, fuerza y rehabilitación.</li>
                    <li>Asesoramiento personalizado para gimnasios y centros deportivos.</li>
                    <li>Presencia nacional con envíos a todo el país.</li>
                </ul>
            </div>
        </section>
    );
};

export default Nosotros;

