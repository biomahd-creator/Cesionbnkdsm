function Label() {
  return (
    <div className="absolute h-[21px] left-[68px] top-[60px] w-[152px]" data-name="Label">
      <p className="absolute css-4hzbpn font-['Satoshi:Medium',sans-serif] inset-0 leading-[1.5] not-italic text-[#171717] text-[14px] tracking-[0.07px]">En Negociación</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#65a30d] content-stretch flex gap-[6px] items-center justify-center left-[268px] min-h-[24px] px-[8px] py-[3px] rounded-[9999px] top-[59px]" data-name="Badge">
      <div className="css-g0mm18 flex flex-col font-['Satoshi:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.18px]">
        <p className="css-ew64yg leading-[1.5]">0</p>
      </div>
    </div>
  );
}

function IconArrowDownRight() {
  return (
    <div className="absolute left-[277px] size-[24px] top-[112px]" data-name="Icon / arrow-down-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / arrow-down-right">
          <path d="M7 7L17 17" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M17 7V17H7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[52px] top-[44px]">
      <div className="absolute bg-[#f7fee7] border border-[#e5e5e5] border-solid h-[103px] left-[52px] rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[44px] w-[265px]" />
      <Label />
      <p className="absolute css-ew64yg font-['Satoshi:Bold',sans-serif] leading-[1.2] left-[69px] not-italic text-[#65a30d] text-[20px] top-[105px] tracking-[-0.4px]">$ 0,00</p>
      <p className="absolute css-ew64yg font-['Satoshi:Regular',sans-serif] leading-[12px] left-[69px] not-italic text-[#a3a3a3] text-[12px] top-[81px]">Pendientes de confirmación</p>
      <Badge />
      <div className="absolute bg-[#84cc16] h-[46px] left-[52px] rounded-bl-[8px] rounded-br-[8px] top-[101px] w-[265px]" />
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Satoshi:Regular',sans-serif] leading-[1.2] left-[104.5px] not-italic text-[14px] text-center text-white top-[115px] tracking-[-0.28px]">Ver Facturas</p>
      <IconArrowDownRight />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Group />
    </div>
  );
}