import {NextApiRequest, NextApiResponse} from "next"
import StoryblokClient from 'storyblok-js-client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== process.env.SECRET) {
        return res.status(401).json({message: 'Invalid token'})
    }
    // The Storyblok-hook is a post request and contains a story_id in the body
    if (req.method !== 'POST' || !req.body?.story_id) {
        return res.status(401).json({message: 'Invalid request'})
    }
    const storyblok = new StoryblokClient({accessToken: process.env.STORYBLOK_TOKEN})

    // initial get requests that is used to retrieve the total amount of pages
    storyblok.get(`cdn/stories/${req.body.story_id}`, {version: 'published'}).then(async sbResult => {
        let story = sbResult.data.story;
        if (story.slug !== 'global')
            await res.revalidate(`/${story.full_slug}`)
    }).catch(e => {
        console.log(e)
    })
    return res.status(200).json({success: 'true'})
}
