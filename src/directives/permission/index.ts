/*
 * @Description: 权限指令
 * @Author: ZY
 * @Date: 2020-12-28 10:39:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-04 14:56:59
 */
import { useStore } from '@/store'
import { Directive } from 'vue'

export const permission: Directive = {
  mounted(el, binding) {
    // const { value } = binding
    // const roles = useStore().state.user.roles
    // if (value && value instanceof Array && value.length > 0) {
    //   const permissionRoles = value
    //   const hasPermission = roles.some((role: any) => {
    //     return permissionRoles.includes(role)
    //   })
    //   if (!hasPermission) {
    //     el.style.display = 'none'
    //   }
    // } else {
    //   throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    // }
  }
}
