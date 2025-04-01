import PropTypes from "prop-types";

export function Input({ type, className, ...props }) {
    return (
        <input
            type={type}
            className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
            {...props}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
};

Input.defaultProps = {
    type: "text",
    className: "",
};
