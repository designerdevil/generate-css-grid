const util = {
	generateMarkup: (config = {}) => {
		const isFluid = config['grid-isfluid']
		const colCount = parseInt(config['col-count'] || 12);
		const containerName = config['container-name']
		const colNamePrefix = config['col-name']
		const rowName = config['row-name']
	
		const breakpointConfig = JSON.parse(config.breakpoint || [])
		const breakpointArray = breakpointConfig.sort(
		  (a, b) => parseInt(a.order) - parseInt(b.order)
		)
		const classNames = breakpointArray.map(item => item.class)
		let markup = `<!DOCTYPE html><html>
		<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="style.css?q=${Math.random()}">
		<style>
			body {margin: 0; padding: 0}
			.myContainer { position: relative; }
			.myrow { margin: 20px 0; }
			.myrow > div {background: #5f7eb0; border: 1px solid #ccc; }
			.myrow > div::before { content:''; height: 30px; display: inline-block; }
			.myrow:nth-child(even) > div {background: #367d7d;}
			.myrow:first-child { position: absolute; height: calc(100%); opacity: 0.1; z-index: -1;}
			.myrow:first-child > div { background: rgb(0, 0, 0); }
		</style>
		</head>
		<body>
		<div class="myContainer">
		<div class="${rowName}">`;
		for (let count = colCount; count > 0; count--) {
			const class1 = breakpointArray.reduce((a, c) => {a += `${colNamePrefix}${c.class}1 `; return a;}, '')
			markup += `<div class="${class1}"></div>
			`
		}
		markup += '</div>'
		for (let count = colCount, index=0; count > 0; count--, index++) {
			if(index == 0) {
				markup += `<div class="${rowName}">
					<div class="${colNamePrefix}${breakpointArray[0].class}${colCount}"></div>
				</div>`
			} else {
				const class1 = breakpointArray.reduce((a, c) => {a += `${colNamePrefix}${c.class}${count} `; return a;}, '');
				const class2 = breakpointArray.reduce((a, c) => {a += `${colNamePrefix}${c.class}${index} `; return a;}, '');
				markup += `<div class="${rowName}">
					<div class="${class1}"></div>
					<div class="${class2}"></div>
				</div>`
			}
		}
		markup += '</div></body></html>';
		return markup
	},
  	generateStyle: (config = {}) => {
		const isFluid = config['grid-isfluid']
		const colCount = parseInt(config['col-count'] || 12);
		const containerName = config['container-name']
		const colNamePrefix = config['col-name']
		const rowName = config['row-name']

		const breakpointConfig = JSON.parse(config.breakpoint || [])
		const breakpointArray = breakpointConfig.sort(
			(a, b) => parseInt(a.order) - parseInt(b.order)
		)

		let cssRules = ''
		breakpointArray.forEach((item, index) => {
			const itemColClass = item.class;
			const breakpoint = item.breakpoint;
			const fixedWidthCss = (isFluid === "false") ? 'max-width:'+item.minWidth : '';
			
			if(!index) {
				cssRules += `
				.${rowName} { display: grid; width: 100%; gap: ${item.gutter}px; grid-template-columns: repeat(${colCount}, 1fr); }
				.${containerName} { width: 100%; margin: 0 auto; ${fixedWidthCss}px; }
				`
				for (let count = colCount; count > 0; count--) {
					cssRules += `.${colNamePrefix}${itemColClass}${count} { grid-column: span ${count} }
					`
				}
			} else {
				cssRules += `
				@media only screen and (min-width: ${breakpoint}px) {
				.${rowName} { display: grid; width: 100%; gap: ${item.gutter}px; grid-template-columns: repeat(${colCount}, 1fr); }
				.${containerName} { width: 100%; margin: 0 auto; ${fixedWidthCss}px; }
				`
				for (let count = colCount; count > 0; count--) {
					cssRules += `.${colNamePrefix}${itemColClass}${count} { grid-column: span ${count} }
					`
				}
				cssRules += `}
				`
			}
		})
		return cssRules
	}
}

module.exports = util
