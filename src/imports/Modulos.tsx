import svgPaths from "./svg-aubx2eviab";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-1t7yz";

function ButtonContainer() {
  return (
    <div className="absolute inset-[15.48%_8.99%_81.39%_74.07%]" data-name="Button Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 30.7573">
        <g id="Button Container">
          <path d={svgPaths.p34620400} fill="var(--fill-0, #171717)" id="path47" />
          <path d={svgPaths.p1b87caa0} fill="var(--fill-0, #171717)" id="path49" />
          <path d={svgPaths.p892ebf0} fill="var(--fill-0, #29B463)" id="path51" />
          <path d={svgPaths.p23ad1a00} fill="var(--fill-0, #171717)" id="path53" />
          <path d={svgPaths.pc919e00} fill="var(--fill-0, #171717)" id="path55" />
          <path d={svgPaths.p2bbc1b80} fill="var(--fill-0, #171717)" id="path57" />
          <path d={svgPaths.p13d5a580} fill="var(--fill-0, #171717)" id="path59" />
          <path d={svgPaths.p33671400} fill="var(--fill-0, #171717)" id="path61" />
          <path d={svgPaths.p31922900} fill="var(--fill-0, #171717)" id="path63" />
          <path d={svgPaths.p25dcaf00} fill="var(--fill-0, #171717)" id="path65" />
          <path d={svgPaths.p28113700} fill="var(--fill-0, #171717)" id="path67" />
        </g>
      </svg>
    </div>
  );
}

function PasswordContainer() {
  return (
    <div className="absolute contents inset-[15.48%_8.99%_81.39%_74.07%]" data-name="Password Container">
      <ButtonContainer />
    </div>
  );
}

function EmailContainer() {
  return (
    <div className="absolute contents inset-[15.48%_8.99%_81.39%_74.07%]" data-name="Email Container">
      <PasswordContainer />
    </div>
  );
}

function LoginContainer() {
  return (
    <div className="absolute contents inset-[15.48%_8.99%_81.39%_74.07%]" data-name="Login Container">
      <EmailContainer />
    </div>
  );
}

function LogoGraphic() {
  return (
    <div className="absolute inset-[32.28%_8.66%_17.97%_59.13%]" data-name="Logo Graphic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487 488.522">
        <g id="Logo Graphic">
          <path d={svgPaths.p343db300} fill="var(--fill-0, #DEFB49)" id="Vector" />
          <path d={svgPaths.p9715c80} fill="var(--fill-0, #43F977)" id="Vector_2" />
          <path d={svgPaths.p36606300} fill="var(--fill-0, #1C2D3A)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 h-[57.846px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.617px_-0.348px] mask-size-[64px_58.553px] ml-[0.96%] mt-[0.59%] relative row-1 w-[62.766px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.7659 57.8462">
        <g id="Group">
          <path d={svgPaths.p1e79b00} fill="var(--fill-0, #2B6756)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p315c7700} fill="var(--fill-0, #171717)" id="Vector_2" />
          <path d={svgPaths.p2481400} fill="var(--fill-0, #171717)" id="Vector_3" />
          <path d={svgPaths.p3c0cff80} fill="var(--fill-0, #DEFB49)" id="Vector_4" />
          <path d={svgPaths.p4304480} fill="var(--fill-0, #DEFB49)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Download() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="download 1">
      <ClipPathGroup />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 text-[#171717] w-[296px]" data-name="Card Title">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Factoring</p>
      </div>
      <p className="css-4hzbpn font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[14px] tracking-[0.07px] w-full">Revisa las operaciones en curso y las oportunidades de tener liquidez en 24 hrs.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] h-[107px] items-end left-[calc(8.33%+2px)] p-[24px] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] top-[367px] w-[421px]" data-name="Card">
      <Download />
      <CardTitle />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.578px_-0.578px] mask-size-[59px_59px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.8439 57.8431">
        <g id="Group">
          <path d={svgPaths.p4665b00} fill="var(--fill-0, #004646)" fillOpacity="0.10196" id="Vector" />
          <path d={svgPaths.pca0d100} fill="var(--fill-0, #333333)" id="Vector_2" />
          <path d={svgPaths.paea0280} fill="var(--fill-0, #DEFB49)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group2 />
    </div>
  );
}

function Download2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[59px]" data-name="download 3">
      <Group3 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Card Title">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Vinculaciones</p>
      </div>
      <p className="css-4hzbpn font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#8c8c8c] text-[14px] tracking-[0.07px] w-full">Revisa y Aprueba las Solicitudes de Vinculación de tus Clientes</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] h-[107px] items-end left-[calc(8.33%+2px)] p-[24px] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] top-[660px] w-[423px]" data-name="Card">
      <Download2 />
      <CardTitle1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0.05%_1.38%_1.22%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.027px] mask-size-[52px_58px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2799 57.2677">
        <g id="Group">
          <path d={svgPaths.p2eea1600} fill="var(--fill-0, #2B6756)" fillOpacity="0.1" id="Vector" />
          <path d={svgPaths.p6218f80} fill="var(--fill-0, #19352D)" id="Vector_2" />
          <path d={svgPaths.p134c5900} fill="var(--fill-0, #19352D)" id="Vector_3" />
          <path d={svgPaths.p2b9ee100} fill="var(--fill-0, #19352D)" id="Vector_4" />
          <path d={svgPaths.p6c0e880} fill="var(--fill-0, #19352D)" id="Vector_5" />
          <path d={svgPaths.p20bc7c00} fill="var(--fill-0, #DEFB49)" id="Vector_6" />
          <path d={svgPaths.p3daf1300} fill="var(--fill-0, #DEFB49)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Download1() {
  return (
    <div className="h-[58px] overflow-clip relative shrink-0 w-[52px]" data-name="download 2">
      <ClipPathGroup2 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Card Title">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Eventos RADIAN</p>
      </div>
      <p className="css-4hzbpn font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#052937] text-[14px] tracking-[0.07px] w-full">Notifica eventos a RADIAN</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] h-[107px] items-end left-[calc(8.33%+2px)] p-[24px] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] top-[513px] w-[423px]" data-name="Card">
      <Download1 />
      <CardTitle2 />
    </div>
  );
}

export default function Modulos() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Modulos">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Satoshi:Regular',sans-serif] justify-center leading-[0] left-[calc(83.33%+83px)] not-italic text-[#defb49] text-[12px] top-[39px] tracking-[0.18px] w-[68px]">
        <p className="css-4hzbpn leading-[1.5]">CFINANCIA</p>
      </div>
      <p className="absolute css-ew64yg font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] left-[calc(8.33%+2px)] text-[24px] text-white top-[268px] tracking-[-0.48px]">Módulos de Operación</p>
      <p className="absolute css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[calc(8.33%+2px)] text-[14px] text-white top-[297px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Accede a las funcionalidades principales de la plataforma.
      </p>
      <LoginContainer />
      <LogoGraphic />
      <Card />
      <Card1 />
      <Card2 />
      <p className="absolute css-ew64yg font-['Satoshi_Variable:Bold',sans-serif] font-bold leading-[1.2] left-[calc(75%+45px)] text-[20px] text-white top-[189px] tracking-[-0.4px]">Factoring Electrónico</p>
    </div>
  );
}