import svgPaths from "./svg-aklgk57xf5";

function Container2() {
  return (
    <div className="absolute contents inset-0" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 256 30.7575">
        <g id="Container">
          <path d={svgPaths.p3ee20600} fill="var(--fill-0, #212529)" id="path47" />
          <path d={svgPaths.p301ad2e0} fill="var(--fill-0, #212529)" id="path49" />
          <path d={svgPaths.p12e48500} fill="var(--fill-0, #212529)" id="path51" />
          <path d={svgPaths.p18eb5400} fill="var(--fill-0, #212529)" id="path53" />
          <path d={svgPaths.p32547c00} fill="var(--fill-0, #212529)" id="path55" />
          <path d={svgPaths.p12b3b270} fill="var(--fill-0, #212529)" id="path57" />
          <path d={svgPaths.pb23ef80} fill="var(--fill-0, #212529)" id="path59" />
          <path d={svgPaths.p2a738d80} fill="var(--fill-0, #212529)" id="path61" />
          <path d={svgPaths.p197eee00} fill="var(--fill-0, #212529)" id="path63" />
          <path d={svgPaths.pe3a59f0} fill="var(--fill-0, #212529)" id="path65" />
          <path d={svgPaths.p2267b580} fill="var(--fill-0, #212529)" id="path67" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute contents inset-0" data-name="Container">
      <Container2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}