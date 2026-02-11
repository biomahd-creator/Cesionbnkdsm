import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useEffect } from "react";

export function useFactoringTour() {
  const startTour = () => {
    const tourDriver = driver({
      showProgress: true,
      animate: true,
      popoverClass: 'driver-popover-custom',
      doneBtnText: 'Finalizar',
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      steps: [
        { 
          element: '#tour-factoring-module', 
          popover: { 
            title: 'Módulo de Factoring', 
            description: 'Aquí puedes gestionar todas tus operaciones de factoring, validar facturas y solicitar desembolsos.', 
            side: "bottom", 
            align: 'start' 
          } 
        },
        { 
          element: '#tour-radian-module', 
          popover: { 
            title: 'Módulo RADIAN', 
            description: 'Accede al registro oficial de facturas electrónicas como título valor en el sistema RADIAN.', 
            side: "bottom", 
            align: 'start' 
          } 
        },
        { 
            element: '#tour-app-help',
            popover: {
                title: 'Centro de Ayuda',
                description: '¿Tienes dudas? Consulta nuestra documentación y guías en cualquier momento.',
                side: "bottom",
                align: 'end'
            }
        }
      ]
    });

    tourDriver.drive();
  };

  return { startTour };
}
