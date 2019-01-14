# 真正的页面

<w-layout menuTitle="李红星" orgPath="https://www.evente.cn" logo="https://2img.evente.cn/04/73/9c/da50756ce5f737490c1beb1cb9.jpg" :menus="menuTestRule" class="demo" logoutAction="https://www.easy-mock.com/mock/5ab386ecca15e11ded65b593/chinese/getLoginOutCallBackUrl" :navs="barTestRule" barName="二级导航" :show="true" headerLink="https://www.evente.cn" headerTarget="_blank">
  <h1>这是真正的标题</h1>
  <p>这是真正内容</p>
</w-layout>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|barName|二级导航标题|String|否|无|
|navs|导航数据。目前 路由跳转只支持 path 方法。|Array|否|[]|
|open|是否全部打开|Boolean|否|false|
|disabled|禁用|Boolean|否|false|
|env|根据环境变化的各项目链接|Object|否|{}|
|collapse|是否折叠按钮|Boolean|否|true|
|active|选中字样，添加模块名一样|String|否|无|
|show|是否展开|Boolean|否|true|
|logoutAction|退出登录的接口地址|String|否|false|
|rule|权限接口请求回来的数据|Object|否|false|
|barActive|二级导航高亮|String|否|无|
|orgPath|主办后台地址|String|否|无|
|orgTarget|主办后台打开方式|String|否|'_self'|
|orgTitle|主办后台名称|String|否|'切换主办版'|
|headerLink|主办后台名称的链接|String|否|'javascript:;'|
|headerTarget|主办后台名称的跳转方式|String|否|'_self'|
|afterOut|退出之后触发|Function|否|() => {}|

### 方法

|事件名|说明|返回值|
|---|------|-----|
|analysised|获取菜单时触发|所有顶级权限|
|afterOut|退出之后触发|无|

<script>
import WLayout from '../emmenudtbtion/core/layout/Layout';
//  权限测试数据
import menuTestRule from './menudata';
//  二级白色导航测试数据
import barTestRule from './barDatas';
//  环境地址配置
import envConf from './env';

export default {
  data() {
    return {
      env: envConf.production,
      barTestRule,
      menuTestRule,
    };
  },
  components: {
    WLayout,
  },
  mounted() {
    this.barTestRule.splice(2, 0, {
        title: '服务订购',
        child: [
          {
            title: '服务订购',
            to: {
              path: '/service',
            },
          }
        ],
      });
      console.log(barTestRule, 'barTestRule');
  },
  methods: {
  },
}
</script>

<style lang="scss">
@import '../emmenudtbtion/assets/css/layout.scss';
@import '../emmenudtbtion/assets/css/menu.scss';
@import '../emmenudtbtion/assets/css/bar.scss';

.demo {
  position: relative;
  height: 657px;
  border: 1px solid #dcdcdc;
  border-left: none;

  & .wd-menu-warp {
    position: absolute;
  }

  & .wd-bar {
    position: relative;
  }

  & .wd-layout-main {
    height: 100%;
  }
}
</style>
