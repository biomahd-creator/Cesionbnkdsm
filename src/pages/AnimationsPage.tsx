import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MousePointer, 
  Zap, 
  Heart, 
  Star, 
  Check, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  TrendingUp, 
  Code
} from "lucide-react";
import { useState } from "react";
import { AnimationSystemContent } from "./AnimationSystemPage";

/**
 * AnimationsPage
 * 
 * Página de showcase consolidada de animaciones:
 * - Playground: demos interactivos de motion/react
 * - System Architecture: componentes, hooks, skeletons y CSS utilities del sistema
 * 
 * @component
 */
export function AnimationsPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<"playground" | "system">("playground");

  return (
    <div className="space-y-8 w-full pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="mb-0">Animations & Microinteractions</h1>
          <Badge variant="outline" className="gap-1">
            <Zap className="h-3 w-3" />
            motion/react
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Colección completa de animaciones: playground interactivo y sistema de arquitectura global.
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="flex gap-2 border-b pb-4">
        <Button
          variant={mode === "playground" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("playground")}
          className="gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Playground
        </Button>
        <Button
          variant={mode === "system" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("system")}
          className="gap-2"
        >
          <Code className="h-4 w-4" />
          System Architecture
        </Button>
      </div>

      {mode === "system" ? (
        <AnimationSystemContent />
      ) : (
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-lg">
          <TabsTrigger value="basic">Basic Animations</TabsTrigger>
          <TabsTrigger value="interactions">Microinteractions</TabsTrigger>
          <TabsTrigger value="page">Page Transitions</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* BASIC ANIMATIONS */}
        <TabsContent value="basic" className="space-y-6">
          {/* Fade In */}
          <Card>
            <CardHeader>
              <CardTitle>Fade In</CardTitle>
              <CardDescription>Entrada suave con opacidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 bg-primary/10 border-primary/20">
                    <p className="text-sm font-medium">Fade In</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="p-6 bg-chart-2/10 border-chart-2/20">
                    <p className="text-sm font-medium">Delayed</p>
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Slide In */}
          <Card>
            <CardHeader>
              <CardTitle>Slide In</CardTitle>
              <CardDescription>Entrada desde diferentes direcciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-4 text-center bg-muted">
                    <ArrowRight className="h-5 w-5 mx-auto mb-2 rotate-180" />
                    <p className="text-xs font-medium">From Left</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-4 text-center bg-muted">
                    <ArrowRight className="h-5 w-5 mx-auto mb-2" />
                    <p className="text-xs font-medium">From Right</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-4 text-center bg-muted">
                    <ArrowRight className="h-5 w-5 mx-auto mb-2 -rotate-90" />
                    <p className="text-xs font-medium">From Top</p>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-4 text-center bg-muted">
                    <ArrowRight className="h-5 w-5 mx-auto mb-2 rotate-90" />
                    <p className="text-xs font-medium">From Bottom</p>
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Scale */}
          <Card>
            <CardHeader>
              <CardTitle>Scale</CardTitle>
              <CardDescription>Zoom in/out animations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 flex-wrap">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 bg-chart-3/10 border-chart-3/20">
                    <Star className="h-8 w-8 text-chart-3" />
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 bg-chart-4/10 border-chart-4/20">
                    <Sparkles className="h-8 w-8 text-chart-4" />
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Rotate */}
          <Card>
            <CardHeader>
              <CardTitle>Rotate</CardTitle>
              <CardDescription>Rotación con animación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <Card className="p-6 bg-primary/10 border-primary/20">
                    <Loader2 className="h-8 w-8 text-primary" />
                  </Card>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Card className="p-6 bg-chart-2/10 border-chart-2/20">
                    <Loader2 className="h-8 w-8 text-chart-2" />
                  </Card>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* MICROINTERACTIONS */}
        <TabsContent value="interactions" className="space-y-6">
          {/* Like Button */}
          <Card>
            <CardHeader>
              <CardTitle>Like Button</CardTitle>
              <CardDescription>Animación al hacer clic con estado</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.button
                className="relative p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
              >
                <motion.div
                  animate={isLiked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart 
                    className={`h-8 w-8 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
                  />
                </motion.div>
              </motion.button>
            </CardContent>
          </Card>

          {/* Checkbox Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Animated Checkbox</CardTitle>
              <CardDescription>Checkmark con animación</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.button
                className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                onClick={() => setIsChecked(!isChecked)}
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  isChecked ? 'bg-primary border-primary' : 'border-muted-foreground'
                }`}>
                  <AnimatePresence mode="wait">
                    {isChecked && (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="text-sm font-medium">
                  {isChecked ? 'Completado' : 'Pendiente'}
                </span>
              </motion.button>
            </CardContent>
          </Card>

          {/* Counter with Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Animated Counter</CardTitle>
              <CardDescription>Número con animación al incrementar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Button onClick={() => setCount(count + 1)}>
                  Incrementar
                </Button>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={count}
                    initial={{ scale: 1.5, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.5, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold text-primary min-w-[3rem] text-center"
                  >
                    {count}
                  </motion.div>
                </AnimatePresence>
                <Button variant="outline" onClick={() => setCount(0)}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Hover Effects */}
          <Card>
            <CardHeader>
              <CardTitle>Hover Effects</CardTitle>
              <CardDescription>Efectos al pasar el mouse</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer"
                >
                  <p className="text-sm font-medium text-center">Scale</p>
                </motion.div>

                <motion.div
                  whileHover={{ rotate: 5 }}
                  whileTap={{ rotate: -5 }}
                  className="p-6 rounded-lg bg-chart-2/10 border border-chart-2/20 cursor-pointer"
                >
                  <p className="text-sm font-medium text-center">Rotate</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 0 }}
                  className="p-6 rounded-lg bg-chart-3/10 border border-chart-3/20 cursor-pointer"
                >
                  <p className="text-sm font-medium text-center">Lift</p>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    boxShadow: "0 10px 30px rgba(132, 204, 22, 0.3)"
                  }}
                  className="p-6 rounded-lg bg-chart-4/10 border border-chart-4/20 cursor-pointer"
                >
                  <p className="text-sm font-medium text-center">Shadow</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Loading States */}
          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
              <CardDescription>Diferentes tipos de loaders animados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-wrap items-center">
                {/* Spinner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="h-8 w-8 text-primary" />
                </motion.div>

                {/* Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-8 h-8 rounded-full bg-chart-2"
                />

                {/* Dots */}
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="w-3 h-3 rounded-full bg-chart-3"
                    />
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PAGE TRANSITIONS */}
        <TabsContent value="page" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Transition Variants</CardTitle>
              <CardDescription>Ejemplos de transiciones para páginas completas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Fade */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Fade Transition</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-chart-2/10 border"
                >
                  <p className="text-sm">Contenido de página con fade in/out</p>
                </motion.div>
              </div>

              {/* Slide */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Slide Transition</h3>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-lg bg-gradient-to-r from-chart-3/10 to-chart-4/10 border"
                >
                  <p className="text-sm">Contenido de página con slide left/right</p>
                </motion.div>
              </div>

              {/* Scale */}
              <div>
                <h3 className="text-sm font-semibold mb-3">Scale Transition</h3>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-chart-3/10 border"
                >
                  <p className="text-sm">Contenido de página con zoom in/out</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Stagger Children */}
          <Card>
            <CardHeader>
              <CardTitle>Stagger Children</CardTitle>
              <CardDescription>Animación secuencial de elementos hijos</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <motion.div
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="p-4 rounded-lg bg-muted text-center"
                  >
                    <span className="font-semibold">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ADVANCED */}
        <TabsContent value="advanced" className="space-y-6">
          {/* Gesture Drag */}
          <Card>
            <CardHeader>
              <CardTitle>Draggable Elements</CardTitle>
              <CardDescription>Elementos que se pueden arrastrar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <motion.div
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  className="p-6 rounded-lg bg-primary/10 border-primary/20 cursor-grab active:cursor-grabbing text-center"
                >
                  <MousePointer className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Drag me!</p>
                </motion.div>

                <motion.div
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  className="p-6 rounded-lg bg-chart-2/10 border-chart-2/20 cursor-grab active:cursor-grabbing text-center"
                >
                  <p className="text-xs font-medium">Drag X</p>
                </motion.div>

                <motion.div
                  drag="y"
                  dragConstraints={{ top: -100, bottom: 100 }}
                  className="p-6 rounded-lg bg-chart-3/10 border-chart-3/20 cursor-grab active:cursor-grabbing text-center"
                >
                  <p className="text-xs font-medium">Drag Y</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Path Animation */}
          <Card>
            <CardHeader>
              <CardTitle>SVG Path Animation</CardTitle>
              <CardDescription>Animación de trazado SVG</CardDescription>
            </CardHeader>
            <CardContent>
              <svg width="100%" height="100" viewBox="0 0 400 100" className="overflow-visible">
                <motion.path
                  d="M 0 50 Q 100 0, 200 50 T 400 50"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </CardContent>
          </Card>

          {/* Scroll Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Scroll-triggered Animation</CardTitle>
              <CardDescription>Elementos que animan al hacer scroll (simulación)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-chart-2/10 border flex items-center gap-3"
                >
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium">Item {item} - Appears on scroll</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      )}
    </div>
  );
}