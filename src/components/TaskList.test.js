import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories"; //👈  Our stories imported here

/* 
 @storybook/testing-react is a great addon that allows you to reuse your Storybook stories in your unit tests. By reusing your stories in your tests, you have a catalog of component scenarios ready to be tested. Also, all args, decorators, and other information from your story will be composed by this library. As you just saw, all you have to do in your tests is select which story to render.
*/

//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});
