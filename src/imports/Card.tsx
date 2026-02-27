import svgPaths from "./svg-jvtmccwc1z";

function Icon() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2020_79)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2020_79">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[101.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon />
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.3px] w-[62px] whitespace-pre-wrap">14 facturas</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2020_74)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2020_74">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#00c951] flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon1 />
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.3px] w-[72px] whitespace-pre-wrap">4 pagadores</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[221.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Badge />
        <Badge1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[123.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00c951] text-[12px] text-center tracking-[0.3px]">Limpiar selección</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between pr-[-6.43px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.35px]">Monto Nominal</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.35px]">$20.450.000</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[111.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[0.35px]">A Recibir (Aprox)</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[14.281px] relative shrink-0 w-[111.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[14.286px] left-0 not-italic text-[#737373] text-[10px] top-[0.5px] tracking-[0.25px]">Luego de descuentos</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[34.281px] relative shrink-0 w-[111.586px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[131.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#00c951] text-[24px] top-px tracking-[-0.6px]">$19.902.100</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[43.281px] items-end justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#737373] border-solid border-t inset-0 pointer-events-none" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67.281px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[215px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00c951] h-[40px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,201,81,0.2),0px_4px_6px_0px_rgba(0,201,81,0.2)] shrink-0 w-[253px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[126.5px] not-italic text-[14px] text-center text-white top-[11px] tracking-[0.35px]">Confirmar Operación</p>
      <Icon2 />
    </div>
  );
}

function FactoringSelectionPage() {
  return (
    <div className="h-[226px] relative shrink-0 w-[487px]" data-name="FactoringSelectionPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pt-[20px] px-[20px] relative size-full">
        <Container />
        <Container2 />
        <Button1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <FactoringSelectionPage />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}