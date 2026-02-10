import svgPaths from "./svg-nztu84ca8n";

function Sidebar() {
  return <div className="absolute h-[5315px] left-0 top-0 w-[256px]" data-name="Sidebar" />;
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[148.875px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#1c2d3a] text-[36px] top-px tracking-[0.9px]">Textarea</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[52.75px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1c2d3a] text-[12px] tracking-[0.3px]">Forms</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Badge />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Displays a multi-line text input field for longer content like messages, descriptions, and comments.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Paragraph />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[#e4e4e7] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function CardTitle() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Preview</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Vista previa interactiva del componente</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle />
      <CardDescription />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Type your message here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white h-[64px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Disabled textarea</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextareaPage() {
  return (
    <div className="h-[144px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Textarea />
        <Textarea1 />
      </div>
    </div>
  );
}

function ComponentShowcase1() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage />
      </div>
    </div>
  );
}

function PrimitiveDiv1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[254px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList />
      <ComponentShowcase1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[374px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <PrimitiveDiv1 />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Usage</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Cómo usar este componente en tu aplicación</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[70px] relative shrink-0 w-[881px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] pt-[24px] px-[24px] relative size-full">
        <CardTitle1 />
        <CardDescription1 />
      </div>
    </div>
  );
}

function ComponentShowcase2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ComponentShowcase">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-px tracking-[0.35px] w-[779px] whitespace-pre-wrap">Importa el componente Textarea desde @/components/ui/textarea. Ideal para formularios que requieren entrada de texto multilínea como comentarios, descripciones, mensajes, o cualquier contenido que supere una sola línea.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-0 tracking-[0.3px]">example.tsx</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10734)" id="Icon">
          <path d={svgPaths.p216f800} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13e4b3c0} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10734">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CodeBlock1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.063px]" data-name="CodeBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center tracking-[0.3px]">Copy</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative rounded-[8px] shrink-0 w-[76.063px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center relative size-full">
        <Icon />
        <CodeBlock1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#0f172b] h-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px px-[16px] relative size-full">
          <Text />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">1</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">2</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">3</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">4</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">5</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">6</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">7</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">8</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17.05px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">9</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">10</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">11</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">12</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">13</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">14</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-[17px] not-italic text-[#45556c] text-[14px] text-right top-[-1px] tracking-[0.35px]">15</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[300px] relative shrink-0 w-[33.109px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d293d] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[17px] relative size-full">
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
        <Container14 />
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`import { Textarea } from "@/components/ui/textarea";`}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`import { Label } from "@/components/ui/label";`}</p>
    </div>
  );
}

function Container23() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`function ContactForm() {`}</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`  return (`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`    <div className="space-y-2">`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`      <Label htmlFor="message">Message</Label>`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`      <Textarea `}</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`        id="message"`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`        placeholder="Enter your message..."`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`        rows={5}`}</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`      />`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`    </div>`}</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`  );`}</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#e2e8f0] text-[14px] top-[-1px] tracking-[0.35px]">{`}`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-[300px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[300px] items-start left-0 top-0 w-[799px]" data-name="Container">
      <Container4 />
      <Container20 />
    </div>
  );
}

function Code() {
  return (
    <div className="h-[300px] relative shrink-0 w-full" data-name="Code">
      <Container3 />
    </div>
  );
}

function CodeBlock2() {
  return (
    <div className="h-[332px] relative shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
          <Code />
        </div>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="bg-[#020618] h-[375px] relative rounded-[10px] shrink-0 w-full" data-name="CodeBlock">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container2 />
          <CodeBlock2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function CardContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[881px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">
        <ComponentShowcase2 />
        <CodeBlock />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[551px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader1 />
      <CardContent />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Props</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Propiedades disponibles para este componente</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle2 />
      <CardDescription2 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[143.172px]" data-name="Header Cell">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[16px] not-italic text-[#1c2d3a] text-[14px] top-[13px] tracking-[0.35px]">Prop</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[44.5px] left-[143.17px] top-0 w-[378.516px]" data-name="Header Cell">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[16px] not-italic text-[#1c2d3a] text-[14px] top-[13px] tracking-[0.35px]">Type</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[44.5px] left-[521.69px] top-0 w-[86.5px]" data-name="Header Cell">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[16px] not-italic text-[#1c2d3a] text-[14px] top-[13px] tracking-[0.35px]">Default</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[44.5px] left-[608.19px] top-0 w-[224.813px]" data-name="Header Cell">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[20px] left-[16px] not-italic text-[#1c2d3a] text-[14px] top-[13px] tracking-[0.35px]">Description</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[44.5px] left-0 top-0 w-[833px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[44.5px] left-0 top-0 w-[833px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Code1() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[22.5px] w-[103.078px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">placeholder</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code1 />
    </div>
  );
}

function Code2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[25.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">string</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[65px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[22.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[65px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[65px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[13.5px] tracking-[0.35px] w-[181px] whitespace-pre-wrap">Texto de ayuda cuando está vacío</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[65px] left-0 top-0 w-[833px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Code3() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[78.781px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">disabled</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code3 />
    </div>
  );
}

function Code4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[17.5px] w-[56.688px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">boolean</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code4 />
    </div>
  );
}

function Code5() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[54.5px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">false</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Code5 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[15.5px] tracking-[0.35px]">Deshabilita el textarea</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[49px] left-0 top-[65px] w-[833px]" data-name="Table Row">
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Code6() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[46.391px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">rows</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code6 />
    </div>
  );
}

function Code7() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[17.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">number</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code7 />
    </div>
  );
}

function Code8() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[22.109px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">3</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Code8 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[15.5px] tracking-[0.35px]">Número de líneas visibles</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[49px] left-0 top-[114px] w-[833px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Code9() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[54.5px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">value</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code9 />
    </div>
  );
}

function Code10() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[17.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">string</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code10 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[14.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text2 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[15.5px] tracking-[0.35px]">Valor controlado del textarea</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[49px] left-0 top-[163px] w-[833px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Code11() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[111.172px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">defaultValue</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code11 />
    </div>
  );
}

function Code12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[17.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">string</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code12 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[14.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[15.5px] tracking-[0.35px]">Valor inicial no controlado</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[49px] left-0 top-[212px] w-[833px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Code13() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[26.5px] w-[78.781px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">onChange</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code13 />
    </div>
  );
}

function Code14() {
  return (
    <div className="absolute h-[41px] left-[16px] top-[17.5px] w-[323.891px]" data-name="Code">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#52525b] text-[14px] top-[-2px] tracking-[0.4px] w-[324px] whitespace-pre-wrap">{`(e: ChangeEvent<HTMLTextAreaElement>) => void`}</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[73px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code14 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[26.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[73px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text4 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[73px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[17.5px] tracking-[0.35px] w-[176px] whitespace-pre-wrap">Callback cuando cambia el valor</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[73px] left-0 top-[261px] w-[833px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function Code15() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[22.5px] w-[86.891px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">maxLength</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code15 />
    </div>
  );
}

function Code16() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[25.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">number</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[65px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code16 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[22.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[65px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[65px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[13.5px] tracking-[0.35px] w-[132px] whitespace-pre-wrap">Longitud máxima de caracteres</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[65px] left-0 top-[334px] w-[833px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Code17() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[22.5px] w-[78.781px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">required</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code17 />
    </div>
  );
}

function Code18() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[25.5px] w-[56.688px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">boolean</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[65px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code18 />
    </div>
  );
}

function Code19() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[22.5px] w-[54.5px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">false</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[65px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Code19 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[65px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[13.5px] tracking-[0.35px] w-[134px] whitespace-pre-wrap">Campo requerido en formularios</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[65px] left-0 top-[399px] w-[833px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function Code20() {
  return (
    <div className="absolute bg-[rgba(28,45,58,0.1)] content-stretch flex h-[23px] items-start left-[16px] px-[7px] py-[3px] rounded-[4px] top-[14.5px] w-[86.891px]" data-name="Code">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.4px]">className</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[143.172px]" data-name="Table Cell">
      <Code20 />
    </div>
  );
}

function Code21() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[16px] top-[17.5px] w-[48.594px]" data-name="Code">
      <p className="font-['Consolas:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.4px]">string</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[143.17px] top-0 w-[378.516px]" data-name="Table Cell">
      <Code21 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[14.5px] w-[7.094px]" data-name="Text">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#52525b] text-[16px] tracking-[0.4px]">-</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[521.69px] top-0 w-[86.5px]" data-name="Table Cell">
      <Text6 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-[608.19px] top-0 w-[224.813px]" data-name="Table Cell">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#52525b] text-[14px] top-[15.5px] tracking-[0.35px]">Clases CSS adicionales</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#e4e4e7] border-b border-solid h-[49px] left-0 top-[464px] w-[833px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[513px] left-0 top-[44.5px] w-[833px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
    </div>
  );
}

function ComponentShowcase3() {
  return (
    <div className="absolute h-[558px] left-[25px] overflow-clip top-[95px] w-[833px]" data-name="ComponentShowcase">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[678px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader2 />
      <ComponentShowcase3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#1c2d3a] text-[24px] top-px tracking-[0.6px]">Examples</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Diferentes variaciones y casos de uso</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">With Label</p>
    </div>
  );
}

function CardDescription3() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea con label descriptivo para mejor accesibilidad</p>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle3 />
      <CardDescription3 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList1() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton2 />
        <PrimitiveButton3 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Message</p>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Enter your message here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextareaPage1() {
  return (
    <div className="h-[86px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <PrimitiveLabel />
        <Textarea2 />
      </div>
    </div>
  );
}

function ComponentShowcase4() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage1 />
      </div>
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[194px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList1 />
      <ComponentShowcase4 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[314px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader3 />
      <PrimitiveDiv2 />
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Different Sizes</p>
    </div>
  );
}

function CardDescription4() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Control del tamaño mediante la prop rows</p>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle4 />
      <CardDescription4 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList2() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton4 />
        <PrimitiveButton5 />
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Small (3 rows)</p>
    </div>
  );
}

function Textarea3() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Small textarea...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Textarea3 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Medium (5 rows)</p>
    </div>
  );
}

function Textarea4() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Medium textarea...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Textarea4 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Large (10 rows)</p>
    </div>
  );
}

function Textarea5() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Large textarea...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Textarea5 />
    </div>
  );
}

function TextareaPage2() {
  return (
    <div className="h-[290px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function ComponentShowcase5() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage2 />
      </div>
    </div>
  );
}

function PrimitiveDiv3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[384px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList2 />
      <ComponentShowcase5 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[504px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader4 />
      <PrimitiveDiv3 />
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">With Helper Text</p>
    </div>
  );
}

function CardDescription5() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea con texto de ayuda y contador de caracteres</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle5 />
      <CardDescription5 />
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList3() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton6 />
        <PrimitiveButton7 />
      </div>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Bio</p>
    </div>
  );
}

function Textarea6() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Tell us about yourself...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Maximum 500 characters</p>
    </div>
  );
}

function TextareaPage3() {
  return (
    <div className="h-[118px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <PrimitiveLabel4 />
        <Textarea6 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function ComponentShowcase6() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage3 />
      </div>
    </div>
  );
}

function PrimitiveDiv4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[212px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList3 />
      <ComponentShowcase6 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[332px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader5 />
      <PrimitiveDiv4 />
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Character Counter</p>
    </div>
  );
}

function CardDescription6() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea con contador de caracteres en tiempo real</p>
    </div>
  );
}

function CardHeader6() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle6 />
      <CardDescription6 />
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList4() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton8 />
        <PrimitiveButton9 />
      </div>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Comment</p>
    </div>
  );
}

function Textarea7() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Write a comment...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-[448.09px] not-italic text-[#52525b] text-[16px] text-right top-px tracking-[0.4px] w-[49px] whitespace-pre-wrap">0/200</p>
    </div>
  );
}

function TextareaWithCounter() {
  return (
    <div className="h-[118px] relative shrink-0 w-[448px]" data-name="TextareaWithCounter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <PrimitiveLabel5 />
        <Textarea7 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function ComponentShowcase7() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaWithCounter />
      </div>
    </div>
  );
}

function PrimitiveDiv5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[212px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList4 />
      <ComponentShowcase7 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[332px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader6 />
      <PrimitiveDiv5 />
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Disabled State</p>
    </div>
  );
}

function CardDescription7() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea en estado deshabilitado</p>
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle7 />
      <CardDescription7 />
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList5() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton10 />
        <PrimitiveButton11 />
      </div>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Disabled Empty</p>
    </div>
  );
}

function Textarea8() {
  return (
    <div className="bg-white h-[64px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">This is disabled</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Textarea8 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Disabled with Content</p>
    </div>
  );
}

function Textarea9() {
  return (
    <div className="bg-white h-[64px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">This textarea is disabled and contains some text that cannot be edited.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea9 />
    </div>
  );
}

function TextareaPage4() {
  return (
    <div className="h-[188px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function ComponentShowcase8() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage4 />
      </div>
    </div>
  );
}

function PrimitiveDiv6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[282px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList5 />
      <ComponentShowcase8 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[402px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader7 />
      <PrimitiveDiv6 />
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Form Integration</p>
    </div>
  );
}

function CardDescription8() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea integrado en un formulario completo</p>
    </div>
  );
}

function CardHeader8() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle8 />
      <CardDescription8 />
    </div>
  );
}

function PrimitiveButton12() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton13() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList6() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton12 />
        <PrimitiveButton13 />
      </div>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Subject</p>
    </div>
  );
}

function Textarea10() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Email subject...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Textarea10 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Message Body</p>
    </div>
  );
}

function Textarea11() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Write your message...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <Textarea11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00c951] h-[36px] relative rounded-[8px] shrink-0 w-[65.531px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.35px]">Send</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[80.234px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Cancel</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function TextareaPage5() {
  return (
    <div className="h-[240px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container43 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function ComponentShowcase9() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage5 />
      </div>
    </div>
  );
}

function PrimitiveDiv7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[334px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList6 />
      <ComponentShowcase9 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white h-[454px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader8 />
      <PrimitiveDiv7 />
    </div>
  );
}

function CardTitle9() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Required Field</p>
    </div>
  );
}

function CardDescription9() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea como campo requerido con indicador visual</p>
    </div>
  );
}

function CardHeader9() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle9 />
      <CardDescription9 />
    </div>
  );
}

function PrimitiveButton14() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton15() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList7() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton14 />
        <PrimitiveButton15 />
      </div>
    </div>
  );
}

function TextareaPage7() {
  return (
    <div className="absolute h-[14px] left-[72.08px] top-0 w-[6.109px]" data-name="TextareaPage">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[14px] left-0 not-italic text-[#ef4444] text-[14px] top-px tracking-[0.35px]">*</p>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[14px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Feedback</p>
      <TextareaPage7 />
    </div>
  );
}

function Textarea12() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Your feedback is required...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">This field is required</p>
    </div>
  );
}

function TextareaPage6() {
  return (
    <div className="h-[118px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <PrimitiveLabel10 />
        <Textarea12 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function ComponentShowcase10() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage6 />
      </div>
    </div>
  );
}

function PrimitiveDiv8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[212px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList7 />
      <ComponentShowcase10 />
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-white h-[332px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader9 />
      <PrimitiveDiv8 />
    </div>
  );
}

function CardTitle10() {
  return (
    <div className="col-[1] relative row-[1] self-stretch shrink-0" data-name="CardTitle">
      <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">With Error State</p>
    </div>
  );
}

function CardDescription10() {
  return (
    <div className="col-[1] relative row-[2] self-stretch shrink-0" data-name="CardDescription">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#52525b] text-[16px] top-px tracking-[0.4px]">Textarea mostrando un estado de error</p>
    </div>
  );
}

function CardHeader10() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[__minmax(0,_16fr)_minmax(0,_1fr)] h-[70px] left-px pt-[24px] px-[24px] top-px w-[881px]" data-name="CardHeader">
      <CardTitle10 />
      <CardDescription10 />
    </div>
  );
}

function PrimitiveButton16() {
  return (
    <div className="bg-white col-[1] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] text-center tracking-[0.35px]">Preview</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton17() {
  return (
    <div className="col-[2] h-[29px] relative rounded-[14px] row-[1] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] text-center tracking-[0.35px]">Code</p>
        </div>
      </div>
    </div>
  );
}

function TabList8() {
  return (
    <div className="bg-[#f4f4f5] h-[36px] relative rounded-[14px] shrink-0 w-[833px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[3px] py-[3.5px] relative size-full">
        <PrimitiveButton16 />
        <PrimitiveButton17 />
      </div>
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="content-stretch flex h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1c2d3a] text-[14px] tracking-[0.35px]">Description</p>
    </div>
  );
}

function Textarea13() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Satoshi:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#52525b] text-[14px] tracking-[0.35px]">Enter description...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#ef4444] text-[16px] top-px tracking-[0.4px]">Description must be at least 10 characters long</p>
    </div>
  );
}

function TextareaPage8() {
  return (
    <div className="h-[118px] relative shrink-0 w-[448px]" data-name="TextareaPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <PrimitiveLabel11 />
        <Textarea13 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function ComponentShowcase11() {
  return (
    <div className="bg-[rgba(244,244,245,0.2)] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[833px]" data-name="ComponentShowcase">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <TextareaPage8 />
      </div>
    </div>
  );
}

function PrimitiveDiv9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[212px] items-start left-[25px] top-[95px] w-[833px]" data-name="Primitive.div">
      <TabList8 />
      <ComponentShowcase11 />
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-white h-[332px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader10 />
      <PrimitiveDiv9 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[3258px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
    </div>
  );
}

function ComponentShowcase() {
  return (
    <div className="h-[5054px] relative shrink-0 w-[883px]" data-name="ComponentShowcase">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container />
        <PrimitiveDiv />
        <Card />
        <Card1 />
        <Card2 />
        <Container36 />
      </div>
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

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[378.25px] top-0 w-[126.5px]" data-name="Capa">
      <Icon1 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[296.08px] top-[40px] w-[290.828px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-[145.5px] not-italic text-[#52525b] text-[14px] text-center top-px tracking-[0.35px]">Built with React, Tailwind CSS, and shadcn/ui</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">240+ Components</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">WCAG 2.1 AA</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[3.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">·</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">Atomic Design</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-[291.05px] top-[76px] w-[300.891px]" data-name="Container">
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <Capa />
      <Paragraph6 />
      <Container47 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[125px] relative shrink-0 w-[883px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[33px] relative size-full">
        <Container46 />
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[947px]" data-name="AppContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[32px] pt-[24px] relative size-full">
        <ComponentShowcase />
        <Footer />
      </div>
    </div>
  );
}

function SidebarInset() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[5315px] items-start left-[256px] pt-[64px] top-0 w-[947px]" data-name="SidebarInset">
      <AppContent />
    </div>
  );
}

function SidebarProvider() {
  return (
    <div className="absolute h-[5315px] left-0 top-0 w-[1203px]" data-name="SidebarProvider">
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

function Icon2() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Capa1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[8px] top-[8px] w-[168.656px]" data-name="Capa">
      <Icon2 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[239px]" data-name="Container">
      <Capa1 />
    </div>
  );
}

function Icon3() {
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
      <Icon3 />
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
        <p className="font-['Satoshi:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(28,45,58,0.4)] tracking-[0.35px]">Buscar componente...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(229,229,229,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon4() {
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

function Container50() {
  return (
    <div className="absolute h-[38px] left-[8px] top-[96px] w-[223px]" data-name="Container">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function SidebarNew() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container49 />
        <SidebarMenu />
        <Container50 />
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
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">DSM Progress</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10704)" id="Icon">
          <path d={svgPaths.p2e8d9000} id="Vector" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #00C951)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10704">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SidebarNew2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">DSM Dashboard</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#22c55e] h-[16px] relative rounded-[8px] shrink-0 w-[41.391px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">100%</p>
      </div>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon5 />
      <SidebarNew2 />
      <Badge1 />
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone1 />
    </div>
  );
}

function SidebarMenu1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem1 />
      </div>
    </div>
  );
}

function SidebarGroup() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80px] items-start left-0 pl-[8px] py-[8px] top-0 w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel />
      <SidebarMenu1 />
    </div>
  );
}

function SidebarGroupLabel1() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Components</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9.33333 2.73334L8 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.4 5.33334L1.46667 4.80001" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 8L2.73333 9.33333" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.8 1.46667L5.33333 3.40001" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b7ee680} id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Actions</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon6 />
      <SidebarNew3 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function SidebarNew4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.813px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Button</p>
      </div>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew4 />
    </div>
  );
}

function SidebarMenuSubItem() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[2px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone2 />
    </div>
  );
}

function SidebarNew5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.359px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Toggle</p>
      </div>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew5 />
    </div>
  );
}

function SidebarMenuSubItem1() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[34px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone3 />
    </div>
  );
}

function SidebarNew6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.094px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Toggle Group</p>
      </div>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew6 />
    </div>
  );
}

function SidebarMenuSubItem2() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[66px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone4 />
    </div>
  );
}

function SidebarMenuSub() {
  return (
    <div className="absolute border-[#e5e5e5] border-l border-solid h-[96px] left-[15px] top-[32px] w-[211px]" data-name="SidebarMenuSub">
      <SidebarMenuSubItem />
      <SidebarMenuSubItem1 />
      <SidebarMenuSubItem2 />
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="absolute h-[128px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton />
      <SidebarMenuSub />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26ef3000} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8H8.00667" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 8H11.34" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 8H4.67333" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Forms</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon8 />
      <SidebarNew7 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function SidebarNew8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.984px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Input</p>
      </div>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew8 />
    </div>
  );
}

function SidebarMenuSubItem3() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[2px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone5 />
    </div>
  );
}

function SidebarNew9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.656px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Input File</p>
      </div>
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew9 />
    </div>
  );
}

function SidebarMenuSubItem4() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[34px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone6 />
    </div>
  );
}

function SidebarNew10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.656px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Textarea</p>
      </div>
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew10 />
    </div>
  );
}

function SidebarMenuSubItem5() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[66px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone7 />
    </div>
  );
}

function SidebarNew11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[124.469px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Textarea Autoresize</p>
      </div>
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew11 />
    </div>
  );
}

function SidebarMenuSubItem6() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[98px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone8 />
    </div>
  );
}

function SidebarNew12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[39.297px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Select</p>
      </div>
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew12 />
    </div>
  );
}

function SidebarMenuSubItem7() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[130px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone9 />
    </div>
  );
}

function SidebarNew13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.484px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Checkbox</p>
      </div>
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew13 />
    </div>
  );
}

function SidebarMenuSubItem8() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[162px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone10 />
    </div>
  );
}

function SidebarNew14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.594px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Radio Group</p>
      </div>
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew14 />
    </div>
  );
}

function SidebarMenuSubItem9() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[194px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone11 />
    </div>
  );
}

function SidebarNew15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.609px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Switch</p>
      </div>
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew15 />
    </div>
  );
}

function SidebarMenuSubItem10() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[226px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone12 />
    </div>
  );
}

function SidebarNew16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.438px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Slider</p>
      </div>
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew16 />
    </div>
  );
}

function SidebarMenuSubItem11() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[258px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone13 />
    </div>
  );
}

function SidebarNew17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.828px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Calendar</p>
      </div>
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew17 />
    </div>
  );
}

function SidebarMenuSubItem12() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[290px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone14 />
    </div>
  );
}

function SidebarNew18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.891px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Date Picker</p>
      </div>
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew18 />
    </div>
  );
}

function SidebarMenuSubItem13() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[322px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone15 />
    </div>
  );
}

function SidebarNew19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.281px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Date Range Picker</p>
      </div>
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew19 />
    </div>
  );
}

function SidebarMenuSubItem14() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[354px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone16 />
    </div>
  );
}

function SidebarNew20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.141px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Combobox</p>
      </div>
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew20 />
    </div>
  );
}

function SidebarMenuSubItem15() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[386px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone17 />
    </div>
  );
}

function SidebarNew21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.984px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Multi Select</p>
      </div>
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew21 />
    </div>
  );
}

function SidebarMenuSubItem16() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[418px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone18 />
    </div>
  );
}

function SidebarNew22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.047px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Form</p>
      </div>
    </div>
  );
}

function SlotClone19() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew22 />
    </div>
  );
}

function SidebarMenuSubItem17() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[450px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone19 />
    </div>
  );
}

function SidebarNew23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.797px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Input OTP</p>
      </div>
    </div>
  );
}

function SlotClone20() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew23 />
    </div>
  );
}

function SidebarMenuSubItem18() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[482px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone20 />
    </div>
  );
}

function SidebarNew24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34.828px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Label</p>
      </div>
    </div>
  );
}

function SlotClone21() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center left-[-1px] overflow-clip pl-[8px] rounded-[8px] top-0 w-[190px]" data-name="SlotClone">
      <SidebarNew24 />
    </div>
  );
}

function SidebarMenuSubItem19() {
  return (
    <div className="absolute h-[28px] left-[10px] top-[514px] w-[190px]" data-name="SidebarMenuSubItem">
      <SlotClone21 />
    </div>
  );
}

function SidebarMenuSub1() {
  return (
    <div className="absolute border-[#e5e5e5] border-l border-solid h-[544px] left-[15px] top-[32px] w-[211px]" data-name="SidebarMenuSub">
      <SidebarMenuSubItem3 />
      <SidebarMenuSubItem4 />
      <SidebarMenuSubItem5 />
      <SidebarMenuSubItem6 />
      <SidebarMenuSubItem7 />
      <SidebarMenuSubItem8 />
      <SidebarMenuSubItem9 />
      <SidebarMenuSubItem10 />
      <SidebarMenuSubItem11 />
      <SidebarMenuSubItem12 />
      <SidebarMenuSubItem13 />
      <SidebarMenuSubItem14 />
      <SidebarMenuSubItem15 />
      <SidebarMenuSubItem16 />
      <SidebarMenuSubItem17 />
      <SidebarMenuSubItem18 />
      <SidebarMenuSubItem19 />
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="absolute h-[576px] left-0 top-[132px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton1 />
      <SidebarMenuSub1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10681)" id="Icon">
          <path d={svgPaths.p2b003800} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10681">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SidebarNew25() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Navigation</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon10 />
      <SidebarNew25 />
      <Icon11 />
    </div>
  );
}

function SidebarMenuItem4() {
  return (
    <div className="absolute h-[32px] left-0 top-[712px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6H14" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 10H14" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 2V14" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 2V14" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew26() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Data Display</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon12 />
      <SidebarNew26 />
      <Icon13 />
    </div>
  );
}

function SidebarMenuItem5() {
  return (
    <div className="absolute h-[32px] left-0 top-[748px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton3 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p405f80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew27() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Feedback</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon14 />
      <SidebarNew27 />
      <Icon15 />
    </div>
  );
}

function SidebarMenuItem6() {
  return (
    <div className="absolute h-[32px] left-0 top-[784px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton4 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew28() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Layout</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon16 />
      <SidebarNew28 />
      <Icon17 />
    </div>
  );
}

function SidebarMenuItem7() {
  return (
    <div className="absolute h-[32px] left-0 top-[820px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton5 />
    </div>
  );
}

function Icon18() {
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

function SidebarNew29() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Patterns</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon18 />
      <SidebarNew29 />
      <Icon19 />
    </div>
  );
}

function SidebarMenuItem8() {
  return (
    <div className="absolute h-[32px] left-0 top-[856px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton6 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c647980} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13d22180} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew30() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Modules</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon20 />
      <SidebarNew30 />
      <Icon21 />
    </div>
  );
}

function SidebarMenuItem9() {
  return (
    <div className="absolute h-[32px] left-0 top-[892px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton7 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10719)" id="Icon">
          <path d={svgPaths.p1f703e00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10719">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SidebarNew31() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Advanced</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon22 />
      <SidebarNew31 />
      <Icon23 />
    </div>
  );
}

function SidebarMenuItem10() {
  return (
    <div className="absolute h-[32px] left-0 top-[928px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton8 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew32() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Business Components</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuButton9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SidebarMenuButton">
      <Icon24 />
      <SidebarNew32 />
      <Icon25 />
    </div>
  );
}

function SidebarMenuItem11() {
  return (
    <div className="absolute h-[32px] left-0 top-[964px] w-[239px]" data-name="SidebarMenuItem">
      <SidebarMenuButton9 />
    </div>
  );
}

function SidebarMenu2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem2 />
        <SidebarMenuItem3 />
        <SidebarMenuItem4 />
        <SidebarMenuItem5 />
        <SidebarMenuItem6 />
        <SidebarMenuItem7 />
        <SidebarMenuItem8 />
        <SidebarMenuItem9 />
        <SidebarMenuItem10 />
        <SidebarMenuItem11 />
      </div>
    </div>
  );
}

function SidebarGroup1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1044px] items-start left-0 pl-[8px] py-[8px] top-[88px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel1 />
      <SidebarMenu2 />
    </div>
  );
}

function SidebarGroupLabel2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Recursos</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3ce69d80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.13333 3.53337L6.2 6.13337" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2abc2097} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p187029a0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Animations</p>
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

function SidebarNew33() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Text12 />
        <Badge2 />
      </div>
    </div>
  );
}

function SlotClone22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon26 />
      <SidebarNew33 />
    </div>
  );
}

function SidebarMenuItem12() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone22 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12ab1a00} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2daff3c0} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Animation System</p>
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

function SidebarNew34() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Text13 />
        <Badge3 />
      </div>
    </div>
  );
}

function SlotClone23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon27 />
      <SidebarNew34 />
    </div>
  );
}

function SidebarMenuItem13() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone23 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p237eb400} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Icon Gallery</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#00c951] h-[16px] relative rounded-[8px] shrink-0 w-[36.766px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit] size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px]">NEW</p>
      </div>
    </div>
  );
}

function SidebarNew35() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Text14 />
        <Badge4 />
      </div>
    </div>
  );
}

function SlotClone24() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon28 />
      <SidebarNew35 />
    </div>
  );
}

function SidebarMenuItem14() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone24 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b8cc300} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Help System</p>
      </div>
    </div>
  );
}

function SidebarNew36() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text15 />
      </div>
    </div>
  );
}

function SlotClone25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon29 />
      <SidebarNew36 />
    </div>
  );
}

function SidebarMenuItem15() {
  return (
    <div className="absolute h-[32px] left-0 top-[108px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone25 />
    </div>
  );
}

function SidebarMenu3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem12 />
        <SidebarMenuItem13 />
        <SidebarMenuItem14 />
        <SidebarMenuItem15 />
      </div>
    </div>
  );
}

function SidebarGroup2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[188px] items-start left-0 pl-[8px] py-[8px] top-[1140px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel2 />
      <SidebarMenu3 />
    </div>
  );
}

function SidebarGroupLabel3() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Design System</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10710)" id="Icon">
          <path d="M9.748 11.9313L2.628 9.98934" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p396e1f00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pad21f80} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10710">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Brand Layout</p>
      </div>
    </div>
  );
}

function SidebarNew37() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text16 />
      </div>
    </div>
  );
}

function SlotClone26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon30 />
      <SidebarNew37 />
    </div>
  );
}

function SidebarMenuItem16() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone26 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10671)" id="Icon">
          <path d={svgPaths.p3685cc80} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13a75f00} fill="var(--fill-0, #1C2D3A)" id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3359640} fill="var(--fill-0, #1C2D3A)" id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e291080} fill="var(--fill-0, #1C2D3A)" id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2041a800} fill="var(--fill-0, #1C2D3A)" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10671">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Theme Customizer</p>
      </div>
    </div>
  );
}

function SidebarNew38() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text17 />
      </div>
    </div>
  );
}

function SlotClone27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon31 />
      <SidebarNew38 />
    </div>
  );
}

function SidebarMenuItem17() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone27 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V14" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8297180} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35b1d480} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c1acec0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 14H11.3333" id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Elevation Styles</p>
      </div>
    </div>
  );
}

function SidebarNew39() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Text18 />
      </div>
    </div>
  );
}

function SlotClone28() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip px-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon32 />
      <SidebarNew39 />
    </div>
  );
}

function SidebarMenuItem18() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone28 />
    </div>
  );
}

function SidebarMenu4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem16 />
        <SidebarMenuItem17 />
        <SidebarMenuItem18 />
      </div>
    </div>
  );
}

function SidebarGroup3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[152px] items-start left-0 pl-[8px] py-[8px] top-[1336px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel3 />
      <SidebarMenu4 />
    </div>
  );
}

function SidebarGroupLabel4() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[239px]" data-name="SidebarGroupLabel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
        <p className="font-['Satoshi:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">Verificación</p>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10644)" id="Icon">
          <path d={svgPaths.p3e520100} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10644">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SidebarNew40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[121.703px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Official Verification</p>
      </div>
    </div>
  );
}

function SlotClone29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon33 />
      <SidebarNew40 />
    </div>
  );
}

function SidebarMenuItem19() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone29 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2608e480} id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37796bbe} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1309acc0} id="Vector_3" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p9cdbbc0} id="Vector_4" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d80} id="Vector_5" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.453px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">WCAG Accessibility</p>
      </div>
    </div>
  );
}

function SlotClone30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon34 />
      <SidebarNew41 />
    </div>
  );
}

function SidebarMenuItem20() {
  return (
    <div className="absolute h-[32px] left-0 top-[36px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone30 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #1C2D3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SidebarNew42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.094px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Changelog</p>
      </div>
    </div>
  );
}

function SlotClone31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon35 />
      <SidebarNew42 />
    </div>
  );
}

function SidebarMenuItem21() {
  return (
    <div className="absolute h-[32px] left-0 top-[72px] w-[239px]" data-name="SidebarMenuItem">
      <SlotClone31 />
    </div>
  );
}

function SidebarMenu5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="SidebarMenu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarMenuItem19 />
        <SidebarMenuItem20 />
        <SidebarMenuItem21 />
      </div>
    </div>
  );
}

function SidebarGroup4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[152px] items-start left-0 pl-[8px] py-[8px] top-[1496px] w-[255px]" data-name="SidebarGroup">
      <SidebarGroupLabel4 />
      <SidebarMenu5 />
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[255px]" data-name="SidebarContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <SidebarGroup />
        <SidebarGroup1 />
        <SidebarGroup2 />
        <SidebarGroup3 />
        <SidebarGroup4 />
      </div>
    </div>
  );
}

function Container52() {
  return <div className="bg-[#00c951] opacity-98 rounded-[33554400px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text19() {
  return (
    <div className="h-[16px] relative shrink-0 w-[96.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(28,45,58,0.9)] tracking-[0.3px]">95 Componentes</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Text19 />
    </div>
  );
}

function SidebarNew43() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.1)] content-stretch flex flex-col h-[48px] items-start left-[16px] pt-[16px] px-[16px] rounded-[10px] top-[16px] w-[223px]" data-name="SidebarNew">
      <Container51 />
    </div>
  );
}

function Icon36() {
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

function SidebarNew44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[111.156px]" data-name="SidebarNew">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Satoshi:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1c2d3a] text-[14px] top-px tracking-[0.35px]">Colapsar Sidebar</p>
      </div>
    </div>
  );
}

function SlotClone32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-0 overflow-clip pl-[8px] rounded-[8px] top-0 w-[239px]" data-name="SlotClone">
      <Icon36 />
      <SidebarNew44 />
    </div>
  );
}

function SidebarMenuItem22() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[239px]" data-name="SidebarMenuItem">
      <SlotClone32 />
    </div>
  );
}

function SidebarMenu6() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[80px] w-[239px]" data-name="SidebarMenu">
      <SidebarMenuItem22 />
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="h-[120px] relative shrink-0 w-[255px]" data-name="SidebarFooter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SidebarNew43 />
        <SidebarMenu6 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[903px] items-start left-0 top-0 w-[255px]" data-name="Container">
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter />
    </div>
  );
}

function SidebarRail() {
  return <div className="absolute h-[903px] left-[247px] top-0 w-[16px]" data-name="SidebarRail" />;
}

function Sidebar1() {
  return (
    <div className="absolute border-[#e5e5e5] border-r border-solid h-[903px] left-0 top-0 w-[256px]" data-name="Sidebar">
      <Container48 />
      <SidebarRail />
    </div>
  );
}

function Icon37() {
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

function Button3() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function PrimitiveDiv10() {
  return <div className="bg-[#e4e4e7] h-0 shrink-0 w-px" data-name="Primitive.div" />;
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1c2d3a] text-[16px] top-px tracking-[0.4px]">Design System Manager</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Satoshi:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#52525b] text-[12px] tracking-[0.3px]">shadcn/ui · Satoshi · WCAG AA · 240+ Components</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[40px] relative shrink-0 w-[289.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[-4px] relative size-full">
        <Button3 />
        <PrimitiveDiv10 />
        <Container54 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1221_10621)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p275ad4c0} id="Vector_2" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #52525B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1221_10621">
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

function SlotClone33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.906px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon38 />
        <HelpCenter />
      </div>
    </div>
  );
}

function Icon39() {
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

function Icon40() {
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

function Button4() {
  return (
    <div className="bg-[rgba(0,201,81,0.1)] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00c951] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center p-px relative size-full">
        <Icon39 />
        <AppContent2 />
        <Icon40 />
      </div>
    </div>
  );
}

function Icon41() {
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

function Button5() {
  return (
    <div className="bg-white relative rounded-[33554400px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[36px] relative shrink-0 w-[299.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <SlotClone33 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function AppContent1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[276.734px] h-[64px] items-center left-[256px] pb-px px-[16px] top-0 w-[947px]" data-name="AppContent">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Container56 />
    </div>
  );
}

export default function CFinanciaDsmV() {
  return (
    <div className="bg-white relative size-full" data-name="C-Financia DSM v1.2">
      <SidebarProvider />
      <Sidebar1 />
      <AppContent1 />
    </div>
  );
}