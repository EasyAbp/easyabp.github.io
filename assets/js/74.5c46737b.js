(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{714:function(e,r,a){"use strict";a.r(r);var s=a(73),t=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sharedresources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sharedresources"}},[e._v("#")]),e._v(" SharedResources")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FSharedResources%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.SharedResources.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.SharedResources.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.SharedResources.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.SharedResources.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://www.github.com/EasyAbp/SharedResources",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/SharedResources?style=social",alt:"GitHub stars"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("An abp application module that allows users to share resources with each other.")]),e._v(" "),r("h2",{attrs:{id:"online-demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),r("p",[e._v("We have launched an online demo for this module: "),r("a",{attrs:{href:"https://sharedres.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://sharedres.samples.easyabp.io"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Install the following NuGet packages. ("),r("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("ul",[r("li",[e._v("EasyAbp.SharedResources.Application")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.Application.Contracts")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.Domain")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.Domain.Shared")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.EntityFrameworkCore")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.HttpApi")]),e._v(" "),r("li",[e._v("EasyAbp.SharedResources.HttpApi.Client")]),e._v(" "),r("li",[e._v("(Optional) EasyAbp.SharedResources.MongoDB")]),e._v(" "),r("li",[e._v("(Optional) EasyAbp.SharedResources.Web")])])]),e._v(" "),r("li",[r("p",[e._v("Add "),r("code",[e._v("DependsOn(typeof(SharedResourcesXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),r("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("li",[r("p",[e._v("Add "),r("code",[e._v("builder.ConfigureSharedResources();")]),e._v(" to the "),r("code",[e._v("OnModelCreating()")]),e._v(" method in "),r("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Add EF Core migrations and update your database. See: "),r("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),r("li",[r("p",[e._v("Create a category.")])]),e._v(" "),r("li",[r("p",[e._v("Create a resource in the category.")])]),e._v(" "),r("li",[r("p",[e._v("Create a resource item in the resource.")])]),e._v(" "),r("li",[r("p",[e._v("Set authorized users of the resource so they can access it.")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/modules/SharedResources/images/Categories.png",alt:"Categories"}}),e._v(" "),r("img",{attrs:{src:"/modules/SharedResources/images/CreateCategory.png",alt:"CreateCategory"}}),e._v(" "),r("img",{attrs:{src:"/modules/SharedResources/images/Resources.png",alt:"Resources"}}),e._v(" "),r("img",{attrs:{src:"/modules/SharedResources/images/CreateResource.png",alt:"CreateResource"}}),e._v(" "),r("img",{attrs:{src:"/modules/SharedResources/images/ResourceItems.png",alt:"ResourceItems"}}),e._v(" "),r("img",{attrs:{src:"/modules/SharedResources/images/CreateResourceItem.png",alt:"CreateResourceItem"}})]),e._v(" "),r("h2",{attrs:{id:"application-scenario"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-scenario"}},[e._v("#")]),e._v(" Application Scenario")]),e._v(" "),r("h3",{attrs:{id:"video-sharing-sites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#video-sharing-sites"}},[e._v("#")]),e._v(" Video Sharing Sites")]),e._v(" "),r("ul",[r("li",[e._v("Enable users to create their own categories and resources.")]),e._v(" "),r("li",[e._v("Enable users to decide who has access to resources.")])]),e._v(" "),r("h3",{attrs:{id:"free-download-sites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#free-download-sites"}},[e._v("#")]),e._v(" Free Download Sites")]),e._v(" "),r("ul",[r("li",[e._v("Add categories with the "),r("code",[e._v("Set as a common category")]),e._v(" configuration.")]),e._v(" "),r("li",[e._v("Add resource items with the "),r("code",[e._v("Public resource item")]),e._v(" configuration.")])]),e._v(" "),r("h3",{attrs:{id:"paid-knowledge-market"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#paid-knowledge-market"}},[e._v("#")]),e._v(" Paid Knowledge Market")]),e._v(" "),r("ul",[r("li",[e._v("Add categories with the "),r("code",[e._v("Set as a common category")]),e._v(" configuration.")]),e._v(" "),r("li",[e._v("Set the free part of resource items to "),r("code",[e._v("Public resource item")]),e._v(".")]),e._v(" "),r("li",[e._v("Use "),r("a",{attrs:{href:"https://github.com/EasyAbp/EShop",target:"_blank",rel:"noopener noreferrer"}},[e._v("EShop"),r("OutboundLink")],1),e._v(" module to sell your courses, when a user buys a course, give him access to related resources.")])]),e._v(" "),r("h2",{attrs:{id:"roadmap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),r("ul",[r("li",[e._v("[ ] Explorer.")]),e._v(" "),r("li",[e._v("[ ] Pages for admin to manage users' categories and resources.")]),e._v(" "),r("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);r.default=t.exports}}]);