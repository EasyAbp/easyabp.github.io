(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{861:function(a,e,t){"use strict";t.r(e);var n=t(125),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uniappmanagement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniappmanagement"}},[a._v("#")]),a._v(" UniappManagement")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FUniappManagement%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.UniappManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.UniappManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.UniappManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.UniappManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://www.github.com/EasyAbp/UniappManagement",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/UniappManagement?style=social",alt:"GitHub stars"}}),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("实现uni-app的应用版本管理、整包更新、热更新、差量热更新等功能的Abp应用模块")]),a._v(" "),t("h2",{attrs:{id:"online-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[a._v("#")]),a._v(" Online Demo")]),a._v(" "),t("p",[a._v("We have launched an online demo for this module: "),t("a",{attrs:{href:"https://uniapp.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://uniapp.samples.easyabp.io"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Install the following NuGet packages. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[a._v("see how"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("ul",[t("li",[a._v("EasyAbp.UniappManagement.Application")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.Application.Contracts")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.Domain")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.Domain.Shared")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.EntityFrameworkCore")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.HttpApi")]),a._v(" "),t("li",[a._v("EasyAbp.UniappManagement.HttpApi.Client")]),a._v(" "),t("li",[a._v("(Optional) EasyAbp.UniappManagement.MongoDB")]),a._v(" "),t("li",[a._v("(Optional) EasyAbp.UniappManagement.Web")])])]),a._v(" "),t("li",[t("p",[a._v("Add "),t("code",[a._v("DependsOn(typeof(UniappManagementXxxModule))")]),a._v(" attribute to configure the module dependencies. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[a._v("see how"),t("OutboundLink")],1),a._v(")")])]),a._v(" "),t("li",[t("p",[a._v("Add "),t("code",[a._v("builder.ConfigureUniappManagement();")]),a._v(" to the "),t("code",[a._v("OnModelCreating()")]),a._v(" method in "),t("strong",[a._v("MyProjectMigrationsDbContext.cs")]),a._v(".")])]),a._v(" "),t("li",[t("p",[a._v("Add EF Core migrations and update your database. See: "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[a._v("ABP document"),t("OutboundLink")],1),a._v(".")])])]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Add permissions to the roles you want.")])]),a._v(" "),t("li",[t("p",[a._v("Enjoy this wonderful module.")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"/modules/UniappManagement/images/NewApp.png",alt:"Notifications"}}),a._v(" "),t("img",{attrs:{src:"/modules/UniappManagement/images/AppList.png",alt:"AppList"}}),a._v(" "),t("img",{attrs:{src:"/modules/UniappManagement/images/NewVersion.png",alt:"NewVersion"}}),a._v(" "),t("img",{attrs:{src:"/modules/UniappManagement/images/VersionList.png",alt:"VersionList"}}),a._v(" "),t("img",{attrs:{src:"/modules/UniappManagement/images/WebApis.png",alt:"WebApis"}})]),a._v(" "),t("h2",{attrs:{id:"roadmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[a._v("#")]),a._v(" Roadmap")]),a._v(" "),t("ul",[t("li",[a._v("[ ] Add cache.")]),a._v(" "),t("li",[a._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);