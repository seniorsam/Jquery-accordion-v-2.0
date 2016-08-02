# Jquery-accordion-v-2.0

## How to use this accordion in your website?

### 1 - Add the following html markup to your page.

      <div class="jqav2-wrapper">
	<div class="jqav2-item">
		<div class="jqav2-panel-link">Panel title</div>
		<div class="jqav2-panel-content">
			Panel content
		</div>			
	</div>		
	<div class="jqav2-item">
		<div class="jqav2-panel-link">Panel title</div>
		<div class="jqav2-panel-content">
			Panel content
		</div>			
	</div>
      </div>

### 2 - Add the style.css file.

### 3 - Add jquery library link.

### 4 - Add app.js file after the jquery script link.

### 5 - Call the init function by adding the following script

<script>
	window.jqav2();
</script>

## How to change the accordion colors to fit your website style?

### You can change the colors of the accordion by passing object which includes your colors in the jqav2() function as follows

<script>
	window.jqav2({
		activeLinkColor:'Put your color here',
		inactiveLinkColor:'Put your color here'
	});
</script>

- activeLinkColor for the color of active link such as the "Blue" panels in the default example.
- inactiveLinkColor for the color of inactive link such as the "Gray" panels.

### also there are more options you can change such as the effect or the effect speed or the trigger event as follows

<script>
	window.jqav2({
		openEffect:'slideDown',
		closeEffect:'slideUp',
		event:'click',
		speed:300
	});
</script>

## Here is a full example of the options used in default version

<script>
	window.jqav2({
		openEffect:'slideDown',
		closeEffect:'slideUp',
		event:'click',
		speed:300,
		activeLinkColor:'#3399FF',
		inactiveLinkColor:'#777777'
	});
</script>

## Thank you
