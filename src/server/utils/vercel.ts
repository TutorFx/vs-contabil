import type { H3Event } from 'h3';

export const readVercelHeaders = (event: H3Event) => {
    const host = getHeader(event, 'host') ?? ''
    const cityHeader = getHeader(event, 'x-vercel-ip-city') ?? ''
    const city = cityHeader ? decodeURIComponent(cityHeader) : '-'
    const stateHeader = getHeader(event, 'x-vercel-ip-country-region') ?? ''
    const state = stateHeader ? decodeURIComponent(stateHeader) : '-'
    const ipHeader = getHeader(event, 'x-forwarded-for') ?? ''
    const ip = ipHeader ? ipHeader.split(',')[0] : '-'
    
    return {
        host, cityHeader, city, stateHeader, state, ipHeader, ip
    }
}