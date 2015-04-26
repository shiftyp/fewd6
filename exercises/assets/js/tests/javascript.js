!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.test=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
	title : 'JavaScript',
	questions : [{
		id : 'quest1',
		prompt : 'Create an expression that evaluates to the integer <span class="variable">1</span>. ',
		type : 'javascript',
		messages : {
			success : 'You\'re #1!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The expression', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.result = frame.eval(js);
						done();
					});
				});
				env.it('should equal 1', function () {
					env.expect(this.result).toBe(1);
				});
			});
		}
	}, {
		id : 'quest2',
		prompt : 'Create a function called <span class="variable">sayHello</span> that returns the string <span class="string">"Hello World!"</span>.',
		type : 'javascript',
		messages : {
			success : 'Hello back at ya!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The function "sayHello"', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						try {
							self.frame.eval(js);
							done();
						} catch (e) {
							done(e);
						}
					});
				});
				env.it('should be a function', function () {
					env.expect(typeof this.frame.sayHello).toBe('function');
				});
				env.it('should return the string "Hello World"', function () {
					env.expect(this.frame.sayHello()).toBe('Hello World!');
				});
			});
		}
	}, {
		id : 'quest3',
		prompt : 'Create a function called <span class="variable">sayHello</span> that takes an argument <span class="variable">name</span> and returns <span class="string">"Hello </span><span class="variable">{name}</span><span class="string">!"</span>. For example, if the argument was <span class="string">"World"</span>, the function would return <span class="string">"Hello World!"</span>.',
		type : 'javascript',
		messages : {
			success : 'Hello again!',
			error : 'Ruh Roh...',
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The function "sayHello"', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						try {
							self.frame.eval(js);
							done();
						} catch (e) {
							done(e);
						}
					});
				});
				env.it('should be a function', function () {
					env.expect(typeof this.frame.sayHello).toBe('function');
				});
				env.it('should take a single argument', function () {
					env.expect(this.frame.sayHello.length).toBe(1);
				});
				env.it('should return "Hello {name}!" where name is the value of the argument', function () {
					env.expect(this.frame.sayHello('Ryan')).toBe('Hello Ryan!');
					env.expect(this.frame.sayHello('Wade')).toBe('Hello Wade!');
				});
			});
		}
	}, {
		id : 'quest4',
		prompt : 'Define a variable <span class="variable">myDiv</span> and assign it to a new div using <span class="variable">document.createElement()</span>.',
		type : 'javascript',
		messages : {
			success : 'Nice DIV!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The variable "myDiv"', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						try {
							self.frame.eval(js);
							done();
						} catch (e) {
							done(e);
						}
					});
				});
				env.it('should be defined', function () {
					env.expect(this.frame.myDiv).not.toBeUndefined();
				});
				env.it('should be an html element', function () {
					env.expect(this.frame.myDiv instanceof this.frame.HTMLElement).toBe(true);
				});
				env.it('should be a div', function () {
					env.expect(this.frame.myDiv.tagName).toBe('DIV');
				});
			});
		}
	}, {
		id : 'quest5',
		prompt : 'Use jQuery to select all spans that are direct descendents of a div.',
		type : 'javascript',
		envUrl : 'env/jquery_env.html',
		messages : {
			success : 'You got it!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The expression', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						env.spyOn(self.frame, '$');
						done();
					});
				});
				env.it('should call jQuery', function () {
					this.frame.eval(js);
					env.expect(this.frame.$).toHaveBeenCalled();
				});
				env.it('should call jQuery with the proper selector', function () {
					this.frame.eval(js);
					env.expect(this.frame.$).toHaveBeenCalledWith('div > span');
				});
			});
		}
	}, {
		id : 'quest6',
		prompt : 'Use <span class="variable">console.log()</span> to log the string <span class="string">"Hello World!"</span> 3 times using a <span class="variable">for</span> loop.',
		type : 'javascript',
		messages : {
			success : 'Third times the charm!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The for loop', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						env.spyOn(frame.console, 'log');
						done();
					});
				});
				env.it('should be the first statment', function () {
					env.expect(ast.body[0].type).toBe('ForStatement');
				});
				env.it('should log to the console three times', function () {
					this.frame.eval(js);
					env.expect(this.frame.console.log.calls.count()).toBe(3);
				});
				env.it('should log "Hello World!" three times', function () {
					this.frame.eval(js);
					env.expect(this.frame.console.log.calls.argsFor(0)).toEqual(['Hello World!']);
					env.expect(this.frame.console.log.calls.argsFor(1)).toEqual(['Hello World!']);
					env.expect(this.frame.console.log.calls.argsFor(2)).toEqual(['Hello World!']);
				});
			});
		}
	}, {
		id : 'quest7',
		prompt : 'Create an if else statement testing the value of <span class="variable">test</span>.  If <span class="variable">test</span> is <span class="variable">true</span> then log <span class="string">"Test is true"</span> to the console.  Otherwise log <span class="string">"Test is false"</span>.',
		type : 'javascript',
		messages : {
			success : 'Both cases work!  Good job!',
			error : 'Ruh Roh...'
		},
		test : function(env, js, ast, frameFactory){
			env.describe('The if / else statement', function () {
				env.beforeEach(function (done) {
					var self = this;
					frameFactory(function (frame) {
						self.frame = frame;
						env.spyOn(self.frame.console, 'log');
						done();
					});
				});
				env.it('should be the first statement', function () {
					env.expect(ast.body[0].type).toBe('IfStatement');
				});
				env.it('should log to the console when test is true', function () {
					this.frame.test = true;
					this.frame.eval(js);
					env.expect(this.frame.console.log).toHaveBeenCalled();
				});
				env.it('should log to the console when test is false', function () {
					this.frame.test = false;
					this.frame.eval(js);
					env.expect(this.frame.console.log).toHaveBeenCalled();
				});
				env.it('should log "Test is true" to the console when test is true', function () {
					this.frame.test = true;
					this.frame.eval(js);
					env.expect(this.frame.console.log).toHaveBeenCalledWith('Test is true');
				});
				env.it('should log "Test is false" to the console when test is false', function () {
					this.frame.test = false;
					this.frame.eval(js);
					env.expect(this.frame.console.log).toHaveBeenCalledWith('Test is false');
				});
			});
		}
	}],
	options : {
		jshint : {
			expr : true
		},
		jscs : {
			//requireSpaceBeforeBinaryOperators : true,
			//requireSpaceAfterBinaryOperators : true,
			disallowMultipleVarDecl : true,
			//requireSpacesInsideObjectBrackets : 'all',
			//requireSpacesInsideArrayBrackets : 'all',
			//requireSpaceAfterObjectKeys : true,
			requireCommaBeforeLineBreak : true,
			//disallowSpaceAfterPrefixUnaryOperators : true,
			//disallowSpaceBeforePostfixUnaryOperators : true,
			disallowMultipleLineBreaks : true,
			validateIndentation : '\t',
			disallowTrailingComma : true//,
			//disallowKeywordsOnNewLine : ['catch' , 'else'],
			//requireSpaceAfterLineComment : true,
			/*requireSpacesInConditionalExpression : {
				afterTest : true,
				beforeConsequent : true,
				afterConsequent : true,
				beforeAlternate : true
			},*/
			/*requireSpacesInFunctionDeclaration : {
				beforeOpeningRoundBrace : true
			},
			requireSpacesInFunctionExpression : {
				beforeOpeningRoundBrace : true
			},*/
			//requireSpaceBeforeBlockStatements : true,
			/*requireSpaceAfterKeywords: [
					'if',
					'else',
					'for',
					'while',
					'do',
					'switch',
					'return',
					'try',
					'catch'
			]*/
		}
	}
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL0NvZGUvcmluemFpX3Rlc3Rlci9ub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J5YW4vQ29kZS9yaW56YWlfdGVzdGVyL3NyYy9zY3JpcHRzL3Rlc3RzL2phdmFzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0dGl0bGUgOiAnSmF2YVNjcmlwdCcsXG5cdHF1ZXN0aW9ucyA6IFt7XG5cdFx0aWQgOiAncXVlc3QxJyxcblx0XHRwcm9tcHQgOiAnQ3JlYXRlIGFuIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gdGhlIGludGVnZXIgPHNwYW4gY2xhc3M9XCJ2YXJpYWJsZVwiPjE8L3NwYW4+LiAnLFxuXHRcdHR5cGUgOiAnamF2YXNjcmlwdCcsXG5cdFx0bWVzc2FnZXMgOiB7XG5cdFx0XHRzdWNjZXNzIDogJ1lvdVxcJ3JlICMxIScsXG5cdFx0XHRlcnJvciA6ICdSdWggUm9oLi4uJ1xuXHRcdH0sXG5cdFx0dGVzdCA6IGZ1bmN0aW9uKGVudiwganMsIGFzdCwgZnJhbWVGYWN0b3J5KXtcblx0XHRcdGVudi5kZXNjcmliZSgnVGhlIGV4cHJlc3Npb24nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGVudi5iZWZvcmVFYWNoKGZ1bmN0aW9uIChkb25lKSB7XG5cdFx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdGZyYW1lRmFjdG9yeShmdW5jdGlvbiAoZnJhbWUpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzdWx0ID0gZnJhbWUuZXZhbChqcyk7XG5cdFx0XHRcdFx0XHRkb25lKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBlcXVhbCAxJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5yZXN1bHQpLnRvQmUoMSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0aWQgOiAncXVlc3QyJyxcblx0XHRwcm9tcHQgOiAnQ3JlYXRlIGEgZnVuY3Rpb24gY2FsbGVkIDxzcGFuIGNsYXNzPVwidmFyaWFibGVcIj5zYXlIZWxsbzwvc3Bhbj4gdGhhdCByZXR1cm5zIHRoZSBzdHJpbmcgPHNwYW4gY2xhc3M9XCJzdHJpbmdcIj5cIkhlbGxvIFdvcmxkIVwiPC9zcGFuPi4nLFxuXHRcdHR5cGUgOiAnamF2YXNjcmlwdCcsXG5cdFx0bWVzc2FnZXMgOiB7XG5cdFx0XHRzdWNjZXNzIDogJ0hlbGxvIGJhY2sgYXQgeWEhJyxcblx0XHRcdGVycm9yIDogJ1J1aCBSb2guLi4nXG5cdFx0fSxcblx0XHR0ZXN0IDogZnVuY3Rpb24oZW52LCBqcywgYXN0LCBmcmFtZUZhY3Rvcnkpe1xuXHRcdFx0ZW52LmRlc2NyaWJlKCdUaGUgZnVuY3Rpb24gXCJzYXlIZWxsb1wiJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRlbnYuYmVmb3JlRWFjaChmdW5jdGlvbiAoZG9uZSkge1xuXHRcdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFx0XHRmcmFtZUZhY3RvcnkoZnVuY3Rpb24gKGZyYW1lKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmZyYW1lID0gZnJhbWU7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdFx0XHRkb25lKCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRcdGRvbmUoZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBiZSBhIGZ1bmN0aW9uJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3QodHlwZW9mIHRoaXMuZnJhbWUuc2F5SGVsbG8pLnRvQmUoJ2Z1bmN0aW9uJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHN0cmluZyBcIkhlbGxvIFdvcmxkXCInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZW52LmV4cGVjdCh0aGlzLmZyYW1lLnNheUhlbGxvKCkpLnRvQmUoJ0hlbGxvIFdvcmxkIScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGlkIDogJ3F1ZXN0MycsXG5cdFx0cHJvbXB0IDogJ0NyZWF0ZSBhIGZ1bmN0aW9uIGNhbGxlZCA8c3BhbiBjbGFzcz1cInZhcmlhYmxlXCI+c2F5SGVsbG88L3NwYW4+IHRoYXQgdGFrZXMgYW4gYXJndW1lbnQgPHNwYW4gY2xhc3M9XCJ2YXJpYWJsZVwiPm5hbWU8L3NwYW4+IGFuZCByZXR1cm5zIDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+XCJIZWxsbyA8L3NwYW4+PHNwYW4gY2xhc3M9XCJ2YXJpYWJsZVwiPntuYW1lfTwvc3Bhbj48c3BhbiBjbGFzcz1cInN0cmluZ1wiPiFcIjwvc3Bhbj4uIEZvciBleGFtcGxlLCBpZiB0aGUgYXJndW1lbnQgd2FzIDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+XCJXb3JsZFwiPC9zcGFuPiwgdGhlIGZ1bmN0aW9uIHdvdWxkIHJldHVybiA8c3BhbiBjbGFzcz1cInN0cmluZ1wiPlwiSGVsbG8gV29ybGQhXCI8L3NwYW4+LicsXG5cdFx0dHlwZSA6ICdqYXZhc2NyaXB0Jyxcblx0XHRtZXNzYWdlcyA6IHtcblx0XHRcdHN1Y2Nlc3MgOiAnSGVsbG8gYWdhaW4hJyxcblx0XHRcdGVycm9yIDogJ1J1aCBSb2guLi4nLFxuXHRcdH0sXG5cdFx0dGVzdCA6IGZ1bmN0aW9uKGVudiwganMsIGFzdCwgZnJhbWVGYWN0b3J5KXtcblx0XHRcdGVudi5kZXNjcmliZSgnVGhlIGZ1bmN0aW9uIFwic2F5SGVsbG9cIicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZW52LmJlZm9yZUVhY2goZnVuY3Rpb24gKGRvbmUpIHtcblx0XHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFx0ZnJhbWVGYWN0b3J5KGZ1bmN0aW9uIChmcmFtZSkge1xuXHRcdFx0XHRcdFx0c2VsZi5mcmFtZSA9IGZyYW1lO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0c2VsZi5mcmFtZS5ldmFsKGpzKTtcblx0XHRcdFx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0XHRkb25lKGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgYmUgYSBmdW5jdGlvbicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHR5cGVvZiB0aGlzLmZyYW1lLnNheUhlbGxvKS50b0JlKCdmdW5jdGlvbicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgdGFrZSBhIHNpbmdsZSBhcmd1bWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHRoaXMuZnJhbWUuc2F5SGVsbG8ubGVuZ3RoKS50b0JlKDEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgcmV0dXJuIFwiSGVsbG8ge25hbWV9IVwiIHdoZXJlIG5hbWUgaXMgdGhlIHZhbHVlIG9mIHRoZSBhcmd1bWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHRoaXMuZnJhbWUuc2F5SGVsbG8oJ1J5YW4nKSkudG9CZSgnSGVsbG8gUnlhbiEnKTtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHRoaXMuZnJhbWUuc2F5SGVsbG8oJ1dhZGUnKSkudG9CZSgnSGVsbG8gV2FkZSEnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRpZCA6ICdxdWVzdDQnLFxuXHRcdHByb21wdCA6ICdEZWZpbmUgYSB2YXJpYWJsZSA8c3BhbiBjbGFzcz1cInZhcmlhYmxlXCI+bXlEaXY8L3NwYW4+IGFuZCBhc3NpZ24gaXQgdG8gYSBuZXcgZGl2IHVzaW5nIDxzcGFuIGNsYXNzPVwidmFyaWFibGVcIj5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCk8L3NwYW4+LicsXG5cdFx0dHlwZSA6ICdqYXZhc2NyaXB0Jyxcblx0XHRtZXNzYWdlcyA6IHtcblx0XHRcdHN1Y2Nlc3MgOiAnTmljZSBESVYhJyxcblx0XHRcdGVycm9yIDogJ1J1aCBSb2guLi4nXG5cdFx0fSxcblx0XHR0ZXN0IDogZnVuY3Rpb24oZW52LCBqcywgYXN0LCBmcmFtZUZhY3Rvcnkpe1xuXHRcdFx0ZW52LmRlc2NyaWJlKCdUaGUgdmFyaWFibGUgXCJteURpdlwiJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRlbnYuYmVmb3JlRWFjaChmdW5jdGlvbiAoZG9uZSkge1xuXHRcdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFx0XHRmcmFtZUZhY3RvcnkoZnVuY3Rpb24gKGZyYW1lKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmZyYW1lID0gZnJhbWU7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRzZWxmLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdFx0XHRkb25lKCk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRcdGRvbmUoZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5teURpdikubm90LnRvQmVVbmRlZmluZWQoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGJlIGFuIGh0bWwgZWxlbWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KHRoaXMuZnJhbWUubXlEaXYgaW5zdGFuY2VvZiB0aGlzLmZyYW1lLkhUTUxFbGVtZW50KS50b0JlKHRydWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgYmUgYSBkaXYnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZW52LmV4cGVjdCh0aGlzLmZyYW1lLm15RGl2LnRhZ05hbWUpLnRvQmUoJ0RJVicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGlkIDogJ3F1ZXN0NScsXG5cdFx0cHJvbXB0IDogJ1VzZSBqUXVlcnkgdG8gc2VsZWN0IGFsbCBzcGFucyB0aGF0IGFyZSBkaXJlY3QgZGVzY2VuZGVudHMgb2YgYSBkaXYuJyxcblx0XHR0eXBlIDogJ2phdmFzY3JpcHQnLFxuXHRcdGVudlVybCA6ICdlbnYvanF1ZXJ5X2Vudi5odG1sJyxcblx0XHRtZXNzYWdlcyA6IHtcblx0XHRcdHN1Y2Nlc3MgOiAnWW91IGdvdCBpdCEnLFxuXHRcdFx0ZXJyb3IgOiAnUnVoIFJvaC4uLidcblx0XHR9LFxuXHRcdHRlc3QgOiBmdW5jdGlvbihlbnYsIGpzLCBhc3QsIGZyYW1lRmFjdG9yeSl7XG5cdFx0XHRlbnYuZGVzY3JpYmUoJ1RoZSBleHByZXNzaW9uJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRlbnYuYmVmb3JlRWFjaChmdW5jdGlvbiAoZG9uZSkge1xuXHRcdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFx0XHRmcmFtZUZhY3RvcnkoZnVuY3Rpb24gKGZyYW1lKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmZyYW1lID0gZnJhbWU7XG5cdFx0XHRcdFx0XHRlbnYuc3B5T24oc2VsZi5mcmFtZSwgJyQnKTtcblx0XHRcdFx0XHRcdGRvbmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGNhbGwgalF1ZXJ5JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZnJhbWUuZXZhbChqcyk7XG5cdFx0XHRcdFx0ZW52LmV4cGVjdCh0aGlzLmZyYW1lLiQpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGNhbGwgalF1ZXJ5IHdpdGggdGhlIHByb3BlciBzZWxlY3RvcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS4kKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnZGl2ID4gc3BhbicpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGlkIDogJ3F1ZXN0NicsXG5cdFx0cHJvbXB0IDogJ1VzZSA8c3BhbiBjbGFzcz1cInZhcmlhYmxlXCI+Y29uc29sZS5sb2coKTwvc3Bhbj4gdG8gbG9nIHRoZSBzdHJpbmcgPHNwYW4gY2xhc3M9XCJzdHJpbmdcIj5cIkhlbGxvIFdvcmxkIVwiPC9zcGFuPiAzIHRpbWVzIHVzaW5nIGEgPHNwYW4gY2xhc3M9XCJ2YXJpYWJsZVwiPmZvcjwvc3Bhbj4gbG9vcC4nLFxuXHRcdHR5cGUgOiAnamF2YXNjcmlwdCcsXG5cdFx0bWVzc2FnZXMgOiB7XG5cdFx0XHRzdWNjZXNzIDogJ1RoaXJkIHRpbWVzIHRoZSBjaGFybSEnLFxuXHRcdFx0ZXJyb3IgOiAnUnVoIFJvaC4uLidcblx0XHR9LFxuXHRcdHRlc3QgOiBmdW5jdGlvbihlbnYsIGpzLCBhc3QsIGZyYW1lRmFjdG9yeSl7XG5cdFx0XHRlbnYuZGVzY3JpYmUoJ1RoZSBmb3IgbG9vcCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZW52LmJlZm9yZUVhY2goZnVuY3Rpb24gKGRvbmUpIHtcblx0XHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFx0ZnJhbWVGYWN0b3J5KGZ1bmN0aW9uIChmcmFtZSkge1xuXHRcdFx0XHRcdFx0c2VsZi5mcmFtZSA9IGZyYW1lO1xuXHRcdFx0XHRcdFx0ZW52LnNweU9uKGZyYW1lLmNvbnNvbGUsICdsb2cnKTtcblx0XHRcdFx0XHRcdGRvbmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVudi5pdCgnc2hvdWxkIGJlIHRoZSBmaXJzdCBzdGF0bWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KGFzdC5ib2R5WzBdLnR5cGUpLnRvQmUoJ0ZvclN0YXRlbWVudCcpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgbG9nIHRvIHRoZSBjb25zb2xlIHRocmVlIHRpbWVzJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRoaXMuZnJhbWUuZXZhbChqcyk7XG5cdFx0XHRcdFx0ZW52LmV4cGVjdCh0aGlzLmZyYW1lLmNvbnNvbGUubG9nLmNhbGxzLmNvdW50KCkpLnRvQmUoMyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBsb2cgXCJIZWxsbyBXb3JsZCFcIiB0aHJlZSB0aW1lcycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZy5jYWxscy5hcmdzRm9yKDApKS50b0VxdWFsKFsnSGVsbG8gV29ybGQhJ10pO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZy5jYWxscy5hcmdzRm9yKDEpKS50b0VxdWFsKFsnSGVsbG8gV29ybGQhJ10pO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZy5jYWxscy5hcmdzRm9yKDIpKS50b0VxdWFsKFsnSGVsbG8gV29ybGQhJ10pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGlkIDogJ3F1ZXN0NycsXG5cdFx0cHJvbXB0IDogJ0NyZWF0ZSBhbiBpZiBlbHNlIHN0YXRlbWVudCB0ZXN0aW5nIHRoZSB2YWx1ZSBvZiA8c3BhbiBjbGFzcz1cInZhcmlhYmxlXCI+dGVzdDwvc3Bhbj4uICBJZiA8c3BhbiBjbGFzcz1cInZhcmlhYmxlXCI+dGVzdDwvc3Bhbj4gaXMgPHNwYW4gY2xhc3M9XCJ2YXJpYWJsZVwiPnRydWU8L3NwYW4+IHRoZW4gbG9nIDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+XCJUZXN0IGlzIHRydWVcIjwvc3Bhbj4gdG8gdGhlIGNvbnNvbGUuICBPdGhlcndpc2UgbG9nIDxzcGFuIGNsYXNzPVwic3RyaW5nXCI+XCJUZXN0IGlzIGZhbHNlXCI8L3NwYW4+LicsXG5cdFx0dHlwZSA6ICdqYXZhc2NyaXB0Jyxcblx0XHRtZXNzYWdlcyA6IHtcblx0XHRcdHN1Y2Nlc3MgOiAnQm90aCBjYXNlcyB3b3JrISAgR29vZCBqb2IhJyxcblx0XHRcdGVycm9yIDogJ1J1aCBSb2guLi4nXG5cdFx0fSxcblx0XHR0ZXN0IDogZnVuY3Rpb24oZW52LCBqcywgYXN0LCBmcmFtZUZhY3Rvcnkpe1xuXHRcdFx0ZW52LmRlc2NyaWJlKCdUaGUgaWYgLyBlbHNlIHN0YXRlbWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZW52LmJlZm9yZUVhY2goZnVuY3Rpb24gKGRvbmUpIHtcblx0XHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFx0ZnJhbWVGYWN0b3J5KGZ1bmN0aW9uIChmcmFtZSkge1xuXHRcdFx0XHRcdFx0c2VsZi5mcmFtZSA9IGZyYW1lO1xuXHRcdFx0XHRcdFx0ZW52LnNweU9uKHNlbGYuZnJhbWUuY29uc29sZSwgJ2xvZycpO1xuXHRcdFx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgYmUgdGhlIGZpcnN0IHN0YXRlbWVudCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRlbnYuZXhwZWN0KGFzdC5ib2R5WzBdLnR5cGUpLnRvQmUoJ0lmU3RhdGVtZW50Jyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRlbnYuaXQoJ3Nob3VsZCBsb2cgdG8gdGhlIGNvbnNvbGUgd2hlbiB0ZXN0IGlzIHRydWUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mcmFtZS50ZXN0ID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgbG9nIHRvIHRoZSBjb25zb2xlIHdoZW4gdGVzdCBpcyBmYWxzZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLnRlc3QgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgbG9nIFwiVGVzdCBpcyB0cnVlXCIgdG8gdGhlIGNvbnNvbGUgd2hlbiB0ZXN0IGlzIHRydWUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5mcmFtZS50ZXN0ID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ1Rlc3QgaXMgdHJ1ZScpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZW52Lml0KCdzaG91bGQgbG9nIFwiVGVzdCBpcyBmYWxzZVwiIHRvIHRoZSBjb25zb2xlIHdoZW4gdGVzdCBpcyBmYWxzZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLnRlc3QgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmZyYW1lLmV2YWwoanMpO1xuXHRcdFx0XHRcdGVudi5leHBlY3QodGhpcy5mcmFtZS5jb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ1Rlc3QgaXMgZmFsc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1dLFxuXHRvcHRpb25zIDoge1xuXHRcdGpzaGludCA6IHtcblx0XHRcdGV4cHIgOiB0cnVlXG5cdFx0fSxcblx0XHRqc2NzIDoge1xuXHRcdFx0Ly9yZXF1aXJlU3BhY2VCZWZvcmVCaW5hcnlPcGVyYXRvcnMgOiB0cnVlLFxuXHRcdFx0Ly9yZXF1aXJlU3BhY2VBZnRlckJpbmFyeU9wZXJhdG9ycyA6IHRydWUsXG5cdFx0XHRkaXNhbGxvd011bHRpcGxlVmFyRGVjbCA6IHRydWUsXG5cdFx0XHQvL3JlcXVpcmVTcGFjZXNJbnNpZGVPYmplY3RCcmFja2V0cyA6ICdhbGwnLFxuXHRcdFx0Ly9yZXF1aXJlU3BhY2VzSW5zaWRlQXJyYXlCcmFja2V0cyA6ICdhbGwnLFxuXHRcdFx0Ly9yZXF1aXJlU3BhY2VBZnRlck9iamVjdEtleXMgOiB0cnVlLFxuXHRcdFx0cmVxdWlyZUNvbW1hQmVmb3JlTGluZUJyZWFrIDogdHJ1ZSxcblx0XHRcdC8vZGlzYWxsb3dTcGFjZUFmdGVyUHJlZml4VW5hcnlPcGVyYXRvcnMgOiB0cnVlLFxuXHRcdFx0Ly9kaXNhbGxvd1NwYWNlQmVmb3JlUG9zdGZpeFVuYXJ5T3BlcmF0b3JzIDogdHJ1ZSxcblx0XHRcdGRpc2FsbG93TXVsdGlwbGVMaW5lQnJlYWtzIDogdHJ1ZSxcblx0XHRcdHZhbGlkYXRlSW5kZW50YXRpb24gOiAnXFx0Jyxcblx0XHRcdGRpc2FsbG93VHJhaWxpbmdDb21tYSA6IHRydWUvLyxcblx0XHRcdC8vZGlzYWxsb3dLZXl3b3Jkc09uTmV3TGluZSA6IFsnY2F0Y2gnICwgJ2Vsc2UnXSxcblx0XHRcdC8vcmVxdWlyZVNwYWNlQWZ0ZXJMaW5lQ29tbWVudCA6IHRydWUsXG5cdFx0XHQvKnJlcXVpcmVTcGFjZXNJbkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA6IHtcblx0XHRcdFx0YWZ0ZXJUZXN0IDogdHJ1ZSxcblx0XHRcdFx0YmVmb3JlQ29uc2VxdWVudCA6IHRydWUsXG5cdFx0XHRcdGFmdGVyQ29uc2VxdWVudCA6IHRydWUsXG5cdFx0XHRcdGJlZm9yZUFsdGVybmF0ZSA6IHRydWVcblx0XHRcdH0sKi9cblx0XHRcdC8qcmVxdWlyZVNwYWNlc0luRnVuY3Rpb25EZWNsYXJhdGlvbiA6IHtcblx0XHRcdFx0YmVmb3JlT3BlbmluZ1JvdW5kQnJhY2UgOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0cmVxdWlyZVNwYWNlc0luRnVuY3Rpb25FeHByZXNzaW9uIDoge1xuXHRcdFx0XHRiZWZvcmVPcGVuaW5nUm91bmRCcmFjZSA6IHRydWVcblx0XHRcdH0sKi9cblx0XHRcdC8vcmVxdWlyZVNwYWNlQmVmb3JlQmxvY2tTdGF0ZW1lbnRzIDogdHJ1ZSxcblx0XHRcdC8qcmVxdWlyZVNwYWNlQWZ0ZXJLZXl3b3JkczogW1xuXHRcdFx0XHRcdCdpZicsXG5cdFx0XHRcdFx0J2Vsc2UnLFxuXHRcdFx0XHRcdCdmb3InLFxuXHRcdFx0XHRcdCd3aGlsZScsXG5cdFx0XHRcdFx0J2RvJyxcblx0XHRcdFx0XHQnc3dpdGNoJyxcblx0XHRcdFx0XHQncmV0dXJuJyxcblx0XHRcdFx0XHQndHJ5Jyxcblx0XHRcdFx0XHQnY2F0Y2gnXG5cdFx0XHRdKi9cblx0XHR9XG5cdH1cbn07XG4iXX0=
(1)
});
