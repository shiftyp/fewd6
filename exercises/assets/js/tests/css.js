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
