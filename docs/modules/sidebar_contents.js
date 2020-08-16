module.exports = [
	{
		title: "Introduction",
		path: "/modules/"
	},
	{
		title: "General",
		children: [
			"Abp.RelatedDtoLoader",
			"Abp.Trees"
		]
	},
	{
		title: "Business",
		children: [
			{
				title: "PaymentService",
				path: "/modules/PaymentService/"
			}
		]
	},
	{
		title: "Message",
		children: [
			{
				title: "PrivateMessaging",
				path: "/modules/PrivateMessaging/"
			}
		]
	},
	{
		title: "Storing",
		children: [
			"Abp.BlobStoring.TencentCloud",
			"FileManagement"
		]
	},
	{
		title: "WeChat",
		children: [
			"Abp.WeChat",
			"WeChatManagement"
		]
	}
];
