export interface Pagination<T> {
    next: string;
    previous: string;
    results: Array<T>;
};