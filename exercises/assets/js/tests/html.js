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
