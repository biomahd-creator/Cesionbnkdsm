import svgPaths from "./svg-dupidpjc8w";

function Container() {
  return <div className="absolute h-[2379px] left-0 top-0 w-[256px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#1c2d3a] text-[30px] top-px tracking-[0.75px]">Dashboard Empresarial</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Gestiona tu liquidez y monitorea tus operaciones de factoring en tiempo real</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px tracking-[0.6px]">Dashboard C-Financia</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Bienvenido, gestiona tu liquidez en tiempo real</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56px] relative shrink-0 w-[301.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32c00400} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f10900} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[96.5px] not-italic text-[#1c2d3a] text-[14px] text-center top-[9px] tracking-[0.35px]">Nueva Solicitud</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3155f180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pea6a680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00c951] h-[36px] relative rounded-[8px] shrink-0 w-[155.359px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[94px] not-italic text-[14px] text-center text-white top-[9px] tracking-[0.35px]">Cargar Factura</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[324.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Cupo Disponible</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-[2px] pb-[18px] pt-[24px] px-[24px] top-[2px] w-[396.5px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#00c951] text-[30px] top-px tracking-[0.75px]">$180 M</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">Utilizado</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[12px] top-0 tracking-[0.3px] w-[39px] whitespace-pre-wrap">64.0%</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container13() {
  return <div className="bg-[#00c951] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-[rgba(0,201,81,0.2)] content-stretch flex flex-col h-[8px] items-start overflow-clip pl-[-125.46px] pr-[125.46px] relative rounded-[33554400px] shrink-0 w-full" data-name="Primitive.div">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <PrimitiveDiv />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[91px] whitespace-pre-wrap">de $500 M total</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[96px] items-start left-[26px] top-[88px] w-[348.5px]" data-name="Container">
      <Paragraph2 />
      <Container11 />
      <Paragraph3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[1] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(152.33deg, rgba(0, 201, 81, 0.1) 0%, rgba(0, 201, 81, 0.05) 100%)" }}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,201,81,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[334.5px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32c00400} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f10900} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Facturas Activas</p>
      <Icon2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[398.5px]" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#1c2d3a] text-[30px] top-px tracking-[0.75px]">12</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] top-px tracking-[0.35px]">+3</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[48.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">este mes</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[25px] top-[87px] w-[350.5px]" data-name="Container">
      <Paragraph4 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white col-[2] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[334.5px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 1.33333V14.6667" id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5120400} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Liquidez del Mes</p>
      <Icon4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[398.5px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#00a63e] text-[30px] top-px tracking-[0.75px]">$145 M</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p154e6c80} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22879fc0} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] top-px tracking-[0.35px]">+15%</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[84.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">vs mes anterior</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[25px] top-[87px] w-[350.5px]" data-name="Container">
      <Paragraph5 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white col-[3] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[334.5px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72755)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72755">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">En Proceso</p>
      <Icon6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[398.5px]" data-name="Container">
      <Heading6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#f54900] text-[30px] top-px tracking-[0.75px]">3</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72745)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72745">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[122.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">solicitudes pendientes</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Text6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[25px] top-[87px] w-[350.5px]" data-name="Container">
      <Paragraph6 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white col-[4] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[210px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container14 />
      <Container18 />
      <Container22 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <Icon8 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#1c2d3a] text-[16px] top-[3px] tracking-[0.4px]">Evolución de Liquidez</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Últimos 5 meses - Liquidez vs Comisiones</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[74px] left-px pt-[24px] px-[24px] top-px w-[823px]" data-name="Container">
      <Heading7 />
      <Paragraph7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.67%_0.65%_19.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[-0.21%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 705 237">
          <g id="Group">
            <path d="M0 236.5H705" id="Vector" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 177.5H705" id="Vector_2" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 118.5H705" id="Vector_3" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 59.5H705" id="Vector_4" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M0 0.5H705" id="Vector_5" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[1.67%_0.65%_19.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[0_-0.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 706 236">
          <g id="Group">
            <path d="M0.5 0V236" id="Vector" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M176.75 0V236" id="Vector_2" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M353 0V236" id="Vector_3" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M529.25 0V236" id="Vector_4" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
            <path d="M705.5 0V236" id="Vector_5" opacity="0.1" stroke="var(--stroke-0, #CCCCCC)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[1.67%_0.65%_19.67%_8.39%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.67%_0.65%_19.67%_8.39%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[9.04%_0.65%_19.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[-0.23%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 705.044 214.374">
          <g id="Group">
            <path d={svgPaths.pcec7100} fill="url(#paint0_linear_1302_72506)" id="recharts-area-:r1igd:" />
            <path d={svgPaths.p2858ba00} id="Vector" stroke="var(--stroke-0, #84CC16)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1302_72506" x1="0.017776" x2="0.017776" y1="0.499317" y2="214.374">
              <stop offset="0.05" stopColor="#84CC16" stopOpacity="0.8" />
              <stop offset="0.95" stopColor="#84CC16" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[9.04%_0.65%_19.67%_8.39%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[78.76%_0.65%_19.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[-10.59%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 705.001 5.22">
          <g id="Group">
            <path d={svgPaths.p21a5700} fill="url(#paint0_linear_1302_72683)" id="recharts-area-:r1ige:" />
            <path d={svgPaths.p16ee7f00} id="Vector" stroke="var(--stroke-0, #EF4444)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1302_72683" x1="0.000629787" x2="0.000629787" y1="0.5" y2="5.22">
              <stop offset="0.05" stopColor="#EF4444" stopOpacity="0.8" />
              <stop offset="0.95" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[78.76%_0.65%_19.67%_8.39%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[9.04%_0.65%_19.67%_8.39%]" data-name="Group">
      <Group5 />
      <Group7 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[80.33%_91.61%_17.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[80.33%_68.87%_17.67%_31.13%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[80.33%_46.13%_17.67%_53.87%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[80.33%_23.39%_17.67%_76.61%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[80.33%_0.65%_17.67%_99.35%]" data-name="Group">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <g id="Group">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[80.33%_0.65%_17.67%_8.39%]" data-name="Group">
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[80.33%_0.65%_17.67%_8.39%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[80.33%_0.65%_17.67%_8.39%]" data-name="Group">
      <div className="absolute inset-[80.33%_0.65%_19.67%_8.39%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 705 1">
            <path d="M0 0.5H705" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group11 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[80.33%_91.61%_19.67%_7.61%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[60.67%_91.61%_39.33%_7.61%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[41%_91.61%_59%_7.61%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[21.33%_91.61%_78.67%_7.61%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[1.67%_91.61%_98.33%_7.61%]" data-name="Group">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <g id="Group">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[1.67%_91.61%_19.67%_7.61%]" data-name="Group">
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[1.67%_91.61%_19.67%_7.61%]" data-name="Group">
      <Group20 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[1.67%_91.61%_19.67%_7.61%]" data-name="Group">
      <div className="absolute inset-[1.67%_91.61%_19.67%_8.39%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 236">
            <path d="M0.5 0V236" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group19 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[1.67%_0.65%_17.67%_7.61%]" data-name="Group">
      <Group10 />
      <Group18 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[81.84%_90.19%_13.16%_6.97%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_90.19%_13.16%_6.97%] leading-[normal] not-italic text-[#666] text-[12px] text-center">Ene</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[81.84%_67.52%_13.16%_29.77%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_67.52%_13.16%_29.77%] leading-[normal] not-italic text-[#666] text-[12px] text-center">Feb</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[81.84%_44.71%_13.16%_52.45%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_44.71%_13.16%_52.45%] leading-[normal] not-italic text-[#666] text-[12px] text-center">Mar</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[81.84%_22.03%_13.16%_75.26%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_22.03%_13.16%_75.26%] leading-[normal] not-italic text-[#666] text-[12px] text-center">Abr</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[81.84%_0.41%_13.16%_96.49%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_0.41%_13.16%_96.49%] leading-[normal] not-italic text-[#666] text-[12px] text-center">May</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[81.84%_0.41%_13.16%_6.97%]" data-name="Group">
      <Group28 />
      <Group29 />
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[77.75%_92.65%_17.25%_0.26%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[77.75%_92.65%_17.25%_0.26%] leading-[normal] not-italic text-[#666] text-[12px] text-right">{`$&nbsp;0`}</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[58.09%_92.65%_36.91%_-2.06%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.09%_92.65%_36.91%_-2.06%] leading-[normal] not-italic text-[#666] text-[12px] text-right">{`$40&nbsp;M`}</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[38.42%_92.65%_56.58%_-2.06%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38.42%_92.65%_56.58%_-2.06%] leading-[normal] not-italic text-[#666] text-[12px] text-right">{`$80&nbsp;M`}</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[18.75%_92.65%_76.25%_-2.71%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[18.75%_92.65%_76.25%_-2.71%] leading-[normal] not-italic text-[#666] text-[12px] text-right">{`$120&nbsp;M`}</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[1.42%_92.65%_93.58%_-2.71%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[1.42%_92.65%_93.58%_-2.71%] leading-[normal] not-italic text-[#666] text-[12px] text-right">{`$160&nbsp;M`}</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[1.42%_92.65%_17.25%_-2.71%]" data-name="Group">
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[1.42%_0.41%_13.16%_-2.71%]" data-name="Group">
      <Group27 />
      <Group33 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[775px]" data-name="Icon">
      <Group />
      <Group4 />
      <Group9 />
      <Group26 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[14px] top-[7.13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[18px] top-[2px] w-[153.281px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#ef4444] text-[16px] text-center tracking-[0.4px]">Comisiones Pagadas</p>
    </div>
  );
}

function Ra() {
  return (
    <div className="absolute h-[24px] left-[210.91px] top-0 w-[171.281px]" data-name="RA3">
      <Icon10 />
      <Text7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[14px] top-[7.13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #84CC16)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[18px] top-[2px] w-[133.906px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#84cc16] text-[16px] text-center tracking-[0.4px]">Liquidez Obtenida</p>
    </div>
  );
}

function Ra1() {
  return (
    <div className="absolute h-[24px] left-[392.19px] top-0 w-[151.906px]" data-name="RA3">
      <Icon11 />
      <Text8 />
    </div>
  );
}

function Lc() {
  return (
    <div className="absolute h-[24px] left-[5px] top-[271px] w-[765px]" data-name="Lc3">
      <Ra />
      <Ra1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[99px] w-[775px]" data-name="Container">
      <Icon9 />
      <Lc />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white col-[1] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1302_72687)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72687">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <Icon12 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#1c2d3a] text-[16px] top-[3px] tracking-[0.4px]">Estado de Facturas</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Distribución por estado actual</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[74px] left-px pt-[24px] px-[24px] top-px w-[823px]" data-name="Container">
      <Heading8 />
      <Paragraph8 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-1/2 left-[58.82%] right-[26.8%] top-[20.43%]" data-name="Group">
      <div className="absolute inset-[-0.94%_-0.9%_-0.68%_-1.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.9666 75.1134">
          <g id="Group">
            <path d={svgPaths.p1b843400} fill="var(--fill-0, #4ADE80)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[14.8%_37.44%_70.18%_53.24%]" data-name="Group">
      <div className="absolute inset-[-1.58%_-1.91%_-1.84%_-1.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4627 38.8493">
          <g id="Group">
            <path d={svgPaths.p1ab1c800} fill="var(--fill-0, #FBBF24)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[14%_45.94%_57.12%_27.85%]" data-name="Group">
      <div className="absolute inset-[-0.69%_-0.57%_-0.87%_-0.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.905 73.3286">
          <g id="Group">
            <path d={svgPaths.p3aefbc00} fill="var(--fill-0, #84CC16)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[40.53%_26.82%_14%_26.8%]" data-name="Group">
      <div className="absolute inset-[-0.54%_-0.29%_-0.44%_-0.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.962 114.794">
          <g id="Group">
            <path d={svgPaths.p23d03400} fill="var(--fill-0, #60A5FA)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[14%_26.8%]" data-name="Group">
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[14%_26.8%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[14%_26.8%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[388px]" data-name="Icon">
      <Group39 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[250px] left-0 top-0 w-[388px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Container37() {
  return <div className="bg-[#4ade80] rounded-[33554400px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Aprobadas</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[89.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container37 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[25.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">8</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Text10 />
    </div>
  );
}

function Container40() {
  return <div className="bg-[#fbbf24] rounded-[33554400px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">En revisión</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container40 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[25.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Text12 />
    </div>
  );
}

function Container43() {
  return <div className="bg-[#84cc16] rounded-[33554400px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Desembolsadas</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container43 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[29.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">12</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Text14 />
    </div>
  );
}

function Container46() {
  return <div className="bg-[#60a5fa] rounded-[33554400px] shrink-0 size-[12px]" data-name="Container" />;
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Pagadas</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container46 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">28</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Text16 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[124px] items-start left-[411.5px] top-[63px] w-[363.5px]" data-name="Container">
      <Container35 />
      <Container38 />
      <Container41 />
      <Container44 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[250px] left-[25px] top-[99px] w-[775px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white col-[2] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container26() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[424px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container30 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <Icon14 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#1c2d3a] text-[16px] top-[3px] tracking-[0.4px]">Próximos Vencimientos</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Facturas que vencen en los próximos 30 días</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[44px] relative shrink-0 w-[332.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading9 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[88.641px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Ver todas</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-[1] content-stretch flex items-center justify-between relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container50 />
      <Button2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_44fr)_minmax(0,_1fr)] h-[74px] left-px pb-[6px] pt-[24px] px-[24px] top-px w-[1672px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Empresa ABC S.A.S.</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[95.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-001</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Text17 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[145px] whitespace-pre-wrap">Monto: $ 25.000.000</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container54 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[65.86px] not-italic text-[#52525b] text-[14px] text-right top-px tracking-[0.35px] w-[41px] whitespace-pre-wrap">5 días</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] text-right tracking-[0.3px]">para vencer</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[36px] relative shrink-0 w-[65.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container56 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-white h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container53 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Comercial XYZ Ltda.</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[97.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-002</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Text18 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[142px] whitespace-pre-wrap">Monto: $ 18.000.000</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container59 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[66.08px] not-italic text-[#52525b] text-[14px] text-right top-px tracking-[0.35px] w-[47px] whitespace-pre-wrap">12 días</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] text-right tracking-[0.3px]">para vencer</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[36px] relative shrink-0 w-[65.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-white h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container58 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[132.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Distribuidora 123</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[97.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-003</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
      <Text19 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[145px] whitespace-pre-wrap">Monto: $ 32.000.000</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container64 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[66.28px] not-italic text-[#ef4444] text-[14px] text-right top-px tracking-[0.35px] w-[41px] whitespace-pre-wrap">3 días</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] text-right tracking-[0.3px]">para vencer</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[36px] relative shrink-0 w-[65.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1302_72645)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8H6.005" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72645">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#ef4444] flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon15 />
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[25px] not-italic text-[12px] text-white top-[3px] tracking-[0.3px]">Urgente</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[36px] relative shrink-0 w-[161.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container66 />
        <Text20 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container63 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[156.375px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Industrias Colombia</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[98.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-004</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph22 />
      <Text21 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[147px] whitespace-pre-wrap">Monto: $ 40.000.000</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container69 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[65.78px] not-italic text-[#52525b] text-[14px] text-right top-px tracking-[0.35px] w-[51px] whitespace-pre-wrap">20 días</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] text-right tracking-[0.3px]">para vencer</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph24 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[36px] relative shrink-0 w-[65.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-white h-[82px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container68 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[364px] items-start left-[25px] top-[99px] w-[1624px]" data-name="Container">
      <Container52 />
      <Container57 />
      <Container62 />
      <Container67 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white h-[488px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container48 />
      <Container51 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1302_72687)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72687">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <Icon16 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#1c2d3a] text-[16px] top-[3px] tracking-[0.4px]">Operaciones Recientes</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Últimas transacciones realizadas</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[44px] relative shrink-0 w-[238.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading10 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[146.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[13px] py-px relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Historial completo</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-[1] content-stretch flex items-center justify-between relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container75 />
      <Button3 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_44fr)_minmax(0,_1fr)] h-[74px] left-px pb-[6px] pt-[24px] px-[24px] top-px w-[1672px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 5">
            <path d={svgPaths.p184c5900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[95.641px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Desembolso</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-008</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph27 />
      <Text22 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">2024-05-15</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container81 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[48px] relative shrink-0 w-[253.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[127.625px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[28px] left-[128px] not-italic text-[#1c2d3a] text-[18px] text-right top-px tracking-[0.45px]">$ 28.000.000</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#00c950] h-[22px] left-[39.61px] rounded-[8px] top-[31px] w-[88.016px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-right text-white tracking-[0.3px]">Completado</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[53px] relative shrink-0 w-[127.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph29 />
        <Text23 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-white h-[87px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container78 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 5">
            <path d={svgPaths.p184c5900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[90.766px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Aprobación</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-009</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph30 />
      <Text24 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">2024-05-14</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container87 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[48px] relative shrink-0 w-[248.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[126.281px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[28px] left-[127px] not-italic text-[#1c2d3a] text-[18px] text-right top-px tracking-[0.45px]">$ 35.000.000</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#00c950] h-[22px] left-[38.27px] rounded-[8px] top-[31px] w-[88.016px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-right text-white tracking-[0.3px]">Completado</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[53px] relative shrink-0 w-[126.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph32 />
        <Text25 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-white h-[87px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container84 />
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00018 8.33352">
            <path d={svgPaths.p3f502000} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[rgba(255,105,0,0.1)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Solicitud</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-010</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph33 />
      <Text26 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">2024-05-13</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container93 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[48px] relative shrink-0 w-[222.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[127.172px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[28px] left-[128px] not-italic text-[#1c2d3a] text-[18px] text-right top-px tracking-[0.45px]">$ 22.000.000</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[22px] left-[45.06px] rounded-[8px] top-[31px] w-[82.109px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] text-right tracking-[0.3px]">En Proceso</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[53px] relative shrink-0 w-[127.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph35 />
        <Text27 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-white h-[87px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container90 />
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 5">
            <path d={svgPaths.p184c5900} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[rgba(0,201,80,0.1)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[39.641px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Pago</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Text">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">FE-2024-005</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph36 />
      <Text28 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">2024-05-12</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container99 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[48px] relative shrink-0 w-[197.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[127.625px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Bold',sans-serif] leading-[28px] left-[128px] not-italic text-[#1c2d3a] text-[18px] text-right top-px tracking-[0.45px]">$ 45.000.000</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[#00c950] h-[22px] left-[39.61px] rounded-[8px] top-[31px] w-[88.016px]" data-name="Text">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-right text-white tracking-[0.3px]">Completado</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[53px] relative shrink-0 w-[127.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph38 />
        <Text29 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-white h-[87px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container96 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[384px] items-start left-[25px] top-[99px] w-[1624px]" data-name="Container">
      <Container77 />
      <Container83 />
      <Container89 />
      <Container95 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white h-[508px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container73 />
      <Container76 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Comisiones Acumuladas (Mes)</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[540px]" data-name="Container">
      <Heading11 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#ef4444] text-[24px] top-px tracking-[0.6px]">$ 3.200.000</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2daf5240} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p156c3380} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pae95270} id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[81.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[82px] whitespace-pre-wrap">2.21% del total</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon21 />
      <Text30 />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-[25px] top-[87px] w-[492px]" data-name="Container">
      <Paragraph39 />
      <Container105 />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-white col-[1] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Tiempo Promedio de Aprobación</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[540px]" data-name="Container">
      <Heading12 />
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#155dfc] text-[24px] top-px tracking-[0.6px]">4.2 horas</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c08db00} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p331ef140} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] top-px tracking-[0.35px]">-12%</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[84.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">vs mes anterior</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon22 />
      <Text31 />
      <Text32 />
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[25px] top-[87px] w-[492px]" data-name="Container">
      <Paragraph40 />
      <Container109 />
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-white col-[2] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="Heading 4">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Tasa de Aprobación</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_20fr)_minmax(0,_1fr)] h-[62px] left-px pb-[18px] pt-[24px] px-[24px] top-px w-[540px]" data-name="Container">
      <Heading13 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#00a63e] text-[24px] top-px tracking-[0.6px]">94.5%</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72672)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72672">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[137.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">de solicitudes aprobadas</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Text33 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-[25px] top-[87px] w-[492px]" data-name="Container">
      <Paragraph41 />
      <Container113 />
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-white col-[3] relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container101() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[172px] relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Container106 />
      <Container110 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1978px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container26 />
      <Container47 />
      <Container72 />
      <Container101 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[2118px] relative shrink-0 w-[1722px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[24px] relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[27.55%_28.35%_11.66%_48.19%]" data-name="Group">
      <div className="absolute inset-[56.71%_37.09%_11.9%_60.61%]" data-name="Vector_12">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.9055 7.5331">
          <path d={svgPaths.p1e880dc0} fill="var(--fill-0, #1C2D3A)" id="Vector_12" />
        </svg>
      </div>
      <div className="absolute inset-[27.55%_28.35%_11.66%_48.19%]" data-name="Vector_13">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6825 14.5887">
          <path d={svgPaths.p9e38d00} fill="var(--fill-0, #1C2D3A)" id="Vector_13" />
        </svg>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[0_0.39%_0_0]">
      <div className="absolute inset-[0_81.07%_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9426 24">
          <path d={svgPaths.p1eef1400} fill="var(--fill-0, #DEFB49)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.91%_85.11%_55.97%_11.65%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0996 4.10945">
          <path d={svgPaths.p25313050} fill="var(--fill-0, #95F87F)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[16.31%_84.29%_16.29%_3.18%]" data-name="Vector_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8509 16.1775">
          <path d={svgPaths.pdd02200} fill="var(--fill-0, #1C2D3A)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute inset-[29.34%_65.09%_11.9%_32.59%]" data-name="Vector_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.94 14.1024">
          <path d={svgPaths.p147b2180} fill="var(--fill-0, #1C2D3A)" id="Vector_4" />
        </svg>
      </div>
      <div className="absolute inset-[9.92%_64.63%_72.99%_32.13%]" data-name="Vector_5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0917 4.1015">
          <path d={svgPaths.p2412a040} fill="var(--fill-0, #1C2D3A)" id="Vector_5" />
        </svg>
      </div>
      <div className="absolute inset-[9.92%_12.47%_72.99%_84.29%]" data-name="Vector_6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.0915 4.1015">
          <path d={svgPaths.p1e6b3780} fill="var(--fill-0, #1C2D3A)" id="Vector_6" />
        </svg>
      </div>
      <div className="absolute inset-[28.43%_52.95%_11.9%_36.04%]" data-name="Vector_7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9209 14.3209">
          <path d={svgPaths.p2eb85280} fill="var(--fill-0, #1C2D3A)" id="Vector_7" />
        </svg>
      </div>
      <div className="absolute inset-[28.59%_0.39%_10.88%_88.22%]" data-name="Vector_8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4015 14.5268">
          <path d={svgPaths.p3da5f780} fill="var(--fill-0, #1C2D3A)" id="Vector_8" />
        </svg>
      </div>
      <div className="absolute inset-[28.44%_16.4%_11.23%_72.83%]" data-name="Vector_9">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.625 14.4784">
          <path d={svgPaths.p1389c000} fill="var(--fill-0, #1C2D3A)" id="Vector_9" />
        </svg>
      </div>
      <div className="absolute inset-[29.34%_12.93%_11.9%_84.75%]" data-name="Vector_10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.93999 14.1024">
          <path d={svgPaths.p1b59780} fill="var(--fill-0, #1C2D3A)" id="Vector_10" />
        </svg>
      </div>
      <div className="absolute inset-[12.24%_68.58%_11.89%_21.13%]" data-name="Vector_11">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0227 18.2092">
          <path d={svgPaths.p2318f00} fill="var(--fill-0, #1C2D3A)" id="Vector_11" />
        </svg>
      </div>
      <Group47 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group46 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[797.75px] top-0 w-[126.5px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[20px] left-[715.58px] top-[40px] w-[290.828px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[145.5px] not-italic text-[#52525b] text-[14px] text-center top-px tracking-[0.35px]">Built with React, Tailwind CSS, and shadcn/ui</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">240+ Components</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">WCAG 2.1 AA</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">Atomic Design</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[710.55px] top-[76px] w-[300.891px]" data-name="Container">
      <Text34 />
      <Text35 />
      <Text36 />
      <Text37 />
      <Text38 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Paragraph42 />
      <Container116 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[125px] relative shrink-0 w-[1722px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[33px] relative size-full">
        <Container114 />
      </div>
    </div>
  );
}

function MainContent1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1786px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[32px] pt-[24px] relative size-full">
        <Container1 />
        <Footer />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2379px] items-start left-[256px] pt-[64px] top-0 w-[1786px]" data-name="Main Content">
      <MainContent1 />
    </div>
  );
}

function PY() {
  return (
    <div className="absolute h-[2379px] left-0 top-0 w-[2042px]" data-name="pY">
      <Container />
      <MainContent />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[24px] left-0 top-[-20000px] w-[25.578px]" data-name="Text">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">$ 0</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[27.55%_28.35%_11.66%_48.19%]" data-name="Group">
      <div className="absolute inset-[56.71%_37.09%_11.9%_60.61%]" data-name="Vector_12">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.87376 10.0441">
          <path d={svgPaths.p217ae500} fill="var(--fill-0, #1C2D3A)" id="Vector_12" />
        </svg>
      </div>
      <div className="absolute inset-[27.55%_28.35%_11.66%_48.19%]" data-name="Vector_13">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.5742 19.4517">
          <path d={svgPaths.p1fe78340} fill="var(--fill-0, #1C2D3A)" id="Vector_13" />
        </svg>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[0_0.39%_0_0]">
      <div className="absolute inset-[0_81.07%_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9215 32">
          <path d={svgPaths.p32099e80} fill="var(--fill-0, #DEFB49)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[26.91%_85.11%_55.97%_11.65%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.46579 5.47927">
          <path d={svgPaths.p3ea30280} fill="var(--fill-0, #95F87F)" id="Vector_2" />
        </svg>
      </div>
      <div className="absolute inset-[16.31%_84.29%_16.29%_3.18%]" data-name="Vector_3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1332 21.57">
          <path d={svgPaths.p14ae6b00} fill="var(--fill-0, #1C2D3A)" id="Vector_3" />
        </svg>
      </div>
      <div className="absolute inset-[29.34%_65.09%_11.9%_32.59%]" data-name="Vector_4">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91975 18.8032">
          <path d={svgPaths.pdb54a00} fill="var(--fill-0, #1C2D3A)" id="Vector_4" />
        </svg>
      </div>
      <div className="absolute inset-[9.92%_64.63%_72.99%_32.13%]" data-name="Vector_5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.45526 5.46867">
          <path d={svgPaths.p89127f0} fill="var(--fill-0, #1C2D3A)" id="Vector_5" />
        </svg>
      </div>
      <div className="absolute inset-[9.92%_12.47%_72.99%_84.29%]" data-name="Vector_6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.45499 5.46867">
          <path d={svgPaths.p39cfb80} fill="var(--fill-0, #1C2D3A)" id="Vector_6" />
        </svg>
      </div>
      <div className="absolute inset-[28.43%_52.95%_11.9%_36.04%]" data-name="Vector_7">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.56 19.0946">
          <path d={svgPaths.p2b0a100} fill="var(--fill-0, #1C2D3A)" id="Vector_7" />
        </svg>
      </div>
      <div className="absolute inset-[28.59%_0.39%_10.88%_88.22%]" data-name="Vector_8">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2008 19.3691">
          <path d={svgPaths.p3be2b100} fill="var(--fill-0, #1C2D3A)" id="Vector_8" />
        </svg>
      </div>
      <div className="absolute inset-[28.44%_16.4%_11.23%_72.83%]" data-name="Vector_9">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1655 19.3045">
          <path d={svgPaths.p4e8a100} fill="var(--fill-0, #1C2D3A)" id="Vector_9" />
        </svg>
      </div>
      <div className="absolute inset-[29.34%_12.93%_11.9%_84.75%]" data-name="Vector_10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91974 18.8032">
          <path d={svgPaths.p20055b00} fill="var(--fill-0, #1C2D3A)" id="Vector_10" />
        </svg>
      </div>
      <div className="absolute inset-[12.24%_68.58%_11.89%_21.13%]" data-name="Vector_11">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3624 24.2789">
          <path d={svgPaths.p1eb16000} fill="var(--fill-0, #1C2D3A)" id="Vector_11" />
        </svg>
      </div>
      <Group49 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group48 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8px] w-[168.656px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[239px]" data-name="Container">
      <Container122 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18af2500} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Home</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon26 />
      <Text40 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button4 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[32px] left-0 top-[56px] w-[239px]" data-name="List">
      <ListItem />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.2)] h-[38px] left-0 rounded-[8px] top-0 w-[223px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(28,45,58,0.4)] tracking-[0.35px]">Buscar componente...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[38px] left-[8px] top-[96px] w-[223px]" data-name="Container">
      <TextInput />
      <Icon27 />
    </div>
  );
}

function Container120() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container121 />
        <List />
        <Container123 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[158px] relative shrink-0 w-[255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] py-[8px] relative size-full">
        <Container120 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">DSM Progress</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72545)" id="Icon">
          <path d={svgPaths.p2e8d9000} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72545">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">DSM Dashboard</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="bg-[#22c55e] h-[16px] relative rounded-[8px] shrink-0 w-[41.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">100%</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon28 />
      <Text41 />
      <Text42 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button5 />
    </div>
  );
}

function List1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem1 />
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80px] items-start left-0 pl-[8px] py-[8px] top-0 w-[255px]" data-name="Container">
      <Container126 />
      <List1 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Components</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9.33333 2.73334L8 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.4 5.33334L1.46667 4.80001" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 8L2.73333 9.33333" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.8 1.46667L5.33333 3.40001" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b7ee680} id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Actions</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon29 />
      <Text43 />
      <Icon30 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button6 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ef3000} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8H8.00667" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 8H11.34" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 8H4.67333" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text44() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Forms</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon31 />
      <Text44 />
      <Icon32 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="List Item">
      <Button7 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72538)" id="Icon">
          <path d={svgPaths.p2b003800} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72538">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Navigation</p>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon33 />
      <Text45 />
      <Icon34 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="List Item">
      <Button8 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6H14" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 10H14" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 2V14" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Data Display</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon35 />
      <Text46 />
      <Icon36 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute h-[32px] left-0 top-[108px] w-[239px]" data-name="List Item">
      <Button9 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p405f80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Feedback</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon37 />
      <Text47 />
      <Icon38 />
    </div>
  );
}

function ListItem6() {
  return (
    <div className="absolute h-[32px] left-0 top-[144px] w-[239px]" data-name="List Item">
      <Button10 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Layout</p>
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon39 />
      <Text48 />
      <Icon40 />
    </div>
  );
}

function ListItem7() {
  return (
    <div className="absolute h-[32px] left-0 top-[180px] w-[239px]" data-name="List Item">
      <Button11 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72530)" id="Icon">
          <path d={svgPaths.p3294ac00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72530">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Patterns</p>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon41 />
      <Text49 />
      <Icon42 />
    </div>
  );
}

function ListItem8() {
  return (
    <div className="absolute h-[32px] left-0 top-[216px] w-[239px]" data-name="List Item">
      <Button12 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text50() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Modules</p>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon43 />
      <Text50 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon44 />
        </div>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[130.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-px tracking-[0.35px]">Dashboard Principal</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-[#00c951] content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text52 />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[2px] w-[190px]" data-name="List Item">
      <Text51 />
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[133.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Portal Administrativo</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text54 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[34px] w-[190px]" data-name="List Item">
      <Text53 />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[135.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Factoring Dashboard</p>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text56 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[66px] w-[190px]" data-name="List Item">
      <Text55 />
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Operations List</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text58 />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[98px] w-[190px]" data-name="List Item">
      <Text57 />
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Invoice Selection</p>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text60 />
    </div>
  );
}

function ListItem14() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[130px] w-[190px]" data-name="List Item">
      <Text59 />
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Approval Flow</p>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text62 />
    </div>
  );
}

function ListItem15() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[162px] w-[190px]" data-name="List Item">
      <Text61 />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">KPI Showcase</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text64 />
    </div>
  );
}

function ListItem16() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[194px] w-[190px]" data-name="List Item">
      <Text63 />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[20px] relative shrink-0 w-[135.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Calculadora Liquidez</p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text66 />
    </div>
  );
}

function ListItem17() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[226px] w-[190px]" data-name="List Item">
      <Text65 />
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Onboarding</p>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="Text">
      <Text68 />
    </div>
  );
}

function ListItem18() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[258px] w-[190px]" data-name="List Item">
      <Text67 />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute border-[#e5e5e5] border-l border-solid h-[288px] left-[15px] top-[32px] w-[211px]" data-name="Primitive.div">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="absolute h-[320px] left-0 top-[252px] w-[239px]" data-name="List Item">
      <Button13 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72518)" id="Icon">
          <path d={svgPaths.pf984c00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72518">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text69() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Advanced</p>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon45 />
      <Text69 />
      <Icon46 />
    </div>
  );
}

function ListItem19() {
  return (
    <div className="absolute h-[32px] left-0 top-[576px] w-[239px]" data-name="List Item">
      <Button14 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text70() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Components</p>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon47 />
      <Text70 />
      <Icon48 />
    </div>
  );
}

function ListItem20() {
  return (
    <div className="absolute h-[32px] left-0 top-[612px] w-[239px]" data-name="List Item">
      <Button15 />
    </div>
  );
}

function List2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
        <ListItem9 />
        <ListItem19 />
        <ListItem20 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute content-stretch flex flex-col h-[692px] items-start left-0 pl-[8px] py-[8px] top-[88px] w-[255px]" data-name="Container">
      <Container128 />
      <List2 />
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Recursos</p>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pba54b80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.13333 3.53333L6.2 6.13332" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2abc2097} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p187029a0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Animations</p>
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text72 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon49 />
      <Text71 />
    </div>
  );
}

function ListItem21() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button16 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Animation System</p>
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text74 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon50 />
      <Text73 />
    </div>
  );
}

function ListItem22() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="List Item">
      <Button17 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p237eb400} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Icon Gallery</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text76 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon51 />
      <Text75 />
    </div>
  );
}

function ListItem23() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="List Item">
      <Button18 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b8cc300} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Help System</p>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text78 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon52 />
      <Text77 />
    </div>
  );
}

function ListItem24() {
  return (
    <div className="absolute h-[32px] left-0 top-[108px] w-[239px]" data-name="List Item">
      <Button19 />
    </div>
  );
}

function List3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem21 />
        <ListItem22 />
        <ListItem23 />
        <ListItem24 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col h-[188px] items-start left-0 pl-[8px] py-[8px] top-[788px] w-[255px]" data-name="Container">
      <Container130 />
      <List3 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Design System</p>
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72638)" id="Icon">
          <path d="M9.748 11.9313L2.628 9.98934" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p396e1f00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pad21f80} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72638">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text80() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Brand Layout</p>
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text80 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon53 />
      <Text79 />
    </div>
  );
}

function ListItem25() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button20 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72496)" id="Icon">
          <path d={svgPaths.p3685cc80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13a75f00} fill="var(--fill-0, #1C2D3A)" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3359640} fill="var(--fill-0, #1C2D3A)" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e291080} fill="var(--fill-0, #1C2D3A)" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2041a800} fill="var(--fill-0, #1C2D3A)" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72496">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text82() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Theme Customizer</p>
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text82 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon54 />
      <Text81 />
    </div>
  );
}

function ListItem26() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="List Item">
      <Button21 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V14" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8297180} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35b1d480} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c1acec0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 14H11.3333" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Elevation Styles</p>
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text84 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon55 />
      <Text83 />
    </div>
  );
}

function ListItem27() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="List Item">
      <Button22 />
    </div>
  );
}

function List4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem25 />
        <ListItem26 />
        <ListItem27 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col h-[152px] items-start left-0 pl-[8px] py-[8px] top-[984px] w-[255px]" data-name="Container">
      <Container132 />
      <List4 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Verificación</p>
      </div>
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2608e480} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37796bbe} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1309acc0} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p9cdbbc0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d80} id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">WCAG Accessibility</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon56 />
      <Text85 />
    </div>
  );
}

function ListItem28() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button23 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Changelog</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon57 />
      <Text86 />
    </div>
  );
}

function ListItem29() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="List Item">
      <Button24 />
    </div>
  );
}

function List5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem28 />
        <ListItem29 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="absolute content-stretch flex flex-col h-[116px] items-start left-0 pl-[8px] py-[8px] top-[1144px] w-[255px]" data-name="Container">
      <Container134 />
      <List5 />
    </div>
  );
}

function Container124() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container125 />
        <Container127 />
        <Container129 />
        <Container131 />
        <Container133 />
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Colapsar Sidebar</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="Button">
      <Icon58 />
      <Text87 />
    </div>
  );
}

function ListItem30() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="List Item">
      <Button25 />
    </div>
  );
}

function List6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem30 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[48px] relative shrink-0 w-[255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] py-[8px] relative size-full">
        <List6 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[1312px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <Container119 />
      <Container124 />
      <Container135 />
    </div>
  );
}

function Button26() {
  return <div className="absolute h-[1312px] left-[247px] top-0 w-[16px]" data-name="Button" />;
}

function Container117() {
  return (
    <div className="absolute border-[#e5e5e5] border-r border-solid h-[1312px] left-0 top-0 w-[256px]" data-name="Container">
      <Container118 />
      <Button26 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon59 />
      </div>
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="bg-[#e4e4e7] h-0 shrink-0 w-px" data-name="Primitive.div" />;
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Design System Manager</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">shadcn/ui · Satoshi · WCAG AA · 240+ Components</p>
    </div>
  );
}

function Container138() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph43 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[40px] relative shrink-0 w-[289.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container138 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[-4px] relative size-full">
        <Button27 />
        <PrimitiveDiv2 />
        <Container137 />
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1302_72715)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17940e00} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1302_72715">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text88() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#52525b] text-[14px] text-center top-px tracking-[0.35px]">Help</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.906px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon60 />
        <Text88 />
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p118e9580} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36cdaf00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p21ad0600} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text89() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[60px] not-italic text-[#1c2d3a] text-[14px] text-center top-px tracking-[0.35px]">Ir a App Factoring</p>
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[rgba(0,201,81,0.1)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center p-px relative size-full">
        <Icon61 />
        <Text89 />
        <Icon62 />
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p6f1b00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon63 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[36px] relative shrink-0 w-[299.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button28 />
        <Button29 />
        <Button30 />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[1115.734px] h-[64px] items-center left-[256px] pb-px px-[16px] top-0 w-[1786px]" data-name="Banner">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Container136 />
      <Container139 />
    </div>
  );
}

export default function CFinanciaDsmV() {
  return (
    <div className="bg-white relative size-full" data-name="C-Financia DSM v1.2">
      <PY />
      <Text39 />
      <Container117 />
      <Banner />
    </div>
  );
}