import ShimmerButton from "@/components/ui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex min-h-20  items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span><i class=" text-white fa-solid fa-file-arrow-down"></i></span> &nbsp; &nbsp;
        <span className="whitespace-pre-wrap text-center text-white text-sm font-medium leading-none tracking-tight  lg:text-lg">
          Download Resume
        </span>
      </ShimmerButton>
    </div>
  );
}
