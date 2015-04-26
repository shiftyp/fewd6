!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.test=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
	title : 'CSS',
	questions : [{
		id : 'quest1',
		prompt : 'Create a rule that sets the color of all spans to be white using a hex code. ',
		type : 'css',
		test : function(env, css, ast){
			env.describe('The rule', function () {
				var rules;
				var rule;
				var selector;
				var declaration;
				var value;

				env.it('should be the only rule in the stylesheet', function () {
					rules = ast.stylesheet.rules;
					env.expect(rules.length).toBe(1);
				});

				env.it('should only have one selector', function () {
					rule = rules[0];
					if (rule) env.expect(rule.selectors.length).toBe(1);
				});

				env.it('should select all spans in the document', function () {
					if (rule) selector = rule.selectors[0];
					if (selector) env.expect(selector === 'span').toBe(true);
				});

				env.it('should have only one declaration', function () {
					env.expect(rule.declarations.length).toBe(1);
				});

				env.it('should contain a declaration that changes text color', function () {
					if (rule) declaration = rule.declarations[0];
					if (declaration) env.expect(declaration.property === 'color').toBe(true);
				});

				env.it('should set the text color to white using a hex code', function () {
					if (declaration) value = declaration.value;
					if(value) env.expect(value.match(/#[fF]{3}|#[fF]{6}/)).not.toBe(null);
				});
			});
		}
	}]
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL0NvZGUvcmluemFpX3Rlc3Rlci9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J5YW4vQ29kZS9yaW56YWlfdGVzdGVyL3NyYy9zY3JpcHRzL3Rlc3RzL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRpdGxlIDogJ0NTUycsXG5cdHF1ZXN0aW9ucyA6IFt7XG5cdFx0aWQgOiAncXVlc3QxJyxcblx0XHRwcm9tcHQgOiAnQ3JlYXRlIGEgcnVsZSB0aGF0IHNldHMgdGhlIGNvbG9yIG9mIGFsbCBzcGFucyB0byBiZSB3aGl0ZSB1c2luZyBhIGhleCBjb2RlLiAnLFxuXHRcdHR5cGUgOiAnY3NzJyxcblx0XHR0ZXN0IDogZnVuY3Rpb24oZW52LCBjc3MsIGFzdCl7XG5cdFx0XHRlbnYuZGVzY3JpYmUoJ1RoZSBydWxlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgcnVsZXM7XG5cdFx0XHRcdHZhciBydWxlO1xuXHRcdFx0XHR2YXIgc2VsZWN0b3I7XG5cdFx0XHRcdHZhciBkZWNsYXJhdGlvbjtcblx0XHRcdFx0dmFyIHZhbHVlO1xuXG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGJlIHRoZSBvbmx5IHJ1bGUgaW4gdGhlIHN0eWxlc2hlZXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cnVsZXMgPSBhc3Quc3R5bGVzaGVldC5ydWxlcztcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHJ1bGVzLmxlbmd0aCkudG9CZSgxKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgb25seSBoYXZlIG9uZSBzZWxlY3RvcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRydWxlID0gcnVsZXNbMF07XG5cdFx0XHRcdFx0aWYgKHJ1bGUpIGVudi5leHBlY3QocnVsZS5zZWxlY3RvcnMubGVuZ3RoKS50b0JlKDEpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBzZWxlY3QgYWxsIHNwYW5zIGluIHRoZSBkb2N1bWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAocnVsZSkgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yc1swXTtcblx0XHRcdFx0XHRpZiAoc2VsZWN0b3IpIGVudi5leHBlY3Qoc2VsZWN0b3IgPT09ICdzcGFuJykudG9CZSh0cnVlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgaGF2ZSBvbmx5IG9uZSBkZWNsYXJhdGlvbicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHJ1bGUuZGVjbGFyYXRpb25zLmxlbmd0aCkudG9CZSgxKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgY29udGFpbiBhIGRlY2xhcmF0aW9uIHRoYXQgY2hhbmdlcyB0ZXh0IGNvbG9yJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmIChydWxlKSBkZWNsYXJhdGlvbiA9IHJ1bGUuZGVjbGFyYXRpb25zWzBdO1xuXHRcdFx0XHRcdGlmIChkZWNsYXJhdGlvbikgZW52LmV4cGVjdChkZWNsYXJhdGlvbi5wcm9wZXJ0eSA9PT0gJ2NvbG9yJykudG9CZSh0cnVlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgc2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlIHVzaW5nIGEgaGV4IGNvZGUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKGRlY2xhcmF0aW9uKSB2YWx1ZSA9IGRlY2xhcmF0aW9uLnZhbHVlO1xuXHRcdFx0XHRcdGlmKHZhbHVlKSBlbnYuZXhwZWN0KHZhbHVlLm1hdGNoKC8jW2ZGXXszfXwjW2ZGXXs2fS8pKS5ub3QudG9CZShudWxsKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dXG59O1xuIl19
(1)
});
