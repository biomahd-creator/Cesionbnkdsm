import svgPaths from "./svg-qvgknath0h";

function PrimitiveH() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#1c2d3a] text-[18px] top-px tracking-[0.45px]">Confirmación de Operación de Factoring</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px]">Revisa los términos y condiciones antes de confirmar</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[46px] items-start left-[24px] top-[24px] w-[716px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[18px] top-px tracking-[0.4px]">Notificacion Pagadores</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__minmax(0,24fr)_minmax(0,1fr)] h-[54px] left-px pb-[6px] pt-[24px] px-[24px] top-px w-[460px]" data-name="CardHeader">
      <CardTitle />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Corporación Global S.A.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[124px] whitespace-pre-wrap">3 facturas • Tasa 2.5%</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[190.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[40px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start justify-center relative">
        <div className="h-[21px] relative shrink-0 w-[265px]" data-name="Label">
          <p className="absolute font-['Satoshi:Regular',sans-serif] inset-0 leading-[1.5] not-italic text-[#737373] text-[12px] tracking-[0.18px] whitespace-pre-wrap">Correo registrado: correo@dominio.com</p>
        </div>
        <div className="h-[21px] relative shrink-0 w-[265px]" data-name="Label">
          <p className="absolute font-['Satoshi:Regular',sans-serif] inset-0 leading-[1.5] not-italic text-[#737373] text-[12px] tracking-[0.18px] whitespace-pre-wrap">Correo pagaduría: correo@dominio.com</p>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[88.688px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">$4.680.000</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Frame />
      <Badge />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Correos adicionales (opcional)</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">ejemplo@empresa.com, otro@empresa.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_0.093px_rgba(0,201,81,0.02)]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#52525b] text-[12px] tracking-[0.3px] whitespace-pre-wrap">Separa múltiples correos con comas</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Textarea />
      <Paragraph />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Notificar al cliente</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">El cliente recibirá un email con los detalles</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[38px] relative shrink-0 w-[234.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <PrimitiveLabel1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2020_268)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2020_268">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00c951] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[41px] not-italic text-[12px] text-center text-white top-[8px] tracking-[0.3px]">Sí</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[40.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] text-center tracking-[0.3px]">No</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0 w-[106.688px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(244,244,245,0.3)] h-[76px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2020_272)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2020_272">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertDescription() {
  return (
    <div className="absolute h-[32px] left-[45px] top-[13px] w-[400px]" data-name="AlertDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[597px] whitespace-pre-wrap">Se enviará una notificación a usuario@empresa.com. El cliente también será notificado.</p>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-white h-[45px] relative rounded-[10px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
      <AlertDescription />
    </div>
  );
}

function FactoringSelectionPage2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[268px] items-start relative shrink-0 w-[664px]" data-name="FactoringSelectionPage">
      <Container5 />
      <Container6 />
      <Alert />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Innovatech Solutions SpA</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[114px] whitespace-pre-wrap">3 facturas • Tasa 3%</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-[198.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[281px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Satoshi:Regular',sans-serif] items-start leading-[1.5] not-italic relative text-[#737373] text-[12px] tracking-[0.18px] w-full">
        <p className="relative shrink-0 text-center">Correo pagaduría: correo@dominio.com</p>
        <p className="relative shrink-0">Correo registrado: correo@dominio.com</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[82.781px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">$3.230.100</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Frame1 />
      <Badge1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Distribuidora Nacional Ltda.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[124px] whitespace-pre-wrap">3 facturas • Tasa 2.8%</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-[218.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[281px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Satoshi:Regular',sans-serif] items-start leading-[1.5] not-italic relative text-[#737373] text-[12px] tracking-[0.18px] w-full">
        <p className="relative shrink-0 text-center">Correo pagaduría: correo@dominio.com</p>
        <p className="relative shrink-0">Correo registrado: correo@dominio.com</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[83.969px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">$3.732.480</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Frame2 />
      <Badge2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Comercializadora del Sur S.A.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#52525b] text-[12px] top-0 tracking-[0.3px] w-[124px] whitespace-pre-wrap">5 facturas • Tasa 2.6%</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[40px] relative shrink-0 w-[233.625px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[84.469px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">$8.259.520</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Badge3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function FactoringSelectionPage1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[300px] items-start relative shrink-0 w-full" data-name="FactoringSelectionPage">
      <Container />
      <FactoringSelectionPage2 />
      <Container9 />
      <Container14 />
      <Container19 />
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[580px] items-start left-[25px] overflow-clip top-[79px] w-[666px]" data-name="Primitive.div">
      <FactoringSelectionPage1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[671px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <PrimitiveDiv1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2020_277)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V8" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2020_277">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FactoringSelectionPage3() {
  return (
    <div className="absolute h-[19.5px] left-0 top-0 w-[144.078px]" data-name="FactoringSelectionPage">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#52525b] text-[12px] top-px tracking-[0.3px]">Términos y Condiciones:</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#52525b] text-[12px] tracking-[0.3px] whitespace-pre-wrap">El adelanto se depositará en tu cuenta en 24-48 horas hábiles</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">Las tasas aplicadas son las vigentes al momento de la operación</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#52525b] text-[12px] tracking-[0.3px] whitespace-pre-wrap">Te harás responsable de la validez de las facturas cedidas</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#52525b] text-[12px] tracking-[0.3px] whitespace-pre-wrap">Los pagadores serán notificados de la cesión de facturas</p>
    </div>
  );
}

function FactoringSelectionPage4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76px] items-start left-0 top-[31.5px] w-[373.234px]" data-name="FactoringSelectionPage">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function AlertDescription1() {
  return (
    <div className="absolute h-[107.5px] left-[45px] top-[13px] w-[400px]" data-name="AlertDescription">
      <FactoringSelectionPage3 />
      <FactoringSelectionPage4 />
    </div>
  );
}

function Alert1() {
  return (
    <div className="bg-white h-[133.5px] relative rounded-[10px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
      <AlertDescription1 />
    </div>
  );
}

function FactoringSelectionPage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[873px] items-start left-[24px] top-[86px] w-[716px]" data-name="FactoringSelectionPage">
      <Card />
      <Alert1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[93.563px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Cancelar</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#00c951] h-[36px] relative rounded-[8px] shrink-0 w-[173.469px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.35px]">Confirmar y Procesar</p>
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start justify-end left-[932px] top-[866px] w-[462px]" data-name="DialogFooter">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Icon3() {
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

function Badge4() {
  return (
    <div className="bg-[#00c951] h-[22px] relative rounded-[8px] shrink-0 w-[101.594px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon3 />
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.3px] w-[62px] whitespace-pre-wrap">14 facturas</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon4() {
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

function Badge5() {
  return (
    <div className="bg-[#00c951] flex-[1_0_0] h-[22px] min-h-px min-w-px relative rounded-[8px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon4 />
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-[31px] not-italic text-[12px] text-white top-[3.5px] tracking-[0.3px] w-[72px] whitespace-pre-wrap">4 pagadores</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[22px] relative shrink-0 w-[221.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Badge4 />
        <Badge5 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[123.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00c951] text-[12px] text-center tracking-[0.3px]">Limpiar selección</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between pr-[-6.43px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Button4 />
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

function Container27() {
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

function Container29() {
  return (
    <div className="h-[34.281px] relative shrink-0 w-[111.586px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[32px] relative shrink-0 w-[131.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#00c951] text-[24px] top-px tracking-[-0.6px]">$19.902.100</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[43.281px] items-end justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#737373] border-solid border-t inset-0 pointer-events-none" />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67.281px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Icon5() {
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

function Button5() {
  return (
    <div className="bg-[#00c951] h-[40px] relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,201,81,0.2),0px_4px_6px_0px_rgba(0,201,81,0.2)] shrink-0 w-[253px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[126.5px] not-italic text-[14px] text-center text-white top-[11px] tracking-[0.35px]">Confirmar Operación</p>
      <Icon5 />
    </div>
  );
}

function FactoringSelectionPage5() {
  return (
    <div className="h-[226px] relative shrink-0 w-[487px]" data-name="FactoringSelectionPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start pt-[20px] px-[20px] relative size-full">
        <Container24 />
        <Container26 />
        <Button5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white h-[227px] left-[13px] rounded-[14px] top-[414px] w-[597px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <FactoringSelectionPage5 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white border border-[#e4e4e7] border-solid h-[661px] left-[771px] rounded-[14px] top-[84px] w-[623px]" data-name="Card">
      <Card2 />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border border-[#e4e4e7] border-solid relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <FactoringSelectionPage />
      <DialogFooter />
      <Card1 />
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[0] left-[809px] not-italic text-[#1c2d3a] text-[0px] top-[145px] tracking-[0.45px]">
        <span className="leading-[18px] text-[16px]">
          Se realizara la siguiente operación:
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[16px]">
          Endoso en Propiedad con Responsabilidad
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[20px]">
          <br aria-hidden="true" />
          Sobre %X% facturas
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[16px]">
          Por un total de
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[20px]">
          $ 10.607.065
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[16px]">
          <br aria-hidden="true" />
          En nuevo legitimo tenedor será
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[20px]">CESIONBNK S.A.S.</span>
        <span className="font-['Satoshi:Bold',sans-serif] leading-[18px] text-[16px]">
          <br aria-hidden="true" />
          {`NIT:  9001298003-1`}
        </span>
      </p>
    </div>
  );
}