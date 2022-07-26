import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'ovytr94k',
    dataset: 'production',
    apiVersion: '2022-07-13',
    useCdn: 'true',
    token: process.env.NEXT_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);