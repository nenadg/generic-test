exports.test = it('should enter testing in search and check change in title', function (done) {
		var match = 'testing - Google pretraga',
		title = '';

		client.findElement(webdriver.By.name("q")).sendKeys("testing");
		client.findElement(webdriver.By.name("btnK")).click();

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
