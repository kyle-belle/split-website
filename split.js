document.addEventListener('DOMContentLoaded', function(){
	var wrapper = document.getElementById('wrapper');
	var top_layer = wrapper.querySelector('.top');
	var handle = wrapper.querySelector('.handle');
	var skew = 0;
	var delta = 0;

	if (wrapper.className.indexOf('skewed') != -1){
		skew = 1000;
	}

	wrapper.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth/2) * 0.5;

		handle.style.left = e.clientX + delta + 'px';

		top_layer.style.width = e.clientX + skew + delta + 'px';
	})

	 wrapper.onmouseleave = function () { 
	 	handle.style.left = "50%"; 
	 	top_layer.style.width = window.innerWidth / 2 + 1000 + 'px';
	  };
});