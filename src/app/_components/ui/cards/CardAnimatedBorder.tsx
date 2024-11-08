export function CardAnimatedBorder() {
  return (
    <div className="w-full max-w-[350px]">
      <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200" />
        <div className="z-10 space-y-2">
          <h3 className="text-xl font-semibold text-neutral-200">Luxe</h3>
          <p className="text-sm leading-[1.5] text-neutral-400">
            Explore the new website that simplifies the creation of
            sophisticated dark mode components.
          </p>
        </div>
      </div>
    </div>
  );
}
