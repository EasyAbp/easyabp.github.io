(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{702:function(e,a,t){"use strict";t.r(a);var n=t(73),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"filemanagement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filemanagement"}},[e._v("#")]),e._v(" FileManagement")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FFileManagement%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.FileManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.FileManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.FileManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.FileManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.github.com/EasyAbp/FileManagement",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/FileManagement?style=social",alt:"GitHub stars"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("An abp application module that allows users to upload and manage their own files based on the ABP BLOB storing.")]),e._v(" "),a("h2",{attrs:{id:"online-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),a("p",[e._v("We have launched an online demo for this module: "),a("a",{attrs:{href:"https://file.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://file.samples.easyabp.io"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install the following NuGet packages. ("),a("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("ul",[a("li",[e._v("EasyAbp.FileManagement.Application")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.Application.Contracts")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.Domain")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.Domain.Shared")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.EntityFrameworkCore")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.HttpApi")]),e._v(" "),a("li",[e._v("EasyAbp.FileManagement.HttpApi.Client")]),e._v(" "),a("li",[e._v("(Optional) EasyAbp.FileManagement.MongoDB")]),e._v(" "),a("li",[e._v("(Optional) EasyAbp.FileManagement.Web")])])]),e._v(" "),a("li",[a("p",[e._v("Add "),a("code",[e._v("DependsOn(typeof(FileManagementXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),a("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Add "),a("code",[e._v("builder.ConfigureFileManagement();")]),e._v(" to the "),a("code",[e._v("OnModelCreating()")]),e._v(" method in "),a("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Add EF Core migrations and update your database. See: "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),a("li",[a("p",[e._v("Configure a BLOB container. (see "),a("a",{attrs:{href:"https://github.com/EasyAbp/FileManagement/blob/master/host/EasyAbp.FileManagement.Web.Unified/FileManagementWebUnifiedModule.cs#L121-L132",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Blob-Storing",target:"_blank",rel:"noopener noreferrer"}},[e._v("doc"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Configure a file container. (see "),a("a",{attrs:{href:"https://github.com/EasyAbp/FileManagement/blob/master/host/EasyAbp.FileManagement.Web.Unified/FileManagementWebUnifiedModule.cs#L134-L158",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Create a custom "),a("strong",[e._v("FileOperationAuthorizationHandler")]),e._v(". (see "),a("a",{attrs:{href:"https://github.com/EasyAbp/FileManagement/blob/master/host/EasyAbp.FileManagement.Web.Unified/CommonContainerFileOperationAuthorizationHandler.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample"),a("OutboundLink")],1),e._v(")")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/modules/FileManagement/images/Files.png",alt:"Files"}}),e._v(" "),a("img",{attrs:{src:"/modules/FileManagement/images/Upload.png",alt:"Upload"}})]),e._v(" "),a("h2",{attrs:{id:"road-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[e._v("#")]),e._v(" Road map")]),e._v(" "),a("ul",[a("li",[e._v("[x] Multi container.")]),e._v(" "),a("li",[e._v("[x] Multi file upload.")]),e._v(" "),a("li",[e._v("[x] Upload constraints.")]),e._v(" "),a("li",[e._v("[x] User-space isolation.")]),e._v(" "),a("li",[e._v("[x] Reuse existing BLOB resources.")]),e._v(" "),a("li",[e._v("[x] Directory occupancy statistics.")]),e._v(" "),a("li",[e._v("[x] Auto deleting unused BLOB resources.")]),e._v(" "),a("li",[e._v("[x] Auto rename files with duplicate names.")]),e._v(" "),a("li",[e._v("[ ] Container space quota control.")]),e._v(" "),a("li",[e._v("[ ] Customized upload way.")]),e._v(" "),a("li",[e._v("[ ] Complex file search.")]),e._v(" "),a("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);