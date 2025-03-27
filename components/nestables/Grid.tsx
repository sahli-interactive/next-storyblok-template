import { SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'
import { GridStoryblok } from '../../types/component-types-sb'

export default function Grid({ blok }: { blok: GridStoryblok }) {
  return (
    <ul className="flex py-8" {...storyblokEditable(blok as SbBlokData)}>
      {blok.columns?.map(nestedBlok => (
        <li key={nestedBlok._uid} className="flex-auto px-6">
          <StoryblokServerComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  )
}
