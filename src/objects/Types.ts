/* eslint-disable camelcase */
export interface ApiResponse {
    message: any
    success: boolean
}

export interface Coin {
    id: string
    name: string
    symbol: string
}

export interface CoinDetails {
    id: string
    name: string
    symbol: string
    description: Description
    image: Images
    links: Links
    genesis_date: string
    public_interest_score: number
}

export interface TrendingResult {
    item: TrendingResultItem
}

export interface TrendingResultItem {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    score: number
}

export interface Links {
    homepage: string[]
}

export interface Description {
    en: string
}

export interface Images {
    thumb: string
    small: string
    large: string
}
