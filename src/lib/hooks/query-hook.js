import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
    const loc = useLocation();
    const queryParams = useMemo(()=>getQueryParams(loc),[loc]);

    return queryParams;
}

/**
 * this function receives location object and parse query params
 * @param {object} loc 
 * @returns {object}
 */
 export const getQueryParams = (loc) =>{
    const query = loc.search?.split('?');
    const params = query[query.length-1]?.split('&').reduce((acc,cur)=>{
        const param = cur.split('=');
        const key = param[0];
        const value = decodeURIComponent(param[1]) ?? "";
        acc[key] = value;
        return acc
    },{});

    return params;
}