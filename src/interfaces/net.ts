import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export type Result<T> = {
    code: number;
    message: string;
    data: T;
};

/**
 * 权限选项
 */
export type Privileges = {
    title: String, 
    icon?: string, 
    key: string, 
    path: string, 
    child: Array<Privileges>
}

export interface IRequest {
    // 定义请求方法
    request(config: AxiosRequestConfig): Promise<AxiosResponse>;

    get<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Result<T>>;

    post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<Result<T>>;

    put<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<Result<T>>;

    delete<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<Result<T>>;
}