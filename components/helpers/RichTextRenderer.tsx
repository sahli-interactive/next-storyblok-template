import { render } from 'storyblok-rich-text-react-renderer-ts'
import { StoryblokServerComponent } from '@storyblok/react/rsc'
import { RichtextStoryblok } from '../../types/component-types-sb'

type RichTextRendererProps = {
  text: RichtextStoryblok
}

export function RichTextRenderer({ text }: RichTextRendererProps) {
  return (
    <>
      {render(text, {
        defaultBlokResolver: (name, props) => (
          <StoryblokServerComponent blok={{ component: name, ...props }} />
        ),
      })}
    </>
  )
}
