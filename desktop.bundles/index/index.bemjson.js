module.exports = {
    block : 'page',
    title : 'Шаблон трехколоночной страницы',
	head: [
        { elem : 'meta', attrs : { name : 'title', 		 content : 'Шаблон трехколоночной страницы' } },
		{ elem : 'meta', attrs : { name : 'keywords', 	 content : 'Ключевые слова' } },
		{ elem : 'meta', attrs : { name : 'description', content : 'Типовой трехколоночный шаблон' } },
		{ elem: 'css', url: 'index.min.css' },

		{ elem : 'js', url : 'jquery-min.js' },
		{ elem : 'js', url : 'путь_к_скрипту.js' },
		{ elem : 'js', url : 'путь_к_скрипту.js' },
		{ elem : 'js', 
		 attrs : { type : 'text/javascript' },
		url : '/desktop.blocks/header/header.ex_script.js' }


 		
    ],
	favicon : '/favicon.ico',
	scripts: [{ elem: 'js', url: 'index.min.js' }],
    content : [
		{	block : 'maincontainer',	
			content : [
					{block : 'topsection',		content : { tag:	'h1', content:  'CSS Liquid Layout #3.3- (Fluid-Fluid-Fluid)'}	},
					{block : 'contentwrapper',	
							content : [
									{block : 'contentcolumn',		content : {block : 'innertube',		
																							content : [
																											{ tag:	'b', content: [ 'Content Column: ', {tag: 'em',content: 'Fluid'}]},
																											{ tag:	'script', content:  'filltext(42)'}
																										]	
																				}	
																				
									}

							]	
					},
					{block : 'leftcolumn',		content : {block : 'innertube',		
																	content: [
																				{ tag:	'b', content:  ['Left Column: ',{tag: 'em',content: '20%'}]},
																				{ tag:	'script', content:  'filltext(20)'}
																			]					
															}	
					},
					{block : 'rightcolumn',		content : {block : 'innertube',		
																	content : [
																				{ tag:	'b', content:  ['Right Column: ',{tag: 'em',content: '15%'}]},
																				{ tag:	'script', content:  'filltext(15)'}
																			]
															}	
																	
					},
					{block : 'footer',		content :  'footer'	}
			]	
		}
		
		
		
		
		
	
	]
}