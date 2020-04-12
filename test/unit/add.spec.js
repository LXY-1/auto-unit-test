/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-04-11 11:35:30
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 16:37:09
 */
// 导入我们测试模块源码内部定义的函数
const expect = require('chai').expect;
import {  add, minus } from "../../src/libs/add.js";


describe('add unti test', function () {
    it('加法运算测试', () => {
        // 使用chai断言来判断add计算结果（作为输入）是否可以得到我们预期的结果（输出）
        let result = add(2,3);
        expect(result).to.equal(5);
    })  
    it('减法运算测试', () => {
        let result = minus(5,10);
        expect(result).to.equal(-5);
    })
})