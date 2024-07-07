import Image from "next/image";
import Star from "@/assets/reviews/google-rating-star.svg";

export default function RatingStar() {
  return (
    <Image
      className="google__star w-4 h-4"
      src={Star}
      alt="Google Rating Star"
      width={15}
      height={15}
    />
  );
}
