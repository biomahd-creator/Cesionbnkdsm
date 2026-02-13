import { ComponentShowcase } from "../components/ui/component-showcase";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { Card, CardContent } from "../components/ui/card";

export function CarouselPage() {
  return (
    <ComponentShowcase
      title="Carousel"
      description="A carousel component for cycling through elements. Usa Carousel como contenedor principal con CarouselContent, CarouselItem, CarouselPrevious y CarouselNext."
      category="Layout"
      
      // Main Preview
      preview={
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
      
      // Main Code
      code={`import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}
      
      // Props Documentation
      props={[
        {
          name: "opts",
          type: "CarouselOptions",
          description: "Options to configure the carousel (align, loop, etc).",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Orientation of the carousel.",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Multiple Items",
          description: "Show multiple items at once using basis classes.",
          preview: (
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ),
          code: `<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
      {/* ... */}
    </CarouselItem>
  </CarouselContent>
</Carousel>`
        }
      ]}
    />
  );
}