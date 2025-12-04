import type { Preview } from '@storybook/react-vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Layout from "../src/shared/components/Layout"
import type { StoryFn, StoryContext } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    (Story: StoryFn, context: StoryContext) => (
      <Layout>
        {Story(context.args, context)}
      </Layout>
    )
  ]
};

export default preview;