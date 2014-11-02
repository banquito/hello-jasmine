describe("apply rule don't repeat on", function() {
    var rule = new DontRepeat();
    
    it("[] should be true", function() {
        expect(rule.apply([])).toBe(true);
    });

    it("[1, 1] should be false", function() {
        expect(rule.apply([1, 1])).toBe(false);
    });
    
    it("[1, 2] should be true", function() {
        expect(rule.apply([1, 2])).toBe(true);
    });

    it("[1, 2, 3] should be true", function() {
        expect(rule.apply([1, 2, 3])).toBe(true);
    });

    it("[1, 2, 3, 1] should be false", function() {
        expect(rule.apply([1, 2, 3, 1])).toBe(false);
    });
});