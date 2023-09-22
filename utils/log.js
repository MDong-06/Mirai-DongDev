const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#FFFF00").bold('[ ! ] Lỗi ') + data);
			break;
		case "error":
console.log(chalk.bold.hex("#FFFF00").bold('[ ! ] Lỗi') + data);
			break;
		default:
				console.log(chalk.bold.hex("#FFFF00").bold(`${option} 💀Nguyên💀 `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#33FFFF").bold('🎃Nguyên🎃') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#FF3333").bold('🎀Nguyên🎀') + data);
			break;
		default:
	console.log(chalk.bold.hex("#33FF66").bold(`🌸Nguyên🌸`) + data);
			break;
	}
}