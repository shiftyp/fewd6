!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.test=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
	title : 'html',
	questions : [{
		id : 'quest1',
		prompt : 'Create a <span class="variable">div</span> with the class <span class="string">my-div</span>.',
		type : 'html',
		test : function(env, html, nodes){
			env.describe('The div', function () {
				env.it('should be the only element', function () {
					env.expect(nodes.length).toBe(1);
				});
				env.it('should be a div', function () {
					env.expect(nodes[0].tagName).toBe('DIV');
				});
				env.it('should be empty', function () {
					env.expect(nodes[0].querySelectorAll('*').length).toBe(0);
				});
				env.it('should have the class "my-div" applied to it', function () {
					env.expect(nodes[0].className).toBe('my-div');
				});
			});
		}
	},{
		id : 'quest2',
		prompt : 'Create three anchor tags with the href <span class="string">#foo</span> and text <span class="string">foo</span>.',
		type : 'html',
		test : function(env, html, nodes){
			env.describe('The anchor tags', function () {
				env.it('should be the only three elements', function () {
					env.expect(nodes.length).toBe(3);
				});
				env.it('should be anchor tags', function () {
					nodes.forEach(function (node) {
						env.expect(node.tagName).toBe('A');
					});
				});
				env.it('should only contain text', function () {
					nodes.forEach(function (node) {
						env.expect(node.childNodes.length).toBe(1);
						env.expect(node.childNodes[0].nodeName).toBe('#text');
					});
				});
				env.it('should contain the text "foo"', function () {
					nodes.forEach(function (node) {
						env.expect(node.textContent).toBe('foo');
					});
				});
				env.it('should have the href "#foo"', function () {
					nodes.forEach(function (node) {
						env.expect(node.getAttribute('href')).toBe('#foo');
					});
				});
			});
		}
	}]
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL0NvZGUvcmluemFpX3Rlc3Rlci9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J5YW4vQ29kZS9yaW56YWlfdGVzdGVyL3NyYy9zY3JpcHRzL3Rlc3RzL2h0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRpdGxlIDogJ2h0bWwnLFxuXHRxdWVzdGlvbnMgOiBbe1xuXHRcdGlkIDogJ3F1ZXN0MScsXG5cdFx0cHJvbXB0IDogJ0NyZWF0ZSBhIDxzcGFuIGNsYXNzPVwidmFyaWFibGVcIj5kaXY8L3NwYW4+IHdpdGggdGhlIGNsYXNzIDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+bXktZGl2PC9zcGFuPi4nLFxuXHRcdHR5cGUgOiAnaHRtbCcsXG5cdFx0dGVzdCA6IGZ1bmN0aW9uKGVudiwgaHRtbCwgbm9kZXMpe1xuXHRcdFx0ZW52LmRlc2NyaWJlKCdUaGUgZGl2JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBiZSB0aGUgb25seSBlbGVtZW50JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZXMubGVuZ3RoKS50b0JlKDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgYmUgYSBkaXYnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZW52LmV4cGVjdChub2Rlc1swXS50YWdOYW1lKS50b0JlKCdESVYnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGJlIGVtcHR5JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZXNbMF0ucXVlcnlTZWxlY3RvckFsbCgnKicpLmxlbmd0aCkudG9CZSgwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGhhdmUgdGhlIGNsYXNzIFwibXktZGl2XCIgYXBwbGllZCB0byBpdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KG5vZGVzWzBdLmNsYXNzTmFtZSkudG9CZSgnbXktZGl2Jyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LHtcblx0XHRpZCA6ICdxdWVzdDInLFxuXHRcdHByb21wdCA6ICdDcmVhdGUgdGhyZWUgYW5jaG9yIHRhZ3Mgd2l0aCB0aGUgaHJlZiA8c3BhbiBjbGFzcz1cInN0cmluZ1wiPiNmb288L3NwYW4+IGFuZCB0ZXh0IDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+Zm9vPC9zcGFuPi4nLFxuXHRcdHR5cGUgOiAnaHRtbCcsXG5cdFx0dGVzdCA6IGZ1bmN0aW9uKGVudiwgaHRtbCwgbm9kZXMpe1xuXHRcdFx0ZW52LmRlc2NyaWJlKCdUaGUgYW5jaG9yIHRhZ3MnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGJlIHRoZSBvbmx5IHRocmVlIGVsZW1lbnRzJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZXMubGVuZ3RoKS50b0JlKDMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgYmUgYW5jaG9yIHRhZ3MnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0XHRcdFx0ZW52LmV4cGVjdChub2RlLnRhZ05hbWUpLnRvQmUoJ0EnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIG9ubHkgY29udGFpbiB0ZXh0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCkudG9CZSgxKTtcblx0XHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKS50b0JlKCcjdGV4dCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgY29udGFpbiB0aGUgdGV4dCBcImZvb1wiJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZS50ZXh0Q29udGVudCkudG9CZSgnZm9vJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBoYXZlIHRoZSBocmVmIFwiI2Zvb1wiJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRcdFx0XHRcdGVudi5leHBlY3Qobm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkudG9CZSgnI2ZvbycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fV1cbn07XG4iXX0=
(1)
});
