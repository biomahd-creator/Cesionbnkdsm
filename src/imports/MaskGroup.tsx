import imgVector1 from "figma:asset/9a761ead30116abd247dd95e51f94cdea6c55e2b.png";
import { imgVector } from "./svg-9whm8";

export default function MaskGroup() {
  return (
    <div className="relative size-full" data-name="Mask group">
      <div className="absolute h-[79.101px] left-[-34.52px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[34.516px_1.438px] mask-size-[256px_76.225px] top-[-1.44px] w-[327.91px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <img alt="" className="absolute block max-w-none size-full" height="79.101" src={imgVector1} width="327.91" />
      </div>
    </div>
  );
}