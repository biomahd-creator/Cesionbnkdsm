import svgPaths from "./svg-7nnkcr2v8m";

function CardTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Card Title">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.3px] w-full">
        <p className="css-4hzbpn leading-none">Inicio de Sesión</p>
      </div>
      <p className="css-4hzbpn font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#737373] text-[14px] tracking-[0.07px] w-full">Completa los datos a continuación para ingresar</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute css-4hzbpn font-['Geist:Medium',sans-serif] font-medium inset-0 leading-[1.5] text-[#0a0a0a] text-[14px] tracking-[0.07px]">Correo Electrónico</p>
    </div>
  );
}

function Al() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[21px] items-center min-h-px min-w-px overflow-clip" data-name="AL" />;
}

function Input() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[7.5px] relative w-full">
          <Al />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Label">
      <p className="absolute css-4hzbpn font-['Geist:Medium',sans-serif] font-medium inset-0 leading-[1.5] text-[#0a0a0a] text-[14px] tracking-[0.07px]">Contraseña</p>
    </div>
  );
}

function Al1() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="AL">
      <Label1 />
      <p className="css-ew64yg font-['Geist:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0a0a0a] text-[14px] text-right tracking-[0.07px]">Olvidaste tu contraseña?</p>
    </div>
  );
}

function Al2() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[21px] items-center min-h-px min-w-px overflow-clip" data-name="AL" />;
}

function Input1() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[12px] py-[7.5px] relative w-full">
          <Al2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Field">
      <Al1 />
      <Input1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#171717] min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[16px] py-[7.5px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.07px]">
            <p className="css-ew64yg leading-[1.5]">Entrar</p>
          </div>
          <div className="h-[10.584px] relative shrink-0 w-[10.581px]" data-name="Right icon">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5804 10.5837">
                <path d={svgPaths.pd0c2300} fill="var(--fill-0, white)" id="Right icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Button group">
      <Button />
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name=".Login Form">
      <Field />
      <Field1 />
      <ButtonGroup />
    </div>
  );
}

function Card() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-[calc(75%+5px)] p-[64px] rounded-[8px] top-[calc(50%+13.5px)] w-[490px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[9px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <CardTitle />
      <LoginForm />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-[48.68%_67.53%_48.19%_15.54%]" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 30.7574">
        <g id="Container">
          <path d={svgPaths.p2b2bf200} fill="var(--fill-0, white)" id="path47" />
          <path d={svgPaths.p24669f00} fill="var(--fill-0, white)" id="path49" />
          <path d={svgPaths.p1f0ea300} fill="var(--fill-0, #43F977)" id="path51" />
          <path d={svgPaths.p8e7b700} fill="var(--fill-0, white)" id="path53" />
          <path d={svgPaths.p3aba2500} fill="var(--fill-0, white)" id="path55" />
          <path d={svgPaths.p258fa100} fill="var(--fill-0, white)" id="path57" />
          <path d={svgPaths.p483ec00} fill="var(--fill-0, white)" id="path59" />
          <path d={svgPaths.p9857700} fill="var(--fill-0, white)" id="path61" />
          <path d={svgPaths.p21e2b700} fill="var(--fill-0, white)" id="path63" />
          <path d={svgPaths.p1ce3500} fill="var(--fill-0, white)" id="path65" />
          <path d={svgPaths.p1a848c00} fill="var(--fill-0, white)" id="path67" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute contents inset-[48.68%_67.53%_48.19%_15.54%]" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute contents inset-[48.68%_67.53%_48.19%_15.54%]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute contents inset-[48.68%_67.53%_48.19%_15.54%]" data-name="Container">
      <Container2 />
    </div>
  );
}

function LoginForm1() {
  return (
    <div className="absolute contents left-[calc(16.67%-17px)] top-[478px]" data-name="Login Form">
      <Container3 />
      <p className="absolute css-ew64yg font-['Geist:Regular',sans-serif] font-normal leading-[1.2] left-[calc(16.67%+52px)] not-italic text-[20px] text-white top-[516.76px] tracking-[-0.4px]">Factoring Electrónico</p>
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <div className="absolute h-[982px] left-0 top-0 w-[1512px]" data-name="Main background" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 1512 982\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(151.2 -0.0000010471 3.8544 156.89 0.000052863 491.54)\'><stop stop-color=\'rgba(191,223,20,1)\' offset=\'0\'/><stop stop-color=\'rgba(154,212,40,1)\' offset=\'0.125\'/><stop stop-color=\'rgba(116,202,60,1)\' offset=\'0.25\'/><stop stop-color=\'rgba(79,191,79,1)\' offset=\'0.375\'/><stop stop-color=\'rgba(41,180,99,1)\' offset=\'0.5\'/><stop stop-color=\'rgba(30,130,71,1)\' offset=\'0.75\'/><stop stop-color=\'rgba(18,79,43,1)\' offset=\'1\'/></radialGradient></defs></svg>')" }} />
      <Card />
      <LoginForm1 />
    </div>
  );
}