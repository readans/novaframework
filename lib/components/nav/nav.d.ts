export interface Nav {
    appName: string;
    userName: string;
    date: string;
    items: Item[];
    onLogout: Function;
}
export interface Item {
    text: string;
    icon: string;
    url?: any;
    collapsed?: boolean;
    options?: Option[];
}
export interface Option {
    text: string;
    icon?: string;
    url: string;
    onAction: Function;
}
