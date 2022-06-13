const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			scss: {
				prependData: `
			@import "@/scss/variables.scss";
			@import "@/scss/mixins.scss";
		  `,
			},
		},
	},
});
