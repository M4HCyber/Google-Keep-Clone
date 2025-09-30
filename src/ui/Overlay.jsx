function Overlay({ children, type }) {
  if (type === "delete")
    return (
      <div className="absolute top-0 left-0 z-20 flex h-dvh w-full items-center justify-center bg-gray-500/70">
        {children}
      </div>
    );
  return (
    <div className="absolute top-0 left-0 z-10 flex h-dvh w-full items-center justify-center bg-gray-500/50">
      {children}
    </div>
  );
}

export default Overlay;
