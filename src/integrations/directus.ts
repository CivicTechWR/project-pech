'use server';

import {
    createDirectus,
    staticToken,
    rest
} from '@directus/sdk';


export const directus = createDirectus(process.env.DIRECTUS_URL)
    .with(rest())
    .with(staticToken(process.env.DIRECTUS_TOKEN));


