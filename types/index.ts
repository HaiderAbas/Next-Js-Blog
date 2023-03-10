export interface ICollectionResponces <T>{
        data:T
        meta:IResourceMeta;
}
export interface IResourceMeta{
    pagination:IPagination
}
export interface IPagination{
    page:number,
    pageSize:number,
    pageCount:number,
    total:number
}
export interface ICategory{
    id:number,
    attributes:ICategoryAttribute,
}
export interface ICategoryAttribute{
    Title:string,
    Slug:string
}