import svgPaths from "./svg-rsck2qy52u";

function PrimitiveH() {
  return (
    <div className="h-[18px] relative shrink-0 w-[550px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[18px] left-0 not-italic text-[#1c2d3a] text-[18px] top-[0.5px]">Cargar Facturas</p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[20px] relative shrink-0 w-[550px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#71717a] text-[14px] top-px">Selecciona el método de carga de facturas .</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78px] items-start left-0 pl-[24px] pt-[24px] top-0 w-[598px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[96.93px] size-[16px] top-[6.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="col-[1] css-3foyfs h-[29px] relative rounded-[12px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[148.43px] not-italic text-[#71717a] text-[14px] text-center top-[5.5px]">Archivos</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[77.48px] size-[16px] top-[6.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1ad98a00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14e5ac0} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19416e00} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white col-[2] css-3foyfs h-[29px] relative rounded-[12px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[148.48px] not-italic text-[#1c2d3a] text-[14px] text-center top-[5.5px]">Códigos CUFE</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[12px] shrink-0 w-[550px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px]">Ingrese los códigos CUFE / CUDE</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[317px] relative rounded-[6px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#71717a] text-[14px] whitespace-nowrap">
            <p className="mb-0">Pegue aquí los códigos (uno por línea o separados por coma)...</p>
            <p className="mb-0">cufe1...</p>
            <p>cufe2...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[136.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-[0.5px]">Soporta múltiples códigos</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#71717a] text-[12px] top-[0.5px] w-[115px] whitespace-pre-wrap">0 códigos detectados</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <Text />
      <Text1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[247px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Textarea />
      <Paragraph />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1168_150)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V8" id="Vector_2" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1168_150">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertTitle() {
  return (
    <div className="absolute h-[20px] left-[45px] overflow-clip top-[13px] w-[488px]" data-name="AlertTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#193cb8] text-[14px] top-px tracking-[-0.35px]">Información Importante</p>
    </div>
  );
}

function AlertDescription() {
  return (
    <div className="absolute h-[20px] left-[45px] top-[35px] w-[488px]" data-name="AlertDescription">
      <ul className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#71717a] text-[14px] top-px w-[478px] whitespace-pre-wrap">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Solo se procesarán facturas con un formato válido.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Las facturas duplicadas serán identificadas y descartadas.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[normal]">Los archivos ZIP serán extraídos y procesados automáticamente.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[normal]">Las facturas se validarán automáticamente según los criterios definidos por el fondeador.</span>
        </li>
      </ul>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] h-[138px] relative rounded-[8px] shrink-0 w-[550px]" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <AlertTitle />
      <AlertDescription />
    </div>
  );
}

function InvoiceUploadPage1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[550px]" data-name="InvoiceUploadPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[131px] items-start relative size-full">
        <Container />
        <Alert />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[601px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <InvoiceUploadPage1 />
    </div>
  );
}

function InvoiceUploadPage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[626px] items-start left-0 overflow-clip pt-[8px] px-[24px] top-[78px] w-[598px]" data-name="InvoiceUploadPage">
      <PrimitiveDiv />
    </div>
  );
}

function Text2() {
  return <div className="h-[16px] shrink-0 w-[163.453px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-[90.758px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center">Cancelar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#bfdd27] flex-[1_0_0] h-[36px] min-h-px min-w-px opacity-50 relative rounded-[6px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center">{`Cargar `}</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[231.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function InvoiceUploadPage2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[550px]" data-name="InvoiceUploadPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Container1 />
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="absolute bg-[rgba(244,244,245,0.2)] content-stretch flex h-[69px] items-center justify-end left-0 pr-[24px] pt-[9px] top-[704px] w-[598px]" data-name="DialogFooter">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <InvoiceUploadPage2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute left-[7px] overflow-clip size-px top-[15px]" data-name="DialogContent">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1c2d3a] text-[16px] text-center top-px">Close</p>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute left-[566px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon3 />
      <DialogContent />
    </div>
  );
}

export default function CargaDeFacturasCufe() {
  return (
    <div className="bg-white border border-[#e4e4e7] border-solid relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Carga de Facturas / CUFE">
      <DialogHeader />
      <InvoiceUploadPage />
      <DialogFooter />
      <PrimitiveButton2 />
    </div>
  );
}