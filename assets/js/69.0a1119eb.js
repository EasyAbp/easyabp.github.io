(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{709:function(e,t,a){"use strict";a.r(t);var r=a(73),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"paymentservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paymentservice"}},[e._v("#")]),e._v(" PaymentService")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/badge/dynamic/xml?style=flat-square&color=yellow&label=abp&query=%2F%2FProject%2FPropertyGroup%2FAbpVersion&url=https%3A%2F%2Fraw.githubusercontent.com%2FEasyAbp%2FPaymentService%2Fmaster%2FDirectory.Build.props",alt:"ABP version"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.PaymentService.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.PaymentService.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.PaymentService.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://discord.gg/S6QaezrCRq",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://badgen.net/discord/online-members/S6QaezrCRq?label=Discord",alt:"Discord online"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.github.com/EasyAbp/PaymentService",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/PaymentService?style=social",alt:"GitHub stars"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("An abp application module that provides payment service.")]),e._v(" "),t("h2",{attrs:{id:"online-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[e._v("#")]),e._v(" Online Demo")]),e._v(" "),t("p",[e._v("We have launched an online demo for this module: "),t("a",{attrs:{href:"https://pay.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://pay.samples.easyabp.io"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install the following NuGet packages. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("ul",[t("li",[e._v("EasyAbp.PaymentService.Application")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.Application.Contracts")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.Domain")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.Domain.Shared")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.EntityFrameworkCore")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.HttpApi")]),e._v(" "),t("li",[e._v("EasyAbp.PaymentService.HttpApi.Client")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.PaymentService.MongoDB")]),e._v(" "),t("li",[e._v("(Optional) EasyAbp.PaymentService.Web")])])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("DependsOn(typeof(PaymentServiceXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),t("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/docs/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("Add "),t("code",[e._v("builder.ConfigurePaymentService();")]),e._v(" to the "),t("code",[e._v("OnModelCreating()")]),e._v(" method in "),t("strong",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Add EF Core migrations and update your database. See: "),t("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC&DB=EF#add-database-migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Register the Free payment method, it is used to pay when the amount is 0.00:")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generic-method"}},[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("Configure")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("PaymentServiceOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Providers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token generic-method"}},[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("Configure")]),t("span",{pre:!0,attrs:{class:"token generic class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("FreePaymentServiceProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("FreePaymentServiceProvider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PaymentMethod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// options.Providers.Configure<PrepaymentPaymentServiceProvider>(PrepaymentPaymentServiceProvider.PaymentMethod);")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// options.Providers.Configure<WeChatPayPaymentServiceProvider>(WeChatPayPaymentServiceProvider.PaymentMethod);")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Choose the payment service providers you want:")]),e._v(" "),t("ul",[t("li",[e._v("Free")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/modules/PaymentService/Prepayment/"}},[e._v("Prepayment")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/modules/PaymentService/WeChatPay/"}},[e._v("WeChatPay")])],1)])])]),e._v(" "),t("p",[t("img",{attrs:{src:"/modules/PaymentService/images/Payment.png",alt:"Payment"}})]),e._v(" "),t("h2",{attrs:{id:"roadmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),t("ul",[t("li",[e._v("[x] Prepayment.")]),e._v(" "),t("li",[e._v("[x] Support WeChatPay.")]),e._v(" "),t("li",[e._v("[ ] Support Paypal.")]),e._v(" "),t("li",[e._v("[ ] Support Alipay.")]),e._v(" "),t("li",[e._v("[ ] Support Bitcoin payment.")]),e._v(" "),t("li",[e._v("[x] Unit tests.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);