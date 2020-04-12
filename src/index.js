/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-04-11 00:52:32
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 00:53:49
 */
const name = ([...args]) => {
     return Array.prototype.slice(args,1)    
}
name(1,2,3,4)
