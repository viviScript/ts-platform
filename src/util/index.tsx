
interface SessionFace {
    key: string,
    value?: any
}

export const setSession = ({key, value}:SessionFace):void => {
    sessionStorage.setItem(key, value);
};
export const getSession = ({key}:SessionFace):any => {
    return sessionStorage.getItem(key);
};

export const removeSession = ({key}: SessionFace):void => {
    sessionStorage.removeItem(key);
};
