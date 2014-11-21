exports.test = it('should open google and check if title is "Google"', function (done) {
		var match = 'Google',
		title = '';

		client.get("http://www.google.com");

		// wait for page title, we know we are there
		waitsFor(function () {
				client.getTitle().then(function (_title) {
						title = _title;
				});

				return title === match;
		}, 'Test page title, so we know page is loaded', 10000);

		// test title is correct
		runs(function () {
			expect(title).toEqual(match);
			done();
		});
});
