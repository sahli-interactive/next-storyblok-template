import { SbBlokData, storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc'
import { PageStoryblok } from '../../types/component-types-sb'

export default function Page({ blok }: { blok: PageStoryblok }) {
  return (
    <main className="p-6" {...storyblokEditable(blok as SbBlokData)}>
      {blok.body?.map(nestedBlok => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  )
}
