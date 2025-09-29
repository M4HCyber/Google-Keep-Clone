function Overlay({ children }) {
  return (
    <div className="absolute top-0 left-0 z-10 flex h-dvh w-full items-center justify-center bg-gray-500/50">
      {children}
    </div>
  );
}

export default Overlay;
