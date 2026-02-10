import svgPaths from "./svg-4swc0pceph";

function Badge() {
  return (
    <div className="absolute bg-[rgba(191,222,255,0.7)] content-stretch flex gap-[6px] items-center justify-center left-[537px] min-h-[24px] px-[8px] py-[3px] rounded-[8px] top-[32.29px]" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">Aceptación expresa</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(185,251,210,0.7)] content-stretch flex gap-[6px] items-center justify-center left-[682px] min-h-[24px] px-[8px] py-[3px] rounded-[8px] top-[32.29px]" data-name="Badge">
      <div className="flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#171717] text-[12px] text-center tracking-[0.18px] whitespace-nowrap">
        <p className="leading-[1.5]">Endosable</p>
      </div>
    </div>
  );
}

function Progress() {
  return (
    <div className="absolute h-[7.176px] left-[1013px] top-[32.29px] w-[103px]" data-name="Progress">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 7.17647">
        <g clipPath="url(#clip0_1174_763)" id="Progress">
          <path d={svgPaths.pf549800} fill="var(--fill-0, #D4D4D4)" id="Overall" />
          <path d={svgPaths.p11883600} fill="var(--fill-0, #22C55E)" id="Progress_2" />
        </g>
        <defs>
          <clipPath id="clip0_1174_763">
            <rect fill="white" height="7.17647" width="103" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1013px] top-[32.29px]">
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[16.147px] leading-[1.5] left-[1013px] not-italic text-[#0a0a0a] text-[12px] top-[41.26px] tracking-[0.18px] w-[38px] whitespace-pre-wrap">27 Nov</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[16.147px] leading-[1.5] left-[1081px] not-italic text-[#0a0a0a] text-[12px] top-[41.26px] tracking-[0.18px] w-[35px] whitespace-pre-wrap">27 Dic</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[16.147px] leading-[1.5] left-[1062px] not-italic text-[#0a0a0a] text-[12px] top-[41.26px] tracking-[0.18px] w-[11px] whitespace-pre-wrap">→</p>
      <Progress />
    </div>
  );
}

function IconCheck() {
  return (
    <div className="absolute left-px size-[14px] top-px" data-name="Icon / check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / check">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Checkbox">
      <div className="absolute bg-black left-0 rounded-[4px] size-[16px] top-0" data-name="Background">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
      <IconCheck />
    </div>
  );
}

function CheckboxGroup() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[21.529px] items-center left-[15px] top-[29.6px]" data-name="Checkbox Group">
      <Checkbox />
      <p className="font-['Satoshi:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#404040] text-[14px] tracking-[0.07px]">&nbsp;</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[15px] top-[16.15px]">
      <Badge />
      <Badge1 />
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[537px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[74px] whitespace-pre-wrap">Ultimo Evento</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[398px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[78px] whitespace-pre-wrap">Valor Adelanto</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[237px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[70px] whitespace-pre-wrap">Valor Factura</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[56px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[65px] whitespace-pre-wrap">Numeración</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[675px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[36px] whitespace-pre-wrap">Estado</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[775px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[79px] whitespace-pre-wrap">Observaciones</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[1013px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[46px] whitespace-pre-wrap">Vigencia</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[10.765px] leading-[12px] left-[1167px] not-italic text-[#737373] text-[12px] top-[16.15px] tracking-[0.06px] w-[104px] whitespace-pre-wrap">Días al Vencimiento</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[18.838px] leading-[1.5] left-[56px] not-italic text-[#0a0a0a] text-[14px] top-[32.29px] tracking-[0.21px] w-[105px] whitespace-pre-wrap">SETP123456790</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[18.838px] leading-[1.5] left-[237px] not-italic text-[#0a0a0a] text-[14px] top-[32.29px] tracking-[0.21px] w-[100px] whitespace-pre-wrap">$ 8.345.679.123</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[18.838px] leading-[1.5] left-[397px] not-italic text-[#0a0a0a] text-[14px] top-[32.29px] tracking-[0.21px] w-[123px] whitespace-pre-wrap">$ 10.000.000.000</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[18.838px] leading-[1.5] left-[1211px] not-italic text-[#0a0a0a] text-[14px] top-[32.29px] tracking-[0.21px] w-[18px] whitespace-pre-wrap">30</p>
      <p className="absolute font-['Satoshi:Regular',sans-serif] h-[18.838px] leading-[0] left-[775px] not-italic text-[#0a0a0a] text-[0px] text-[14px] top-[32.29px] tracking-[0.21px] w-[188px] whitespace-pre-wrap">
        <span className="leading-[1.5]">{`Agravamiento Riesgo:  ... `}</span>
        <span className="decoration-solid leading-[1.5] text-[#193cb8] underline">mas</span>
      </p>
      <Group />
      <CheckboxGroup />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white border border-[#e5e5e5] border-solid h-[61px] left-0 rounded-[8px] top-0 w-[1426px]" />
      <Group1 />
    </div>
  );
}