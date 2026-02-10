import svgPaths from "./svg-lu5n815e3y";

function Sidebar() {
  return <div className="absolute h-[1675px] left-0 top-0 w-[256px]" data-name="Sidebar" />;
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[586.688px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#1c2d3a] text-[30px] top-px tracking-[0.75px]">Solicitud de Financiamiento Empresarial</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[126.109px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">LAYOUT VERTICAL</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Badge />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Complete el formulario en 4 sencillos pasos para solicitar financiamiento para su empresa</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Paragraph />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[28px] relative shrink-0 w-[82.969px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1c2d3a] text-[20px] top-0 tracking-[0.5px]">Progreso</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#1c2d3a] h-[26px] relative rounded-[8px] shrink-0 w-[38.469px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px]">1/4</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function RefactorMultiStepVerticalPage1() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[24px] top-[24px] w-[1230px]" data-name="RefactorMultiStepVerticalPage">
      <CardTitle />
      <Badge1 />
    </div>
  );
}

function RefactorMultiStepVerticalPage2() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[90px] w-[1230px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[111px] whitespace-pre-wrap">25% completado</p>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#00c951] h-[10px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-[rgba(0,201,81,0.2)] content-stretch flex flex-col h-[10px] items-start left-[24px] overflow-clip pl-[-922.5px] pr-[922.5px] rounded-[33554400px] top-[66px] w-[1230px]" data-name="Primitive.div">
      <Container3 />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[126px] relative shrink-0 w-[1278px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RefactorMultiStepVerticalPage1 />
        <RefactorMultiStepVerticalPage2 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Icon">
          <path d={svgPaths.pd883800} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p212eb900} id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(0,201,81,0.2)] relative rounded-[33554400px] shadow-[0px_0px_0px_0px_rgba(0,201,81,0.4),0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[50.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[149.391px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#00c951] text-[16px] top-px tracking-[0.4px]">Información Básica</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Icon1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Datos del solicitante</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative size-full">
        <Container6 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,201,81,0.1)] content-stretch flex gap-[14.8px] h-[88px] items-start left-0 pb-[2px] pl-[16.8px] pr-[18px] pt-[16.8px] rounded-[10px] top-0 w-[1230px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#00c951] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#e4e4e7] h-[56px] left-[24px] top-[56px] w-[2px]" data-name="Container" />;
}

function RefactorMultiStepVerticalPage3() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <Button />
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f4f4f5] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[177.203px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Detalles de la Empresa</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Información empresarial</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative size-full">
        <Container10 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[88px] items-start left-0 opacity-70 pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[1230px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#e4e4e7] h-[56px] left-[24px] top-[56px] w-[2px]" data-name="Container" />;
}

function RefactorMultiStepVerticalPage4() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <Button1 />
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f4f4f5] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Documentación</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Documentos requeridos</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative size-full">
        <Container14 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[88px] items-start left-0 opacity-70 pb-[2px] pt-[18px] px-[18px] rounded-[10px] top-0 w-[1230px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#e4e4e7] h-[56px] left-[24px] top-[56px] w-[2px]" data-name="Container" />;
}

function RefactorMultiStepVerticalPage5() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <Button2 />
      <Container15 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f4f4f5] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[125.953px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Revisión y Envío</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Confirmación final</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative size-full">
        <Container18 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function RefactorMultiStepVerticalPage6() {
  return (
    <div className="h-[88px] opacity-70 relative rounded-[10px] shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex gap-[16px] items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1278px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] relative size-full">
        <RefactorMultiStepVerticalPage3 />
        <RefactorMultiStepVerticalPage4 />
        <RefactorMultiStepVerticalPage5 />
        <RefactorMultiStepVerticalPage6 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-[1] content-stretch flex flex-col gap-[24px] items-start p-px relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <CardHeader />
      <CardContent />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(0,201,81,0.1)] relative rounded-[33554400px] shadow-[0px_0px_0px_0px_rgba(0,201,81,0.2)] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px tracking-[0.6px]">Información Básica</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Datos del solicitante</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[60px] relative shrink-0 w-[211.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <CardTitle1 />
        <CardDescription />
      </div>
    </div>
  );
}

function RefactorMultiStepVerticalPage7() {
  return (
    <div className="col-[1] content-stretch flex gap-[16px] items-center relative row-[1] self-stretch shrink-0" data-name="RefactorMultiStepVerticalPage">
      <Container19 />
      <Container20 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[115px] relative shrink-0 w-[1278px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_60fr)_minmax(0,_1fr)] pb-[31px] pt-[24px] px-[24px] relative size-full">
        <RefactorMultiStepVerticalPage7 />
      </div>
    </div>
  );
}

function RefactorMultiStepVerticalPage9() {
  return (
    <div className="absolute h-[20px] left-[76.61px] top-0 w-[6.109px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Nombre(s)</p>
      <RefactorMultiStepVerticalPage9 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Juan Carlos</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function RefactorMultiStepVerticalPage10() {
  return (
    <div className="absolute h-[20px] left-[77.5px] top-0 w-[6.109px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Apellido(s)</p>
      <RefactorMultiStepVerticalPage10 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Pérez González</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[64px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function RefactorMultiStepVerticalPage11() {
  return (
    <div className="absolute h-[20px] left-[133.31px] top-0 w-[6.109px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Correo Electrónico</p>
      <RefactorMultiStepVerticalPage11 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">juan.perez@empresa.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function RefactorMultiStepVerticalPage12() {
  return (
    <div className="absolute h-[20px] left-[64.56px] top-0 w-[6.109px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Teléfono</p>
      <RefactorMultiStepVerticalPage12 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">+57 300 123 4567</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function RefactorMultiStepVerticalPage13() {
  return (
    <div className="absolute h-[20px] left-[146.63px] top-0 w-[6.109px]" data-name="RefactorMultiStepVerticalPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Cargo en la Empresa</p>
      <RefactorMultiStepVerticalPage13 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Ej: Gerente General</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <PrimitiveLabel4 />
      <Input4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[64px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function RefactorMultiStepVerticalPage8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[232px] items-start relative shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <Container21 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[40px] opacity-50 relative rounded-[8px] shrink-0 w-[120px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[25px] py-px relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Anterior</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[89.59px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#00c951] h-[40px] relative rounded-[8px] shrink-0 w-[121.594px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[47px] not-italic text-[14px] text-center text-white top-[11px] tracking-[0.35px]">Siguiente</p>
        <Icon6 />
      </div>
    </div>
  );
}

function RefactorMultiStepVerticalPage14() {
  return (
    <div className="content-stretch flex h-[65px] items-center justify-between pt-px relative shrink-0 w-full" data-name="RefactorMultiStepVerticalPage">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Button3 />
      <Button4 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1278px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[192px] items-start pt-[24px] px-[24px] relative size-full">
        <RefactorMultiStepVerticalPage8 />
        <RefactorMultiStepVerticalPage14 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-[1] content-stretch flex flex-col gap-[24px] items-start p-px relative rounded-[14px] row-[2] self-stretch shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_564fr)_minmax(0,_1fr)] h-[1266px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

function RefactorMultiStepVerticalPage() {
  return (
    <div className="absolute bg-[rgba(244,244,245,0.3)] content-stretch flex flex-col gap-[32px] h-[1366px] items-start left-[314px] top-[48px] w-[1280px]" data-name="RefactorMultiStepVerticalPage">
      <Container />
      <Container2 />
    </div>
  );
}

function Group() {
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

function Group2() {
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
      <Group />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[858.75px] top-0 w-[126.5px]" data-name="Capa">
      <Icon7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20px] left-[776.58px] top-[40px] w-[290.828px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[145.5px] not-italic text-[#52525b] text-[14px] text-center top-px tracking-[0.35px]">Built with React, Tailwind CSS, and shadcn/ui</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[101.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">125+ Components</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">WCAG 2.1 AA</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">98% Accessibility Score</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[747.84px] top-[76px] w-[348.313px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <Capa />
      <Paragraph9 />
      <Container29 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-[32px] pt-[33px] top-[1454px] w-[1844px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1908px]" data-name="AppContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RefactorMultiStepVerticalPage />
        <Footer />
      </div>
    </div>
  );
}

function SidebarInset() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1675px] items-start left-[256px] pt-[64px] top-0 w-[1908px]" data-name="SidebarInset">
      <AppContent />
    </div>
  );
}

function SidebarProvider() {
  return (
    <div className="absolute h-[1675px] left-0 top-0 w-[2164px]" data-name="SidebarProvider">
      <Sidebar />
      <SidebarInset />
    </div>
  );
}

function Group1() {
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

function Group3() {
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
      <Group1 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Capa1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8px] w-[168.656px]" data-name="Capa">
      <Icon8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[239px]" data-name="Container">
      <Capa1 />
    </div>
  );
}

function Icon9() {
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

function SidebarNew1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.406px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Home</p>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon9 />
      <SidebarNew1 />
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="absolute h-[32px] left-0 top-[56px] w-[239px]" data-name="SidebarMenu">
      <SidebarMenuItem />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.2)] h-[38px] left-0 rounded-[8px] top-0 w-[223px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(28,45,58,0.4)] tracking-[0.35px]">refa</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon10() {
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

function Icon11() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[197px] pt-[2px] px-[2px] rounded-[6px] size-[18px] top-[10px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[38px] left-[8px] top-[96px] w-[223px]" data-name="Container">
      <TextInput />
      <Icon10 />
      <Button5 />
    </div>
  );
}

function SidebarNew() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
        <SidebarMenu />
        <Container32 />
      </div>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="h-[158px] relative shrink-0 w-[255px]" data-name="SidebarHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] py-[8px] relative size-full">
        <SidebarNew />
      </div>
    </div>
  );
}

function SidebarGroupLabel() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Resultados (2)</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1192_766)" id="Icon">
          <path d={svgPaths.p669a500} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1192_766">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[154.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Refactor</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[120.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.5)] tracking-[0.3px] uppercase">Business Patterns</p>
      </div>
    </div>
  );
}

function SidebarNew2() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#00c951] h-[16px] relative rounded-[8px] shrink-0 w-[36.766px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">NEW</p>
      </div>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[54px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon12 />
      <SidebarNew2 />
      <Badge2 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone1 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1192_681)" id="Icon">
          <path d={svgPaths.p3294ac00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1192_681">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[154.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Refactor Vertical</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[123px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.5)] tracking-[0.3px] uppercase">Business Patterns</p>
      </div>
    </div>
  );
}

function SidebarNew3() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#00c951] h-[16px] relative rounded-[8px] shrink-0 w-[36.766px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">NEW</p>
      </div>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex gap-[8px] h-[54px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon13 />
      <SidebarNew3 />
      <Badge3 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[54px] left-0 top-[58px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone2 />
    </div>
  );
}

function SidebarMenu1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem1 />
        <SidebarMenuItem2 />
      </div>
    </div>
  );
}

function SidebarGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[168px] items-start left-0 pl-[8px] py-[8px] top-0 w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel />
      <SidebarMenu1 />
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[255px]" data-name="SidebarContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <SidebarGroup />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#00c951] opacity-97 rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">97 Componentes</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Text9 />
    </div>
  );
}

function SidebarNew4() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.1)] content-stretch flex flex-col h-[48px] items-start left-[16px] pt-[16px] px-[16px] rounded-[10px] top-[16px] w-[223px]" data-name="SidebarNew">
      <Container33 />
    </div>
  );
}

function Icon14() {
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

function SidebarNew5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.156px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Colapsar Sidebar</p>
      </div>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon14 />
      <SidebarNew5 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone3 />
    </div>
  );
}

function SidebarMenu2() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[80px] w-[239px]" data-name="SidebarMenu">
      <SidebarMenuItem3 />
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="h-[120px] relative shrink-0 w-[255px]" data-name="SidebarFooter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarNew4 />
        <SidebarMenu2 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[1263px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

function SidebarRail() {
  return <div className="absolute h-[1263px] left-[247px] top-0 w-[16px]" data-name="SidebarRail" />;
}

function Sidebar1() {
  return (
    <div className="absolute border-[#e5e5e5] border-r border-solid h-[1263px] left-0 top-0 w-[256px]" data-name="Sidebar">
      <Container30 />
      <SidebarRail />
    </div>
  );
}

function Icon15() {
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

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="bg-[#e4e4e7] h-0 shrink-0 w-px" data-name="Primitive.div" />;
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Component Showcase</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">shadcn/ui · Satoshi · WCAG AA</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[40px] relative shrink-0 w-[174.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-[223.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[-4px] relative size-full">
        <Button6 />
        <PrimitiveDiv1 />
        <Container36 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1192_702)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17940e00} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1192_702">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HelpCenter() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="HelpCenter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#52525b] text-[14px] text-center top-px tracking-[0.35px]">Help</p>
      </div>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.906px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon16 />
        <HelpCenter />
      </div>
    </div>
  );
}

function Icon17() {
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

function AppContent2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.672px]" data-name="AppContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[60px] not-italic text-[#1c2d3a] text-[14px] text-center top-px tracking-[0.35px]">Ir a App Factoring</p>
      </div>
    </div>
  );
}

function Icon18() {
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

function Button7() {
  return (
    <div className="bg-[rgba(0,201,81,0.1)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center p-px relative size-full">
        <Icon17 />
        <AppContent2 />
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Button8() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <SlotClone4 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function AppContent1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[1353.109px] h-[64px] items-center left-[256px] pb-px px-[16px] top-0 w-[1908px]" data-name="AppContent">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container38 />
    </div>
  );
}

export default function CFinanciaDsmV() {
  return (
    <div className="bg-white relative size-full" data-name="C-Financia DSM v1.0">
      <SidebarProvider />
      <Sidebar1 />
      <AppContent1 />
    </div>
  );
}