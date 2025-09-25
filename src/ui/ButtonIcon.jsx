function ButtonIcon({ size, children, fit, type, disabled, onClick, onBlur }) {
  const style = `cursor-pointer flex rounded-round hover:text-black`;

  if (size === "small")
    return (
      <button
        disabled={disabled}
        className={`${style} p-2 hover:bg-gray-100 text-[1.2rem]`}
        onClick={onClick}
        onBlur={onBlur}
      >
        {children}
      </button>
    );

  if (size === "smaller" && fit)
    return (
      <button
        disabled={disabled}
        className={`${style} h-fit p-2 hover:bg-gray-100 text-[1rem]`}
        onClick={onClick}
        onBlur={onBlur}
      >
        {children}
      </button>
    );

  if (size === "smaller")
    return (
      <button
        disabled={disabled}
        className={`${style} p-2 hover:bg-gray-100 text-[1rem]`}
        onClick={onClick}
        onBlur={onBlur}
      >
        {children}
      </button>
    );

  if (type)
    return (
      <button
        disabled={disabled}
        className={`${style} p-2 hover:bg-gray-300 text-2xl`}
        onClick={onClick}
        onBlur={onBlur}
      >
        {children}
      </button>
    );
  return (
    <button
      disabled={disabled}
      className={`${style} hover:bg-bg-grey-100 p-3 text-2xl`}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
