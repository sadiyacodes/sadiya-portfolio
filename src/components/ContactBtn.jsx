import ShimmerButton from "@/components/ui/shimmer-button";

export function ShimmerButtonDemo2() {
  return (
    <div className="z-10 flex min-h-20 items-center justify-center">
      <ShimmerButton className="shadow-2xl w-48">
 
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-pink lg:text-lg">
          Contact
        </span>&nbsp; &nbsp;
        <span> <i className=" text-pink fa-solid fa-arrow-right"></i></span>
      </ShimmerButton>
    </div>
  );
}
