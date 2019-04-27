import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import {
    api_getMenuList
} from '../../../api/api';

const menuListForm = (ary: any[]) => {
    for(let i = 0; i < ary.length; i++) {
        if (ary[i]['path']) {
            ary[i]['path'] = ary[i]['path'].replace('/index.html', '').replace('views/platform', '/home')
        } else if(ary[i]['children'] && ary[i]['children'].length > 0) {
            menuListForm(ary[i]['children'])
        }
    }
    return ary
}
const routeMapForm = (ary: any[]): any => {
    let nameMap:object = {}
    for(let i = 0; i < ary.length; i++) {
        if(ary[i]['children'] && ary[i]['children'].length > 0) {
            for (let p = 0; p < ary[i]['children'].length; p++) {
                nameMap[ary[i]['children'][p]['path']] = ary[i]['children'][p]['name']
            }
        }
    }
    return nameMap
  }


export const ac_setMenuList = (value:any[]) => ({
    type: actionTypes.HOME_MENU_LIST,
    value: fromJS(value)
});
export const ac_setBreadCrumb = (value:object) => ({
    type: actionTypes.BREACRUM_NAME_MAP,
    value: fromJS(value)
})
export const ac_getMenuList = () => {
    return (dispatch:any) => {
        api_getMenuList().then((res:any):void => {
            console.log(res, '获取菜单列表');
            if (res.data.code === '200') {
                dispatch(ac_setMenuList(menuListForm(res.data.data)));
                dispatch(ac_setBreadCrumb(routeMapForm(res.data.data)))
            }
        });

    }
};
 