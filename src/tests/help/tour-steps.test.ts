/**
 * tourSteps Data Tests (G14 Batch 7)
 *
 * Tests for tour step data exports — validates structure and content.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import {
  vinculacionTourSteps,
  factoringDashboardTourSteps,
  generalAppTourSteps,
  driverConfig,
  type TourStep,
} from '../../components/help/tourSteps';

function validateSteps(steps: TourStep[]) {
  for (const step of steps) {
    expect(step.element).toBeDefined();
    expect(typeof step.element).toBe('string');
    expect(step.element.startsWith('#')).toBe(true);

    expect(step.popover).toBeDefined();
    expect(step.popover.title).toBeDefined();
    expect(typeof step.popover.title).toBe('string');
    expect(step.popover.description).toBeDefined();
    expect(typeof step.popover.description).toBe('string');
  }
}

describe('vinculacionTourSteps', () => {
  it('is an array with correct length', () => {
    expect(Array.isArray(vinculacionTourSteps)).toBe(true);
    expect(vinculacionTourSteps.length).toBe(7);
  });

  it('has valid step structure', () => {
    validateSteps(vinculacionTourSteps);
  });

  it('starts with welcome step', () => {
    expect(vinculacionTourSteps[0].element).toBe('#tour-step-welcome');
    expect(vinculacionTourSteps[0].popover.title).toContain('Welcome');
  });

  it('includes NIT step', () => {
    const nitStep = vinculacionTourSteps.find(s => s.element === '#tour-step-nit');
    expect(nitStep).toBeDefined();
    expect(nitStep!.popover.title).toContain('NIT');
  });
});

describe('factoringDashboardTourSteps', () => {
  it('is an array with correct length', () => {
    expect(Array.isArray(factoringDashboardTourSteps)).toBe(true);
    expect(factoringDashboardTourSteps.length).toBe(4);
  });

  it('has valid step structure', () => {
    validateSteps(factoringDashboardTourSteps);
  });

  it('starts with dashboard welcome', () => {
    expect(factoringDashboardTourSteps[0].element).toBe('#tour-dashboard-welcome');
    expect(factoringDashboardTourSteps[0].popover.title).toContain('Dashboard');
  });
});

describe('generalAppTourSteps', () => {
  it('is an array with correct length', () => {
    expect(Array.isArray(generalAppTourSteps)).toBe(true);
    expect(generalAppTourSteps.length).toBe(3);
  });

  it('has valid step structure', () => {
    validateSteps(generalAppTourSteps);
  });

  it('includes sidebar navigation step', () => {
    const sidebarStep = generalAppTourSteps.find(s => s.element === '#tour-app-sidebar');
    expect(sidebarStep).toBeDefined();
    expect(sidebarStep!.popover.title).toContain('Navigation');
  });

  it('includes help center step', () => {
    const helpStep = generalAppTourSteps.find(s => s.element === '#tour-app-help');
    expect(helpStep).toBeDefined();
    expect(helpStep!.popover.title).toContain('Help');
  });
});

describe('driverConfig', () => {
  it('has showProgress enabled', () => {
    expect(driverConfig.showProgress).toBe(true);
  });

  it('has Next and Previous button text', () => {
    expect(driverConfig.nextBtnText).toBeDefined();
    expect(driverConfig.prevBtnText).toBeDefined();
    expect(driverConfig.doneBtnText).toBeDefined();
  });

  it('has overlay color', () => {
    expect(driverConfig.overlayColor).toBeDefined();
  });

  it('has allowClose enabled', () => {
    expect(driverConfig.allowClose).toBe(true);
  });
});
