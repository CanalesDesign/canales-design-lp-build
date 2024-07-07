import Image from "next/image";
import { IsotypeGallery } from "@/data/isotype-data";

export default function IsotypeCard(props: any) {
  return (
    <div className="isotype-card grid gap-6">
      {IsotypeGallery.map((item) => {
        return (
          <div
            className="isotype-card__wrapper bg-primary-subtle h-full aspect-square flex items-center justify-center px-8 cursor-crosshair relative rounded-lg"
            key={item.id}>
            <Image
              className="hover:opacity-0 hover:hidden transition-all ease-in-out duration-300 w-full h-auto"
              src={item.isotype}
              alt={item.alt}
            />
            <div className="opacity-0 hover:opacity-100 overlay bg-primary-subtle absolute top-0 bottom-0 left-0 right-0 h-full w-full flex items-center justify-center transition-all ease-in-out duration-[400ms]">
              <Image src={item.hover} alt={item.alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
