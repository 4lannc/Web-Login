 
const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, classname = "bg-red-600 w-full" } = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white hover:bg-black`}
        type="submit"
      >
        {children}
      </button>
    );
  };
  
export default Button;