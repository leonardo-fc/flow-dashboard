declare module "@storybook/addon-svelte-csf" {
  import type { SvelteComponent, ComponentProps } from "svelte";
  import type {
    Addon_BaseAnnotations as BaseAnnotations,
    StoryAnnotations,
  } from "@storybook/types";
  import type { SvelteRenderer } from "@storybook/svelte";

  type DecoratorReturnType =
    | void
    | SvelteComponent
    | {
        Component: any;
        props?: any;
      };

  type StoryProps<T extends SvelteComponent> = StoryAnnotations<
    SvelteRenderer<T>,
    ComponentProps<T>
  > & {
    /**
     * Id of the story.
     *
     * Optional, auto-generated from name if not specified.
     */
    id?: string;
    /**
     * Name of the story.
     */
    name: string;
    /**
     * Id of the template used by this story.
     *
     * Optional. Used if the story has no body.
     * If not specified, use the 'default' template.
     */
    template?: string;
    /**
     * Specify which sources should be shown.
     *
     * By default, sources for an args story are auto-generated.
     * If source is true, then the source of the story will be used instead.
     * If source is a string, it replaces the source of the story.
     */
    source?: boolean | string;
  };

  interface TemplateProps<T extends SvelteComponent>
    extends BaseAnnotations<ComponentProps<T>, DecoratorReturnType> {
    /**
     * Id of the template.
     *
     * Optional. Use 'default' if not specified.
     */
    id?: string;
  }

  interface Slots<T extends SvelteComponent> {
    default: {
      args: ComponentProps<T>;
      context: StoryContext;
      [key: string]: any;
    };
  }

  /**
   * Story.
   */
  export class Story<T extends SvelteComponent> extends SvelteComponent<
    StoryProps<T>,
    any,
    Slots<T>
  > {}
  /**
   * Template.
   *
   * Allow to reuse definition between stories.
   */
  export class Template<T extends SvelteComponent> extends SvelteComponent<
    TemplateProps<T>,
    any,
    Slots<T>
  > {}
}
