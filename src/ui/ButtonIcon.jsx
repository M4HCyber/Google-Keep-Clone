function ButtonIcon({ size, children, type, disabled, onClick }) {
  const style = `cursor-pointer flex rounded-round hover:text-black`;

  if (size === "small")
    return (
      <button
        disabled={disabled}
        className={`${style} p-2 hover:bg-gray-100 text-[1.2rem]`}
        onClick={onClick}
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
      >
        {children}
      </button>
    );
  return (
    <button
      disabled={disabled}
      className={`${style} hover:bg-bg-grey-100 p-3 text-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
