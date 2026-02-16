import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../components/ui/carousel";

describe("Carousel", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders carousel items", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>First Slide</CarouselItem>
          <CarouselItem>Second Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(screen.getByText("First Slide")).toBeInTheDocument();
    expect(screen.getByText("Second Slide")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
    expect(
      screen.getByRole("button", { name: "Previous slide" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Next slide" })
    ).toBeInTheDocument();
  });

  it("renders with vertical orientation", () => {
    const { container } = render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the correct ARIA role", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    const carousel = screen.getByRole("region");
    expect(carousel).toBeInTheDocument();
    expect(carousel.getAttribute("aria-roledescription")).toBe("carousel");
  });
});