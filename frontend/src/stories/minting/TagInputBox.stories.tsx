import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TagInputBox } from "./TagInputBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Minting/TagInputBox",
  component: TagInputBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TagInputBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TagInputBox> = (args) => (
  <TagInputBox
    onDeleteTag={() => console.log()}
    handleTagChanged={() => console.log}
  />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
