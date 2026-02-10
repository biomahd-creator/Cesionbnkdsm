import svgPaths from "./svg-2k5s79wfrk";

function Chart() {
  return (
    <div className="absolute left-[23px] size-[73px] top-[16px]" data-name="Chart">
      <div className="absolute inset-[-5.48%_-32.88%_-60.27%_-32.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 121">
          <g filter="url(#filter0_dd_1025_70)" id="Group 63">
            <circle cx="60.5" cy="40.5" id="Ellipse 217" r="36.5" stroke="var(--stroke-0, #EAB308)" strokeMiterlimit="16" strokeWidth="8" />
            <path d={svgPaths.p1946ca00} id="Ellipse 218" stroke="var(--stroke-0, #C52263)" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="8" />
            <path d={svgPaths.p15957d00} id="Ellipse 219" stroke="var(--stroke-0, #22C55E)" strokeLinejoin="round" strokeMiterlimit="16" strokeWidth="8" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="121" id="filter0_dd_1025_70" width="121" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="6" result="effect1_dropShadow_1025_70" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1025_70" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="5" result="effect2_dropShadow_1025_70" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_1025_70" mode="normal" result="effect2_dropShadow_1025_70" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1025_70" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChartContainer() {
  return (
    <div className="absolute contents left-[23px] top-[16px]" data-name="Chart Container">
      <p className="absolute css-4hzbpn font-['Satoshi:Bold',sans-serif] leading-none left-[60px] not-italic text-[12px] text-black text-center top-[41px] tracking-[-0.24px] translate-x-[-50%] w-[32px]">120 Días</p>
      <Chart />
    </div>
  );
}

export default function Card() {
  return (
    <div className="relative size-full" data-name="Card">
      <div className="absolute bg-white h-[101px] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[476px]" data-name="Card Background" />
      <p className="absolute css-4hzbpn font-['Satoshi:Regular',sans-serif] inset-[32.67%_60.08%_55.45%_26.47%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Total Facturas</p>
      <p className="absolute css-4hzbpn font-['Geist:Regular',sans-serif] font-['Satoshi:Bold',sans-serif] font-normal inset-[32.67%_34.66%_55.45%_46.22%] leading-[0] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">
        <span className="leading-[1.2]">{`$ 10.000.000 `}</span>
        <span className="css-eoz90d leading-[1.2] text-[6.45px]">MXN</span>
      </p>
      <p className="absolute css-ew64yg font-['Geist:Bold',sans-serif] font-bold inset-[10.89%_45.8%_75.25%_26.47%] leading-[1.2] text-[#737373] text-[12px] tracking-[-0.24px]">Detalle de la Operación</p>
      <p className="absolute css-ew64yg font-['Satoshi:Regular',sans-serif] inset-[32.67%_22.27%_55.45%_70.59%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Reserva</p>
      <p className="absolute css-ew64yg font-['Satoshi:Bold',sans-serif] inset-[32.67%_14.5%_55.45%_81.09%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">10%</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Regular',sans-serif] inset-[47.52%_56.93%_40.59%_26.47%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Monto de Credito</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Bold',sans-serif] inset-[47.52%_39.5%_40.59%_46.22%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">$ 9.000.000</p>
      <p className="absolute css-ew64yg font-['Satoshi:Regular',sans-serif] inset-[47.52%_22.06%_40.59%_70.59%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Anticipo</p>
      <p className="absolute css-ew64yg font-['Satoshi:Bold',sans-serif] inset-[47.52%_14.08%_40.59%_81.09%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">90%</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Regular',sans-serif] inset-[62.38%_57.35%_25.74%_26.47%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Costo Financiero</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Bold',sans-serif] inset-[62.38%_41.39%_25.74%_46.22%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">$ 500.000</p>
      <p className="absolute css-ew64yg font-['Satoshi:Regular',sans-serif] inset-[62.38%_21.01%_25.74%_70.59%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Tasa/Mes</p>
      <p className="absolute css-ew64yg font-['Satoshi:Bold',sans-serif] inset-[62.38%_13.87%_25.74%_81.09%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">2.5%</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Regular',sans-serif] inset-[62.38%_4.83%_25.74%_87.61%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">60 Dias</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Regular',sans-serif] inset-[77.23%_60.5%_10.89%_26.47%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">Total Anticipo</p>
      <p className="absolute css-4hzbpn font-['Satoshi:Bold',sans-serif] inset-[77.23%_39.71%_10.89%_46.22%] leading-[1.2] not-italic text-[#737373] text-[10px] tracking-[-0.2px]">$ 8.500.000</p>
      <div className="absolute h-0 left-[126px] top-[78px] w-[329px]">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 329 1">
            <line id="Line 344" stroke="var(--stroke-0, #E5E5E5)" x2="329" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ChartContainer />
      <div className="absolute left-[321px] size-[8px] top-[35px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #EAB308)" id="Ellipse 270" r="4" />
        </svg>
      </div>
      <div className="absolute left-[321px] size-[8px] top-[50px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #22C55E)" id="Ellipse 281" r="4" />
        </svg>
      </div>
      <div className="absolute left-[321px] size-[8px] top-[65px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #C52263)" id="Ellipse 282" r="4" />
        </svg>
      </div>
    </div>
  );
}