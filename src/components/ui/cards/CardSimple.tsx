export function CardSimple() {
  return (
    <div className="w-[350px]">
      <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span>
          <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
        </span>
        <span className="backdrop absolute inset-px rounded-[12px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
        <div className="flex flex-col gap-3 z-10 text-neutral-400">
          <h3 className="text-xl font-semibold tracking-tight select-none">
            Card Title
          </h3>
          <p className="text-sm tracking-tight leading-6 select-none">
            Sunt cumque qui aut totam iure est sed sit dicta. Quia numquam
            accusantium quia reiciendis adipisci aliquam sit sint.
          </p>
        </div>
      </div>
    </div>
  );
}
