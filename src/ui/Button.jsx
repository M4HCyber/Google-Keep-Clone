function Button({ children, onClick, disabled, colored }) {
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
