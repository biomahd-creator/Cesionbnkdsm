import svgPaths from "./svg-a9izecswdn";

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#9ca3af] text-[14px] top-px">Creadas</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#9ca3af] text-[12px] top-px">Facturas registradas para evaluación</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#9ca3af] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#9ca3af] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function IconFileCheck() {
  return (
    <div className="absolute left-[332px] size-[32px] top-[65px]" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function KpiShowcase() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container />
        <Container1 />
        <Container3 />
        <Badge />
        <IconFileCheck />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[202px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[81px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#9ca3af] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#9ca3af] text-[14px] top-px">En Proceso</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#9ca3af] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#9ca3af] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconClockFading() {
  return (
    <div className="absolute left-[333px] size-[32px] top-0" data-name="Icon / clock-fading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / clock-fading">
          <path d={svgPaths.p242da540} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2abe9180} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p334034c0} id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p23377580} id="Vector_5" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31961f80} id="Vector_6" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <IconClockFading />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#9ca3af] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase1() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container4 />
        <Container5 />
        <Container7 />
        <Badge1 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[689px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[81px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#9ca3af] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#9ca3af] text-[14px] top-px">Negociadas</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#9ca3af] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#9ca3af] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#9ca3af] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function IconFileCheck1() {
  return (
    <div className="absolute left-[334px] size-[32px] top-[64px]" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function KpiShowcase2() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container8 />
        <Container9 />
        <Container11 />
        <Badge2 />
        <IconFileCheck1 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1176px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[81px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#9ca3af] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#9ca3af] text-[14px] top-px">Endosadas a Fondeador</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#9ca3af] text-[12px] top-px">Transferida para desembolso</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#9ca3af] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#9ca3af] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase3() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container12 />
        <Container13 />
        <Container15 />
        <Badge3 />
      </div>
    </div>
  );
}

function IconReceipt() {
  return (
    <div className="absolute left-[356px] size-[32px] top-[89px]" data-name="Icon / receipt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / receipt">
          <path d={svgPaths.p37a10d80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29027680} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 23.3333V8.66667" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1663px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[81px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#9ca3af] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase3 />
      <IconReceipt />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#eab308] text-[14px] top-px">En Proceso</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconClockFading1() {
  return (
    <div className="absolute left-[333px] size-[32px] top-0" data-name="Icon / clock-fading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / clock-fading">
          <path d={svgPaths.p242da540} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2abe9180} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p334034c0} id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p23377580} id="Vector_5" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31961f80} id="Vector_6" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <IconClockFading1 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#eab308] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase4() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container16 />
        <Container17 />
        <Container19 />
        <Badge4 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[689px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[521px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#eab308] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase4 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#22c55e] text-[14px] top-px">Negociadas</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function IconFileCheck2() {
  return (
    <div className="absolute left-[333px] size-[32px] top-[64px]" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase5() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container20 />
        <Container21 />
        <Container23 />
        <IconFileCheck2 />
        <Badge5 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1176px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[521px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <KpiShowcase5 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#22c55e] text-[14px] top-px">Endosadas a Fondeador</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">Transferida para dessembolso</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconReceiptText() {
  return (
    <div className="absolute left-[333px] size-[32px] top-px" data-name="Icon / receipt-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / receipt-text">
          <path d={svgPaths.p37a10d80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M18.6667 10.6667H10.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21.3333 16H10.6667" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M17.3333 21.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <IconReceiptText />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase6() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container24 />
        <Container25 />
        <Container27 />
        <Badge6 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1663px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[521px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <KpiShowcase6 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-px">Creadas</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">Facturas registradas para evaluación</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconFileCheck3() {
  return (
    <div className="absolute left-[332px] size-[32px] top-px" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
      <IconFileCheck3 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase7() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container28 />
        <Container29 />
        <Container31 />
        <Badge7 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[202px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[287px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase7 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#3b82f6] text-[14px] top-px">Creadas</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">Facturas registradas para evaluación</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container34 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconFileCheck4() {
  return (
    <div className="absolute left-[332px] size-[32px] top-px" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
      <IconFileCheck4 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase8() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container32 />
        <Container33 />
        <Container35 />
        <Badge8 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[202px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[528px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#3b82f6] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase8 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-px">En Proceso</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text9 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconClockFading2() {
  return (
    <div className="absolute left-[333px] size-[32px] top-0" data-name="Icon / clock-fading">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / clock-fading">
          <path d={svgPaths.p242da540} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16 8V16L21.3333 18.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2abe9180} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p334034c0} id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p23377580} id="Vector_5" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31961f80} id="Vector_6" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <IconClockFading2 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#eab308] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase9() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container36 />
        <Container37 />
        <Container39 />
        <Badge9 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[689px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[287px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#eab308] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase9 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-px">Negociadas</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">En proceso de revisión</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function IconFileCheck5() {
  return (
    <div className="absolute left-[334px] size-[32px] top-[64px]" data-name="Icon / file-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / file-check">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12eadd00} id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function KpiShowcase10() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container40 />
        <Container41 />
        <Container43 />
        <Badge10 />
        <IconFileCheck5 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1176px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[287px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase10 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-px">Endosadas a Fondeador</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[12px] left-0 not-italic text-[#0a0a0a] text-[12px] top-px">Transferida para dessembolso</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text11 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container46 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px">$125,420</p>
    </div>
  );
}

function IconReceiptText1() {
  return (
    <div className="absolute left-[333px] size-[32px] top-px" data-name="Icon / receipt-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon / receipt-text">
          <path d={svgPaths.p37a10d80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M18.6667 10.6667H10.6667" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21.3333 16H10.6667" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M17.3333 21.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
      <IconReceiptText1 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex gap-[6px] items-center justify-center min-h-[24px] px-[8px] py-[3px] right-px rounded-[8px] top-0" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">234</p>
      </div>
    </div>
  );
}

function KpiShowcase11() {
  return (
    <div className="h-[102px] relative shrink-0 w-[365px]" data-name="KPIShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container44 />
        <Container45 />
        <Container47 />
        <Badge11 />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[145px] items-start left-[1663px] pb-[28px] pl-[24px] pt-[24px] rounded-[14px] top-[287px] w-[419px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#22c55e] border-b-4 border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <KpiShowcase11 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[93px] not-italic text-[14px] text-black top-[153px]">{`Default `}</p>
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[97px] not-italic text-[14px] text-black top-[344px]">Hover</p>
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[93px] not-italic text-[14px] text-black top-[593px]">Active</p>
    </div>
  );
}