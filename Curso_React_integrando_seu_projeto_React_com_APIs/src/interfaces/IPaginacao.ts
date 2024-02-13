export interface IPaginacao<T> {
    count: number
    next: string
    previous: string
    // T typescript generics, uma interface de outra interface 
    results: T[]
}
