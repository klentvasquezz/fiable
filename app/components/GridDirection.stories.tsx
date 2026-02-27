import type { Meta, StoryObj } from "@storybook/react"; 
import GridDirection from "./GridDirection";

const meta: Meta<typeof GridDirection> = { 
    title: "Components/GridDirection", component: GridDirection
};

export default meta; type Story = StoryObj<typeof GridDirection>;

export const Base: Story = { 
    args: { position: "0,0 NORTH", }
};

export const BaseSouth: Story = { 
    args: { position: "0,0 SOUTH", }
};

export const ValidScenario1: Story = { 
    args: { position: "1,4 EAST", }
};

export const ValidScenario2: Story = { 
    args: { position: "4,4 WEST", }
};

export const ValidScenario3: Story = { 
    args: { position: "4,2 NORTH", }
};

export const ValidScenario4: Story = { 
    args: { position: "2,2 SOUTH", }
};

export const IncorrectFormat: Story = { 
    args: { position: "2,2-SOUTH", }
};

export const OutOfRange1: Story = { 
    args: { position: "5,3 WEST", }
};

export const OutOfRange2: Story = { 
    args: { position: "1,7 SOUTH", }
};

export const IncorrectDirection1: Story = { 
    args: { position: "0,0 NORTHS", }
};

export const IncorrectDirection2: Story = { 
    args: { position: "0,0 TEST", }
};

export const EmptyInput: Story = { 
    args: { position: "", }
};