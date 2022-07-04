$(document).ready(function () {
	InitCircleBar();
});

function InitCircleBar() {
	if ($('.js-circle-bar').length) {
		var els = document.getElementsByClassName('js-circle-bar');

		for (var i = 0; i < els.length; i++) {
			var el = els[i]; // get canvas
			var options = {
				percent: el.getAttribute('data-percent') || 25,
				size: el.getAttribute('data-size') || 220,
				lineWidth: el.getAttribute('data-line') || 15,
				rotate: el.getAttribute('data-rotate') || 0,
				childpercent: el.getAttribute('data-percent-child') || 15
			}
			var canvas = document.createElement('canvas');
			canvas.className = 'circle-bar__circle';
			var span = document.createElement('span');
			span.className = "circle-bar__text";
			span.textContent = options.percent + '%';
			var canvaschild = document.createElement('canvas');
			canvaschild.className = 'circle-bar__circle-child';
			if (typeof (G_vmlCanvasManager) !== 'undefined') {
				G_vmlCanvasManager.initElement(canvas);
			}
			var ctx = canvas.getContext('2d');
			canvas.width = canvas.height = options.size;
			var ctxc = canvaschild.getContext('2d');
			var ctxc_size = options.size - (options.lineWidth * 2);
			canvaschild.width = canvaschild.height = ctxc_size;
			//el.appendChild(span);
			el.appendChild(canvas);
			el.appendChild(canvaschild);
			//parent cirle
			ctx.translate(options.size / 2, options.size / 2); // change center
			ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
			//ctx.scale(1, -1);
			var radius = (options.size - options.lineWidth) / 2;
			var drawCircle = function (color, lineWidth, percent) {
				percent = Math.min(Math.max(0, percent || 1), 1);
				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
				ctx.strokeStyle = color;
				ctx.lineCap = 'square'; // butt, round or square
				ctx.lineWidth = lineWidth;
				ctx.stroke();
			};
			drawCircle('#d4d4d4', options.lineWidth, 100 / 100);
			drawCircle(GetColorNameByClassName("circle-color"), options.lineWidth, options.percent / 100);
			//child circle
			ctxc.translate(ctxc_size / 2, ctxc_size / 2); // change center
			ctxc.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
			//ctxc.scale(1, -1);
			var radius = (ctxc_size - options.lineWidth) / 2;
			var drawCircleChild = function (color, lineWidth, percent) {
				percent = Math.min(Math.max(0, percent || 1), 1);
				ctxc.beginPath();
				ctxc.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
				ctxc.strokeStyle = color;
				ctxc.lineCap = 'square'; // butt, round or square
				ctxc.lineWidth = lineWidth;
				ctxc.stroke();
			};
			drawCircleChild('#fff', options.lineWidth, 100 / 100);
			drawCircleChild(GetColorNameByClassName("circle-child-color"), options.lineWidth, options.childpercent / 100);
		}
	}
}

function GetColorNameByClassName(className) {
    var element = document.createElement("div"), color;
    element.style.cssText = "position:fixed;left:-100px;top:-100px;width:1px;height:1px";
    element.className = className;
    document.getElementById("js-project-item").appendChild(element);
    color = getComputedStyle(element).getPropertyValue("color");

    return color
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRJbml0Q2lyY2xlQmFyKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gSW5pdENpcmNsZUJhcigpIHtcclxuXHRpZiAoJCgnLmpzLWNpcmNsZS1iYXInKS5sZW5ndGgpIHtcclxuXHRcdHZhciBlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1jaXJjbGUtYmFyJyk7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGVsID0gZWxzW2ldOyAvLyBnZXQgY2FudmFzXHJcblx0XHRcdHZhciBvcHRpb25zID0ge1xyXG5cdFx0XHRcdHBlcmNlbnQ6IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJjZW50JykgfHwgMjUsXHJcblx0XHRcdFx0c2l6ZTogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSB8fCAyMjAsXHJcblx0XHRcdFx0bGluZVdpZHRoOiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluZScpIHx8IDE1LFxyXG5cdFx0XHRcdHJvdGF0ZTogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZScpIHx8IDAsXHJcblx0XHRcdFx0Y2hpbGRwZXJjZW50OiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyY2VudC1jaGlsZCcpIHx8IDE1XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0XHRjYW52YXMuY2xhc3NOYW1lID0gJ2NpcmNsZS1iYXJfX2NpcmNsZSc7XHJcblx0XHRcdHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9IFwiY2lyY2xlLWJhcl9fdGV4dFwiO1xyXG5cdFx0XHRzcGFuLnRleHRDb250ZW50ID0gb3B0aW9ucy5wZXJjZW50ICsgJyUnO1xyXG5cdFx0XHR2YXIgY2FudmFzY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdFx0Y2FudmFzY2hpbGQuY2xhc3NOYW1lID0gJ2NpcmNsZS1iYXJfX2NpcmNsZS1jaGlsZCc7XHJcblx0XHRcdGlmICh0eXBlb2YgKEdfdm1sQ2FudmFzTWFuYWdlcikgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0R192bWxDYW52YXNNYW5hZ2VyLmluaXRFbGVtZW50KGNhbnZhcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5zaXplO1xyXG5cdFx0XHR2YXIgY3R4YyA9IGNhbnZhc2NoaWxkLmdldENvbnRleHQoJzJkJyk7XHJcblx0XHRcdHZhciBjdHhjX3NpemUgPSBvcHRpb25zLnNpemUgLSAob3B0aW9ucy5saW5lV2lkdGggKiAyKTtcclxuXHRcdFx0Y2FudmFzY2hpbGQud2lkdGggPSBjYW52YXNjaGlsZC5oZWlnaHQgPSBjdHhjX3NpemU7XHJcblx0XHRcdC8vZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHRcdGVsLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblx0XHRcdGVsLmFwcGVuZENoaWxkKGNhbnZhc2NoaWxkKTtcclxuXHRcdFx0Ly9wYXJlbnQgY2lybGVcclxuXHRcdFx0Y3R4LnRyYW5zbGF0ZShvcHRpb25zLnNpemUgLyAyLCBvcHRpb25zLnNpemUgLyAyKTsgLy8gY2hhbmdlIGNlbnRlclxyXG5cdFx0XHRjdHgucm90YXRlKCgtMSAvIDIgKyBvcHRpb25zLnJvdGF0ZSAvIDE4MCkgKiBNYXRoLlBJKTsgLy8gcm90YXRlIC05MCBkZWdcclxuXHRcdFx0Ly9jdHguc2NhbGUoMSwgLTEpO1xyXG5cdFx0XHR2YXIgcmFkaXVzID0gKG9wdGlvbnMuc2l6ZSAtIG9wdGlvbnMubGluZVdpZHRoKSAvIDI7XHJcblx0XHRcdHZhciBkcmF3Q2lyY2xlID0gZnVuY3Rpb24gKGNvbG9yLCBsaW5lV2lkdGgsIHBlcmNlbnQpIHtcclxuXHRcdFx0XHRwZXJjZW50ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgcGVyY2VudCB8fCAxKSwgMSk7XHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5hcmMoMCwgMCwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiAqIHBlcmNlbnQsIGZhbHNlKTtcclxuXHRcdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuXHRcdFx0XHRjdHgubGluZUNhcCA9ICdzcXVhcmUnOyAvLyBidXR0LCByb3VuZCBvciBzcXVhcmVcclxuXHRcdFx0XHRjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG5cdFx0XHRcdGN0eC5zdHJva2UoKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0ZHJhd0NpcmNsZSgnI2Q0ZDRkNCcsIG9wdGlvbnMubGluZVdpZHRoLCAxMDAgLyAxMDApO1xyXG5cdFx0XHRkcmF3Q2lyY2xlKEdldENvbG9yTmFtZUJ5Q2xhc3NOYW1lKFwiY2lyY2xlLWNvbG9yXCIpLCBvcHRpb25zLmxpbmVXaWR0aCwgb3B0aW9ucy5wZXJjZW50IC8gMTAwKTtcclxuXHRcdFx0Ly9jaGlsZCBjaXJjbGVcclxuXHRcdFx0Y3R4Yy50cmFuc2xhdGUoY3R4Y19zaXplIC8gMiwgY3R4Y19zaXplIC8gMik7IC8vIGNoYW5nZSBjZW50ZXJcclxuXHRcdFx0Y3R4Yy5yb3RhdGUoKC0xIC8gMiArIG9wdGlvbnMucm90YXRlIC8gMTgwKSAqIE1hdGguUEkpOyAvLyByb3RhdGUgLTkwIGRlZ1xyXG5cdFx0XHQvL2N0eGMuc2NhbGUoMSwgLTEpO1xyXG5cdFx0XHR2YXIgcmFkaXVzID0gKGN0eGNfc2l6ZSAtIG9wdGlvbnMubGluZVdpZHRoKSAvIDI7XHJcblx0XHRcdHZhciBkcmF3Q2lyY2xlQ2hpbGQgPSBmdW5jdGlvbiAoY29sb3IsIGxpbmVXaWR0aCwgcGVyY2VudCkge1xyXG5cdFx0XHRcdHBlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBwZXJjZW50IHx8IDEpLCAxKTtcclxuXHRcdFx0XHRjdHhjLmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eGMuYXJjKDAsIDAsIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIgKiBwZXJjZW50LCBmYWxzZSk7XHJcblx0XHRcdFx0Y3R4Yy5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG5cdFx0XHRcdGN0eGMubGluZUNhcCA9ICdzcXVhcmUnOyAvLyBidXR0LCByb3VuZCBvciBzcXVhcmVcclxuXHRcdFx0XHRjdHhjLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuXHRcdFx0XHRjdHhjLnN0cm9rZSgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRkcmF3Q2lyY2xlQ2hpbGQoJyNmZmYnLCBvcHRpb25zLmxpbmVXaWR0aCwgMTAwIC8gMTAwKTtcclxuXHRcdFx0ZHJhd0NpcmNsZUNoaWxkKEdldENvbG9yTmFtZUJ5Q2xhc3NOYW1lKFwiY2lyY2xlLWNoaWxkLWNvbG9yXCIpLCBvcHRpb25zLmxpbmVXaWR0aCwgb3B0aW9ucy5jaGlsZHBlcmNlbnQgLyAxMDApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gR2V0Q29sb3JOYW1lQnlDbGFzc05hbWUoY2xhc3NOYW1lKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIGNvbG9yO1xyXG4gICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpmaXhlZDtsZWZ0Oi0xMDBweDt0b3A6LTEwMHB4O3dpZHRoOjFweDtoZWlnaHQ6MXB4XCI7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtcHJvamVjdC1pdGVtXCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJjb2xvclwiKTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JcclxufSJdLCJmaWxlIjoiSXRlbS5qcyJ9
