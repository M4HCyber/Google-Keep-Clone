function Empty({ icon, children }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-bg-grey-100 text-8xl">{icon}</span>
      <h2 className="text-xl">{children}</h2>
    </div>
  );
}

export default Empty;
