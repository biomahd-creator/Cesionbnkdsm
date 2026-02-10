import svgPaths from "./svg-p30j76w1cq";

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
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white col-[1] css-3foyfs h-[29px] relative rounded-[12px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[148.43px] not-italic text-[#1c2d3a] text-[14px] text-center top-[5.5px]">Archivos</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[77.48px] size-[16px] top-[6.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1ad98a00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14e5ac0} id="Vector_2" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_3" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19416e00} id="Vector_4" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="col-[2] css-3foyfs h-[29px] relative rounded-[12px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[148.48px] not-italic text-[#71717a] text-[14px] text-center top-[5.5px]">Códigos CUFE</p>
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
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#193cb8] text-[14px] top-px tracking-[-0.35px]">Recomendación</p>
    </div>
  );
}

function AlertDescription() {
  return (
    <div className="absolute h-[20px] left-[45px] top-[35px] w-[488px]" data-name="AlertDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[0] left-0 not-italic text-[#71717a] text-[#737373] text-[0px] text-[14px] top-px tracking-[0.07px]">
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-none">
          Puedes procesar máximo 100 facturas por operación.
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-none">Formatos admitidos: ZIP, XML y Excel</span>
      </p>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] h-[84px] relative rounded-[8px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <AlertTitle />
      <AlertDescription />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 18.6667">
            <path d="M1.33333 1.33333V17.3333" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_29.17%_66.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33333">
            <path d={svgPaths.p1e4b7940} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 10.6667">
            <path d={svgPaths.p16d3e580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-[87.93px] pb-px pt-[17px] px-[17px] rounded-[16777200px] size-[66px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Icon3 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-0 top-px w-[98.398px]" data-name="Text">
      <p className="font-['Satoshi:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bfdd27] text-[14px] text-center w-[184px] whitespace-pre-wrap">Haz clic para cargar</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[-53.07px] top-[102px] w-[348px]" data-name="Paragraph">
      <Text />
      <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[234.9px] not-italic text-[#1c2d3a] text-[14px] text-center top-px">o arrastra y suelta aquí</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16px] left-[45.3px] top-[130px] w-[151.258px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[76px] not-italic text-[#71717a] text-[12px] text-center top-[0.5px] w-[152px] whitespace-pre-wrap">Supported: pdf, text/xml, xml</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[16px] left-[60.77px] top-[150px] w-[120.328px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[16px] left-[60.5px] not-italic text-[#71717a] text-[12px] text-center top-[0.5px] w-[121px] whitespace-pre-wrap">Max size: 10MB per file</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[190px] relative shrink-0 w-[241.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function FileUploader() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-center justify-center p-[2px] relative rounded-[8px] shrink-0 w-full" data-name="FileUploader">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(113,113,122,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

function Icon4() {
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

function AlertTitle1() {
  return (
    <div className="absolute h-[20px] left-[45px] overflow-clip top-[13px] w-[488px]" data-name="AlertTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#193cb8] text-[14px] top-px tracking-[-0.35px]">Información Importante</p>
    </div>
  );
}

function AlertDescription1() {
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

function Alert1() {
  return (
    <div className="bg-[rgba(239,246,255,0.5)] h-[136px] relative rounded-[8px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon4 />
      <AlertTitle1 />
      <AlertDescription1 />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[550px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Alert />
        <FileUploader />
        <Alert1 />
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[408px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <TabPanel />
    </div>
  );
}

function InvoiceUploadPage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[596px] items-start left-0 overflow-clip pt-[8px] px-[24px] top-[88px] w-[598px]" data-name="InvoiceUploadPage">
      <PrimitiveDiv1 />
    </div>
  );
}

function Text1() {
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

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[231.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function InvoiceUploadPage1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[550px]" data-name="InvoiceUploadPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
        <Container2 />
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="absolute bg-[rgba(244,244,245,0.2)] content-stretch flex h-[69px] items-center justify-end left-px pr-[24px] pt-[9px] top-[704px] w-[598px]" data-name="DialogFooter">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <InvoiceUploadPage1 />
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
      <DialogContent />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border border-[#e4e4e7] border-solid relative rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <InvoiceUploadPage />
      <DialogFooter />
      <PrimitiveButton2 />
    </div>
  );
}