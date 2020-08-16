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
