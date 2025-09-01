import { EmiButton } from "@/components/EmiButton/EmiButton";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/internal/test";

const meta = {
  title: 'Components/EmiButton',
  component: EmiButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    type: { control: 'radio', options: ['outline', 'filled'] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof EmiButton>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Emi Button',
    variant: 'primary',
    type: 'filled',
  },
};

    

