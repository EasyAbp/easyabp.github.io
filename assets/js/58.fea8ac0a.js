(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{697:function(t,s,e){"use strict";e.r(s);var r=e(73),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"eshop-plugins-inventories-dapractors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eshop-plugins-inventories-dapractors"}},[t._v("#")]),t._v(" EShop.Plugins.Inventories.DaprActors")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FEShop%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.EShop.Plugins.Inventories.DaprActors.Abstractions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.EShop.Plugins.Inventories.DaprActors.Abstractions.svg?style=flat-square",alt:"NuGet"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.EShop.Plugins.Inventories.DaprActors.Abstractions",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.EShop.Plugins.Inventories.DaprActors.Abstractions.svg?style=flat-square",alt:"NuGet Download"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.github.com/EasyAbp/EShop",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/EShop?style=social",alt:"GitHub stars"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("EShop product-inventory implementation of "),s("a",{attrs:{href:"https://docs.dapr.io/developing-applications/building-blocks/actors/actors-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dapr Actors"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install the following NuGet packages. ("),s("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("EasyAbp.EShop.Products.DaprActorsInventory.Domain "),s("em",[t._v("(install at EasyAbp.EShop.Products.Domain location)")])]),t._v(" "),s("li",[t._v("EasyAbp.EShop.Plugins.Inventories.DaprActors.AspNetCore "),s("em",[t._v("(install at a host project to run Actors)")])])])]),t._v(" "),s("li",[s("p",[t._v("Add "),s("code",[t._v("DependsOn(typeof(EShopXxxModule))")]),t._v(" attribute to configure the module dependencies. ("),s("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("Configure a state store for the inventory actor. ("),s("a",{attrs:{href:"https://docs.dapr.io/reference/api/state_api/#configuring-state-store-for-actors",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),s("OutboundLink")],1),t._v(")")])])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Configure the DaprActors inventory provider as default.")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("EShopProductsOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure as the default inventory provider")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultInventoryProviderName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DaprActors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure as the default inventory provider for MyProductGroup")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Groups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyProductGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultInventoryProviderName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DaprActors"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Better to use "),s("code",[t._v("DaprActorsProductInventoryProvider.DaprActorsProductInventoryProviderName")]),t._v(" instead of "),s("code",[t._v('"DaprActors"')]),t._v(" as the provider name.")])])]),t._v(" "),s("li",[s("p",[t._v("Create a product and set "),s("code",[t._v("InventoryProviderName")]),t._v(" to "),s("code",[t._v("DaprActors")]),t._v(". Then the product is specified to use the Dapr Actors inventory provider.")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);