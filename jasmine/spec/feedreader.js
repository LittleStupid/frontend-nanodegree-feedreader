/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the loadfeed() variable in our application.
  */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * loadfeed() variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * loadfeed() in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined()
      expect(allFeeds.length).not.toBe(0)
    })

    // test whether url is valid
    it('url valid', function () {
      for ( var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined()
        expect(allFeeds[i].url.length).not.toBe(0)
      }
    })

    // test whether name is valid
    it('name vaild', function () {
      for ( var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined()
        expect(allFeeds[i].name.length).not.toBe(0)
      }
    })
  })

  describe('The menu', function () {
    // make sure menu is hidden at first time.
    it('defalut hidden', function () {
      expect($('body').hasClass('menu-hidden')).toBeTruthy()
    })

    // test that ensures the menu changes visibility when the menu icon is clicked
    it('change visibility', function () {
      $('.menu-icon-link').click()
      expect($('body').hasClass('menu-hidden')).toBeFalsy()

      $('.menu-icon-link').click()
      expect($('body').hasClass('menu-hidden')).toBeTruthy()
    })
  })

  describe('Initial Entries', function () {
    // test that ensures when the loadFeed function is called and completes its work
    beforeEach(function (done) {
      loadFeed(0, done)
    })

    it('test loadFeed', function () {
      expect($('.entry').length).toBeGreaterThan(0)
    })
  })

  // test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
  describe('New Feed Selection', function () {
    beforeEach(function (done) {
      loadFeed(0, done)
    })

    it('test feed changed', function (done) {
      var titleBefore = $('.feed .entry-link .entry h2')[0].innerText

      loadFeed(2, function () {
        var titleAfter = $('.feed .entry-link .entry h2')[0].innerText
        expect(titleBefore).not.toEqual(titleAfter)
        done()
      })
    })
  })
}())
