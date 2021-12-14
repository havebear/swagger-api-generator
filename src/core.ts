export interface GenerateData {
    data?: { [key: string]: any};
    description?: string;
    templatePath: string;
}

export interface FileGenerateData extends GenerateData {
    targetPath: string;
}

export interface ApiData {
    description?: string;
    method?: 'get' | 'post' | 'delete' | 'put' | 'options' | 'patch' | 'head';
    name?: string;
    path?: string;
    result?: Definition;
    parameters?: ParametersData[];
}
export interface Definition {
    name: string;
    description?: string;
    items?: Definition;
    type?: string;
    ref?: string;
    properties?: Definition[];
}
export interface ParametersData {
    description?: string;
    'in': 'body' | 'query' | 'path' | 'header';
    name?: string;
    required?: boolean;
    type?: Definition;
}

