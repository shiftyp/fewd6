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
