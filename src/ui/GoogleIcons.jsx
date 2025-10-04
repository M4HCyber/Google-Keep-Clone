function GoogleIcons({ imgSrc, children, style }) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-2 hover:opacity-80">
      <img src={imgSrc} style={style} alt={imgSrc} className="w-full" />
      <p className="text-sm font-medium">{children}</p>
    </div>
  );
}
export default GoogleIcons;
