import PropTypes from "prop-types";

export function Button({ variant, className, children, ...props }) {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
    const variantStyles = {
        solid: "bg-orange-600 text-white hover:bg-orange-700",
        outline: "border border-orange-600 text-orange-600 hover:bg-orange-50",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant] || ""} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(["solid", "outline"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    variant: "solid",
    className: "",
};