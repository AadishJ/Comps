import classNames from "classnames";

function Button ( { children, primary, secondary, danger, success, warning, outlined, rounded, ...rest  } )
{
    const classes = classNames( rest.className, "flex items-center gap-1 m-1 px-10 border",{
        "bg-blue-500 text-white border-blue-900": primary,
        "bg-gray-500 text-black border-black ": secondary,
        "bg-green-500 text-green-900 border-green-900 ": success,
        "bg-red-500 text-red-900 border-red-900 ": danger,
        "bg-yellow-500 text-yellow-900 border-yellow-900 ": warning,
        "rounded": rounded,
        "bg-white": outlined,
    } );
    
    return (
        <button {...rest} className={classes}>
            { children }
        </button>
    );
}

export default Button;