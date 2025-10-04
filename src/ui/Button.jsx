function Button({
  children,
  bgColor,
  textColor,
  border,
  onClick,
  disabled,
  colored,
  color,
  borderColor,
}) {
  if (color)
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer rounded-[5px] px-5 py-1 text-sm ${color} hover:bg-gray-100`}
      >
        {children}
      </button>
    );
  if (bgColor || border || textColor || borderColor)
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer rounded-3xl px-5 py-2 text-sm ${bgColor} text-${textColor} ${border} ${borderColor} hover:bg-gray-100`}
      >
        {children}
      </button>
    );
  if (colored === "colored")
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="cursor-pointer rounded-[5px] px-5 py-1 text-sm text-amber-300 hover:bg-gray-700"
      >
        {children}
      </button>
    );
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="cursor-pointer rounded-[5px] px-5 py-1 text-sm text-black hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

export default Button;
