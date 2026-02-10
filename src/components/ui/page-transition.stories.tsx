import type { Meta, StoryObj } from '@storybook/react';
import { 
  PageTransition, 
  FadeInView, 
  StaggerContainer, 
  StaggerItem 
} from './page-transition';
import { Card } from './card';

const meta: Meta<typeof PageTransition> = {
  title: 'UI/PageTransition',
  component: PageTransition,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageTransition>;

export const DefaultPageTransition: Story = {
  render: () => (
    <div className="h-[400px] bg-muted p-8 rounded relative overflow-hidden">
      <PageTransition>
        <div className="bg-card p-8 rounded shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Page Content</h2>
          <p>This content fades in and slides up when mounted.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            It simulates a smooth page navigation effect.
          </p>
        </div>
      </PageTransition>
    </div>
  ),
};

export const FadeInOnScroll: Story = {
  render: () => (
    <div className="h-[300px] overflow-y-auto border rounded p-4 space-y-32">
      <div className="text-center p-10 bg-muted rounded">Scroll Down 👇</div>
      
      <FadeInView>
        <Card className="p-6 bg-blue-50">
          <h3 className="font-bold">I appear when you scroll to me!</h3>
        </Card>
      </FadeInView>
      
      <FadeInView delay={0.2}>
        <Card className="p-6 bg-green-50">
          <h3 className="font-bold">I appear with a slight delay!</h3>
        </Card>
      </FadeInView>
    </div>
  ),
};

export const StaggeredList: Story = {
  render: () => (
    <StaggerContainer className="grid grid-cols-2 gap-4 max-w-md mx-auto p-4">
      {[1, 2, 3, 4].map((item) => (
        <StaggerItem key={item}>
          <Card className="h-24 flex items-center justify-center bg-indigo-50 hover:bg-indigo-100 transition-colors cursor-pointer">
            <span className="text-xl font-bold text-indigo-600">Item {item}</span>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  ),
};