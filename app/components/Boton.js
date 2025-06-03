const Boton = ({ children, className = "", ...args }) => {
    return (
        <button
            type="button"
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-bold 
                        text-white bg-red-600 border border-red-600 
                        rounded-lg transition duration-300 
                        hover:bg-white hover:text-red-600 hover:border-red-600 
                        focus:outline-none ${className}`}
            {...args}
        >
            {children}
        </button>
    );
};

export default Boton;
