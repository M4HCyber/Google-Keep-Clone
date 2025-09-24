function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-sm text-black cursor-pointer hover:bg-bg-grey-100 py-1 px-5 rounded-[5px]"
    >
      {children}
    </button>
  );
}

export default Button;
