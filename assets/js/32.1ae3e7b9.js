(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{674:function(t,a,s){"use strict";s.r(a);var n=s(73),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"abp-entityui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abp-entityui"}},[t._v("#")]),t._v(" Abp.EntityUi")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FAbp.EntityUi%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.EntityUi.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.Abp.EntityUi.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.EntityUi.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.Abp.EntityUi.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.github.com/EasyAbp/Abp.EntityUi",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/Abp.EntityUi?style=social",alt:"GitHub stars"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("An abp module that dynamically generates management UI for entities in runtime.")]),t._v(" "),a("h2",{attrs:{id:"online-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[t._v("#")]),t._v(" Online Demo")]),t._v(" "),a("p",[t._v("We have launched an online demo for this module: "),a("a",{attrs:{href:"https://entityui.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://entityui.samples.easyabp.io"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Follow "),a("a",{attrs:{href:"https://github.com/EasyAbp/Abp.DynamicMenu#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("the document"),a("OutboundLink")],1),t._v(" to install the dependent Abp.DynamicMenu module.")])]),t._v(" "),a("li",[a("p",[t._v("Install the following NuGet packages. ("),a("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("ul",[a("li",[t._v("EasyAbp.Abp.EntityUi.Application")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.Application.Contracts")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.Domain")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.Domain.Shared")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.EntityFrameworkCore")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.HttpApi")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.HttpApi.Client")]),t._v(" "),a("li",[t._v("EasyAbp.Abp.EntityUi.Web")])])]),t._v(" "),a("li",[a("p",[t._v("Add "),a("code",[t._v("DependsOn(typeof(AbpEntityUiXxxModule))")]),t._v(" attribute to configure the module dependencies. ("),a("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("Add "),a("code",[t._v("builder.ConfigureAbpEntityUi();")]),t._v(" to the "),a("code",[t._v("OnModelCreating()")]),t._v(" method in "),a("strong",[t._v("MyProjectMigrationsDbContext.cs")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Add EF Core migrations and update your database. See: "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP document"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Configure for the modules (or an app itself) you want to use EntityUi.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyProjectDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpEntityUiOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyProject"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("AbpEntityUiModuleOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("MyProjectDomainModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Run the DbMigrator project, the EntityUi "),a("a",{attrs:{href:"https://github.com/EasyAbp/Abp.EntityUi/blob/main/src/EasyAbp.Abp.EntityUi.Domain/EasyAbp/Abp/EntityUi/Data/AbpEntityUiDataSeedContributor.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("seed contributor"),a("OutboundLink")],1),t._v(" will discovery the entities and seed the metadata.")])]),t._v(" "),a("li",[a("p",[t._v('Run the app and log in as the admin user, you can see the "Entity UI" menu item, try to open it and change some entity configuration.')]),t._v(" "),a("p",[a("img",{attrs:{src:"/modules/Abp.EntityUi/images/EntityList.png",alt:"EntityList"}})])]),t._v(" "),a("li",[a("p",[t._v("Use the management pages for the entities you just configured:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/modules/Abp.EntityUi/images/BookList.png",alt:"BookList"}}),t._v(" "),a("img",{attrs:{src:"/modules/Abp.EntityUi/images/EditBook.png",alt:"EditBook"}})])])]),t._v(" "),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),a("h3",{attrs:{id:"how-to-package-the-entityui-configurations-for-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-package-the-entityui-configurations-for-a-module"}},[t._v("#")]),t._v(" How to package the EntityUi configurations for a module")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Export the configurations with the http API: "),a("code",[t._v("/api/abp/entity-ui/integration/module/{moduleName}")]),t._v(" (GET).")])]),t._v(" "),a("li",[a("p",[t._v("Create a JSON file like "),a("code",[t._v("EntityUiSeed.json")]),t._v(" in your module project to save the exported data (see the "),a("a",{attrs:{href:"https://github.com/EasyAbp/Abp.EntityUi/blob/main/src/EasyAbp.Abp.EntityUi.Domain/EasyAbp/Abp/EntityUi/EntityUiSeed.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1),t._v(") and set it as an EmbeddedResource.")])]),t._v(" "),a("li",[a("p",[t._v("Configure the EntityUi to use it:")])])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyProjectDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpEntityUiOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyProject"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("AbpEntityUiModuleOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("MyProjectDomainModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/EntityUiSeed.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpVirtualFileSystemOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FileSets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddEmbedded")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyProjectDomainModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"entity-ui-for-dynamic-entities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-ui-for-dynamic-entities"}},[t._v("#")]),t._v(" Entity UI for dynamic entities?")]),t._v(" "),a("p",[t._v("See the Entity UI dynamic entity provider "),a("RouterLink",{attrs:{to:"/modules/Abp.EntityUi/dynamic-entity/"}},[t._v("document")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"road-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#road-map"}},[t._v("#")]),t._v(" Road map")]),t._v(" "),a("ul",[a("li",[t._v("[ ] Detail modal.")]),t._v(" "),a("li",[t._v("[x] Support dynamic entities.")]),t._v(" "),a("li",[t._v("[x] Support the MVC template.")]),t._v(" "),a("li",[t._v("[ ] Support the Blazor template.")]),t._v(" "),a("li",[t._v("[ ] Support the Angular template.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);