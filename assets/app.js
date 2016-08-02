(function($, window){
	var jqav2 = {

		jqav2Wrapper:
			$('.jqav2-wrapper'),

		jqav2PanelLink:
			$('.jqav2-panel-link'),
			
		jqav2PanelContent:
			$('.jqav2-panel-content'),

		options:{
			openEffect:'slideDown',
			closeEffect:'slideUp',
			event:'click',
			speed:300,
			activeLinkColor:'#3399FF',
			inactiveLinkColor:'#777777',
		},

		init:
			function(options){

				$.extend(jqav2.options, options);
				var jqav2Link = jqav2.jqav2PanelLink,
				    jqav2opt  = jqav2.options;
				// initiate the styles
				jqav2Link.css({"backgroundColor":[jqav2opt.inactiveLinkColor][0]});
				jqav2Link.eq(0).css("backgroundColor",[jqav2opt.activeLinkColor][0]); 
				// start the action
				jqav2Link.on([jqav2opt.event][0], jqav2.show);

			},
 
		show:
			function(){

				var $this   = $(this),
				    jqav2op = jqav2.options;

				jqav2.hideOthers.call( jqav2.jqav2Wrapper ); // hide other panel contents
				jqav2.updateLinksColor.call( jqav2.jqav2Wrapper ); // update other panels links colors to the in active color

				$this.css("backgroundColor",[jqav2op.activeLinkColor][0])
					 .next()[jqav2op.openEffect](jqav2op.speed);

			},

		hideOthers:
			function(){

				var jqav2op = jqav2.options;

				$(this).find(jqav2.jqav2PanelContent).each(function(index, obj){
					$(obj)[jqav2op.closeEffect](jqav2op.speed);
				});

			},

		updateLinksColor:
			function(){

				$(this).find(jqav2.jqav2PanelLink).each(function(index, obj){
					$(obj).css("backgroundColor",[jqav2.options.inactiveLinkColor][0]);
				});	

			}

	}

	// assign the init function to the global environment
	window.jqav2 = jqav2.init;

}(jQuery, window));