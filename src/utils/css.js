function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`
}
const util = {
	generateMarkup: (config = {}) => {
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
			h1 { padding: 30px; }
			.sample-layout div, .sample-layout div::before { background: none !important; }
			.${rowName} { margin: 20px 0; }
			.${rowName} > div {background: ${getRandomColor()}; border: 1px solid #333; }
			.${rowName} > div::before { content:''; height: 30px; display: inline-block; }
			.${rowName}:nth-child(even) > div {background: ${getRandomColor()};}
			.${rowName}:first-child > div { background: ${getRandomColor()}; position:relative; }
			.${rowName}:first-child > div::before {content:''; position: absolute; height: 80vh; opacity: 0.2; z-index: -1; width: 100%; background: #000;}
		</style>
		</head>
		<body>
		<h1>Generated Grid System</h1>
		<hr/>
		<div class="${containerName}">
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
		markup += '</div>';
		markup += `
			&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />&nbsp;<br />
			<h1>Demo : Sample Layout</h1>
			<hr/>
			<div class="container sample-layout">
				<div class="row content">
					<div class="col-sm-3 sidenav">
					<h4>John's Blog</h4>
					<ul class="nav nav-pills nav-stacked">
						<li class="active"><a href="#section1">Home</a></li>
						<li><a href="#section2">Friends</a></li>
						<li><a href="#section3">Family</a></li>
						<li><a href="#section3">Photos</a></li>
					</ul><br>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Search Blog..">
						<span class="input-group-btn">
						<button class="btn btn-default" type="button">
							<span class="glyphicon glyphicon-search"></span>
						</button>
						</span>
					</div>
					</div>

					<div class="col-sm-9">
					<h4><small>RECENT POSTS</small></h4>
					<hr>
					<h2>I Love Food</h2>
					<h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
					<h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
					<p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<br><br>
					
					<h4><small>RECENT POSTS</small></h4>
					<hr>
					<h2>Officially Blogging</h2>
					<h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
					<h5><span class="label label-success">Lorem</span></h5><br>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<hr>

					<h4>Leave a Comment:</h4>
					<form role="form">
						<div class="form-group">
						<textarea class="form-control" rows="3" required></textarea>
						</div>
						<button type="submit" class="btn btn-success">Submit</button>
					</form>
					<br><br>
					
					<p><span class="badge">2</span> Comments:</p><br>
					
					<div class="row">
						<div class="col-sm-2 text-center">
						<img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
						</div>
						<div class="col-sm-10">
						<h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
						<p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<br>
						</div>
						<div class="col-sm-2 text-center">
						<img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
						</div>
						<div class="col-sm-10">
						<h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
						<p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<br>
						<p><span class="badge">1</span> Comment:</p><br>
						<div class="row">
							<div class="col-sm-2 text-center">
							<img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
							</div>
							<div class="col-xs-10">
							<h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
							<p>Me too! WOW!</p>
							<br>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
		`;
		markup += '</body></html>';
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
			const fixedWidthCss = (isFluid === "false") ? `max-width: calc(${item.maxWidth}px + ${item.margin}px + ${item.margin}px)` : '';
			
			if(!index) {
				cssRules += `
				* { box-sizing: border-box;}
				.${rowName} { display: grid; width: 100%; gap: ${item.gutter}px; grid-template-columns: repeat(${colCount}, 1fr); }
				.${containerName} { width: 100%; margin: 0 auto; ${fixedWidthCss}; padding-left: ${item.margin}px  ; padding-right:  ${item.margin}px; }
				`
				for (let count = colCount; count > 0; count--) {
					cssRules += `.${colNamePrefix}${itemColClass}${count} { grid-column: span ${count} }
					`
				}
			} else {
				cssRules += `
				@media only screen and (min-width: ${breakpoint}px) {
				.${rowName} { display: grid; width: 100%; gap: ${item.gutter}px; grid-template-columns: repeat(${colCount}, 1fr); }
				.${containerName} { ${fixedWidthCss};  padding-left: ${item.margin}px  ; padding-right:  ${item.margin}px; }
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
