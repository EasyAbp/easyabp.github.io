(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{840:function(e,a,t){"use strict";t.r(a);var r=t(116),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"wechatmanagement-miniprograms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechatmanagement-miniprograms"}},[e._v("#")]),e._v(" WeChatManagement.MiniPrograms")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FWeChatManagement%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.WeChatManagement.MiniPrograms.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.WeChatManagement.MiniPrograms.Domain.Shared.svg?style=flat-square",alt:"小程序模块"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.WeChatManagement.MiniPrograms.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.WeChatManagement.MiniPrograms.Domain.Shared.svg?style=flat-square",alt:"下载量"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.github.com/EasyAbp/WeChatManagement",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/WeChatManagement?style=social",alt:"GitHub stars"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Abp 小程序管理模块，提供小程序登录、用户个人信息记录、小程序微信服务器等功能，自动适应微信开放平台规则，与微信第三方平台模块轻松衔接。")]),e._v(" "),t("h2",{attrs:{id:"online-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),t("p",[e._v("We have launched an online demo for this module: "),t("a",{attrs:{href:"https://wechat.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wechat.samples.easyabp.io"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install the following NuGet packages. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.Application")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.Application.Contracts")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.Domain")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.Domain.Shared")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.EntityFrameworkCore")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.HttpApi")]),e._v(" "),t("li",[e._v("EasyAbp.WeChatManagement.MiniPrograms.HttpApi.Client")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.WeChatManagement.MiniPrograms.MongoDB")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.WeChatManagement.MiniPrograms.Web")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.Abp.WeChat.Common.SharedCache.StackExchangeRedis ("),t("strong",[e._v("重要！如果开发/沙盒/线上均使用了相同的微信AppId，请安装此模块，使用中立缓存共享 AccessToken: https://github.com/EasyAbp/WeChatManagement/issues/15#issuecomment-769718739")]),e._v(")")])])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("DependsOn(typeof(WeChatManagementMiniProgramsXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("builder.ConfigureWeChatManagementMiniPrograms();")]),e._v(" to the "),t("code",[e._v("OnModelCreating()")]),e._v(" method in "),t("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add EF Core migrations and update your database. See: "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("在 Web / HttpApi.Host 启动项目的 appsettings.json 的 AuthServer 中增加 "),t("code",[e._v("ClientId")]),e._v(" 和 "),t("code",[e._v("ClientSecret")]),e._v(" 配置（可使用文件中 IdentityServer 中的配置）。")])]),e._v(" "),t("li",[t("p",[e._v("在 IdentityServerClientGrantTypes 表中给上一步使用的 Client 增加一条 "),t("code",[e._v("WeChatMiniProgram_credentials")]),e._v(" 的 GrantType.")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"小程序登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序登录"}},[e._v("#")]),e._v(" 小程序登录")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("使用 "),t("code",[e._v("/api/wechat-management/mini-programs/login/login")]),e._v(" (POST) 接口进行微信登录，留意 "),t("a",{attrs:{href:"https://github.com/EasyAbp/WeChatManagement/blob/master/modules/MiniPrograms/src/EasyAbp.WeChatManagement.MiniPrograms.Application.Contracts/EasyAbp/WeChatManagement/MiniPrograms/Login/Dtos/LoginInput.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoginInput"),t("OutboundLink")],1),e._v(" 的注释说明。")])]),e._v(" "),t("li",[t("p",[e._v("使用 "),t("code",[e._v("/api/wechat-management/mini-programs/login/refresh")]),e._v(" (POST) 接口对 AccessToken 续期。")])]),e._v(" "),t("li",[t("p",[e._v("在有需要时，使用 "),t("code",[e._v("/api/wechat-management/mini-programs/user-info")]),e._v(" (PUT) 接口对存储的微信用户信息进行更新。(见 https://github.com/EasyAbp/WeChatManagement/issues/20)")])])]),e._v(" "),t("h3",{attrs:{id:"小程序授权-razor-页面登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序授权-razor-页面登录"}},[e._v("#")]),e._v(" 小程序授权 Razor 页面登录")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("配置用于微信登录的小程序的 Name，默认为"),t("code",[e._v("Default")]),e._v("，参考"),t("a",{attrs:{href:"https://github.com/EasyAbp/WeChatManagement/blob/master/modules/MiniPrograms/src/EasyAbp.WeChatManagement.MiniPrograms.Domain/EasyAbp/WeChatManagement/MiniPrograms/Settings/MiniProgramsSettings.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("本模块设置"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("重写登录页，在页面中插入 "),t("a",{attrs:{href:"https://github.com/EasyAbp/WeChatManagement/blob/master/modules/MiniPrograms/src/EasyAbp.WeChatManagement.MiniPrograms.Web/Pages/WeChatManagement/MiniPrograms/Components/WeChatMiniProgramPcLoginWidget/WeChatMiniProgramPcLoginWidgetViewComponent.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("WeChatMiniProgramPcLoginWidget"),t("OutboundLink")],1),e._v("，重写方法参考 "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/How-To/Customize-Login-Page-MVC",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1),e._v(" 和 "),t("a",{attrs:{href:"https://github.com/EasyAbp/WeChatManagement/blob/master/samples/WeChatManagementSample/aspnet-core/src/WeChatManagementSample.Web/Pages/Account",target:"_blank",rel:"noopener noreferrer"}},[e._v("本模块示例"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("微信扫码后（默认配置下，会打开小程序首页），确保小程序本身已完成用户登录，小程序需要将扫码获得的 "),t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.getUnlimited.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scene"),t("OutboundLink")],1),e._v(" 作为 token 参数传入 "),t("code",[e._v("/api/wechat-management/mini-programs/login/authorize-pc")]),e._v(" 接口。")])]),e._v(" "),t("li",[t("p",[e._v("完成上一步后，Razor 登录页将自动完成登录并跳转。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/docs/MiniPrograms/images/MiniProgram.png",alt:"MiniProgram"}}),e._v(" "),t("img",{attrs:{src:"/docs/MiniPrograms/images/MiniProgramUser.png",alt:"MiniProgramUser"}}),e._v(" "),t("img",{attrs:{src:"/docs/MiniPrograms/images/UserInfo.png",alt:"UserInfo"}}),e._v(" "),t("img",{attrs:{src:"/docs/MiniPrograms/images/PcLogin.png",alt:"PcLogin"}})]),e._v(" "),t("h2",{attrs:{id:"roadmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),t("ul",[t("li",[e._v("[ ] 微信服务器")]),e._v(" "),t("li",[e._v("[ ] 旧账号关联微信登录")]),e._v(" "),t("li",[e._v("[x] 微信授权 Razor 页面登录")]),e._v(" "),t("li",[e._v("[ ] 对接第三方平台模块")]),e._v(" "),t("li",[e._v("[ ] 单元测试")])])])}),[],!1,null,null,null);a.default=n.exports}}]);