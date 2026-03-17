import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Heart, Star, Check, Loader2, ArrowRight, TrendingUp, MousePointer, Sparkles } from "lucide-react";
import { AnimationSystemContent } from "./AnimationSystemPage";
import { Button } from "../components/ui/button";
import { ComponentShowcase } from "../components/ui/component-showcase";

function AnimationPlayground() {
  const [isLiked, setIsLiked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-6">
      {/* Basic Animations */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Basic Animations (CSS)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="animate-in slide-in-from-left duration-500">
            <Card className="p-4 text-center bg-muted"><ArrowRight className="h-5 w-5 mx-auto mb-2 rotate-180" /><p className="text-xs font-medium">Slide Left</p></Card>
          </div>
          <div className="animate-in slide-in-from-right duration-500">
            <Card className="p-4 text-center bg-muted"><ArrowRight className="h-5 w-5 mx-auto mb-2" /><p className="text-xs font-medium">Slide Right</p></Card>
          </div>
          <div className="animate-in zoom-in duration-500">
            <Card className="p-6 bg-chart-3/10 border-chart-3/20 flex items-center justify-center"><Star className="h-8 w-8 text-chart-3" /></Card>
          </div>
          <div className="animate-in spin-in duration-700">
            <Card className="p-6 bg-muted border-primary flex items-center justify-center"><Loader2 className="h-8 w-8 text-primary" /></Card>
          </div>
        </div>
      </div>

      {/* Microinteractions */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Microinteractions</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <button
            className="relative p-4 rounded-lg bg-muted hover:bg-muted transition-all active:scale-90"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-8 w-8 transition-all duration-300 ${isLiked ? "fill-red-500 text-red-500 scale-110" : "text-muted-foreground scale-100"}`} />
          </button>

          <button
            className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted transition-colors"
            onClick={() => setIsChecked(!isChecked)}
          >
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${isChecked ? "bg-primary border-primary scale-100" : "border-muted-foreground scale-100"}`}>
              {isChecked && (
                <Check className="h-4 w-4 text-primary-foreground animate-in zoom-in duration-200" />
              )}
            </div>
            <span className="text-sm font-medium">{isChecked ? "Done" : "Pending"}</span>
          </button>

          <div className="flex items-center gap-4">
            <Button onClick={() => setCount(count + 1)} size="sm">+1</Button>
            <div key={count} className="text-3xl font-bold text-primary min-w-[2rem] text-center animate-in fade-in zoom-in-75 duration-300">
              {count}
            </div>
            <Button variant="outline" onClick={() => setCount(0)} size="sm">Reset</Button>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Hover Effects (CSS)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg bg-muted border border-border cursor-pointer text-center transition-transform duration-200 hover:scale-105 active:scale-95"><p className="text-sm font-medium">Scale</p></div>
          <div className="p-6 rounded-lg bg-chart-2/10 border border-chart-2/20 cursor-pointer text-center transition-transform duration-200 hover:rotate-3 active:-rotate-3"><p className="text-sm font-medium">Rotate</p></div>
          <div className="p-6 rounded-lg bg-chart-3/10 border border-chart-3/20 cursor-pointer text-center transition-transform duration-200 hover:-translate-y-1"><p className="text-sm font-medium">Lift</p></div>
          <div className="p-6 rounded-lg bg-chart-4/10 border border-chart-4/20 cursor-pointer text-center transition-shadow duration-200 hover:shadow-lg"><p className="text-sm font-medium">Shadow</p></div>
        </div>
      </div>

      {/* Loaders */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Loading States (CSS)</h3>
        <div className="flex gap-6 flex-wrap items-center">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <div className="w-8 h-8 rounded-full bg-chart-2 animate-pulse" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-chart-3 animate-bounce"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ animation: "loading-slide 1.5s ease-in-out infinite", width: "33%" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}

export function AnimationsPage() {
  return (
    <ComponentShowcase
      title="Animations & Microinteractions"
      description="Animation showcase using pure CSS transitions and Tailwind animate-in utilities. Includes basic animations (fade, slide, scale, rotate), microinteractions (like button, animated checkbox, counter), hover effects, and loading states (spinner, pulse, dots, progress bar). No external animation library required."
      category="Design System"
      preview={<AnimationPlayground />}
      code={`// CSS Animations — no external library needed

// Fade In (Tailwind)
<div className="animate-in fade-in duration-300">
  Content
</div>

// Slide In
<div className="animate-in slide-in-from-left duration-500">
  From Left
</div>

// Zoom In
<div className="animate-in zoom-in duration-500">
  Zoom In
</div>

// Hover + Active
<div className="hover:scale-105 active:scale-95 transition-transform">
  Interactive
</div>

// Loading Spinner
<Loader2 className="animate-spin" />`}
      props={[
        { name: "animate-in", type: "CSS class", description: "Tailwind entry animation base class." },
        { name: "fade-in", type: "CSS class", description: "Fade from transparent to opaque." },
        { name: "slide-in-from-*", type: "CSS class", description: "Slide from left/right/top/bottom." },
        { name: "zoom-in", type: "CSS class", description: "Scale up from smaller size." },
        { name: "duration-*", type: "CSS class", description: "Animation duration (100-1000ms)." },
        { name: "transition-*", type: "CSS class", description: "CSS transition for hover/active states." },
      ]}
      examples={[
        {
          title: "Animation System Architecture",
          description: "Full system: PageTransition, FadeInView, StaggerContainer, InlineSpinner, ButtonLoading, Skeleton variants, Loading hooks, and CSS utilities.",
          preview: <AnimationSystemContent />,
          code: `import { PageTransition, FadeInView, StaggerContainer } from "@/components/ui/page-transition";
import { InlineSpinner, ButtonLoading } from "@/components/ui/loading-overlay";
import { SkeletonTable, SkeletonDashboard } from "@/components/ui/skeleton-variants";
import { useLoadingState, useAsyncOperation } from "@/hooks/useLoadingState";`,
        },
        {
          title: "Scroll-triggered Animation",
          description: "Elements animate on page load with staggered delays.",
          preview: (
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-chart-2/10 border flex items-center gap-3 animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${item * 100}ms`, animationFillMode: "backwards" }}
                >
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium">Item {item} - Staggered entry</span>
                </div>
              ))}
            </div>
          ),
          code: `<div
  className="animate-in fade-in slide-in-from-left duration-500"
  style={{ animationDelay: "100ms", animationFillMode: "backwards" }}
>
  Staggered entry
</div>`,
        },
      ]}
    />
  );
}
