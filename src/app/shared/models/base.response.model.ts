export interface RateLimit {
    limit?: number;
    remaining?: number;
    reset?: number;
}

export interface MetaResponse {
    success: boolean;
    code: number;
    message: string;

    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
    rateLimit?: RateLimit;
}

export interface BaseResponse {
    _meta: MetaResponse;
    result: object | [];
}
