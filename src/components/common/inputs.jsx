const Input = ({ label, error, ...rest }) => {
  return (
    <div className="form-group my-1">
      <label htmlFor={rest.name}>
        {label} {rest.required && <span className="text-danger">*</span>}
      </label>
      <input
        {...rest}
        id={rest.name}
        className={["form-control", rest.error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="invalid-feedback">{rest.error}</span>
    </div>
  );
};
export default Input;
