import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalFlowWizard } from './ApprovalFlowWizard';

const meta: Meta<typeof ApprovalFlowWizard> = {
  title: 'Patterns/ApprovalFlowWizard',
  component: ApprovalFlowWizard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Full 5-step approval flow wizard for factoring operations: 1) Invoice Selection, 2) Cupo Validation, 3) Calculation & Terms, 4) Review, 5) Submission. Integrates CupoValidator and FactoringCalculator.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalFlowWizard>;

export const Default: Story = {
  render: () => <ApprovalFlowWizard />,
};
