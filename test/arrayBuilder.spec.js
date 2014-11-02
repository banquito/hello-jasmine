describe("array builder", function() {
    var arrayBuilder = new ArrayBuilder();
    
    describe("given 1 result", function() {
        var result = arrayBuilder.build();;
        it("should have 5 elements", function() {
            expect(result.length).toBe(5);
        });
        it("should apply don't repeat", function() {
            var dontRepeat = new DontRepeat();
            expect(dontRepeat.apply(result)).toBe(true);
        });
    });
    describe("given 2 results", function() {
        var result1 = arrayBuilder.build();
        var result2 = arrayBuilder.build();;
        it("should have 5 elements", function() {
            expect(result1.length).toBe(5);
            expect(result2.length).toBe(5);
        });
        it("should be different", function() {
            expect(result1).not.toEqual(result2);
        });
        it("should apply don't repeat", function() {
            var dontRepeat = new DontRepeat();
            expect(dontRepeat.apply(result1)).toBe(true);
            expect(dontRepeat.apply(result2)).toBe(true);
        });
    });
    describe("given 1000 results", function() {
        var results = [];
        for (var i = 0; i < 1000; i++) {
            results.push(arrayBuilder.build());
        }
        it("each one should have 5 elements", function() {
            results.forEach(function(result) {
                expect(result.length).toBe(5);    
            })
        });
        it("each one should apply don't repeat", function() {
            var dontRepeat = new DontRepeat();
            results.forEach(function(result) {
                expect(dontRepeat.apply(result)).toBe(true, result);
            })
        });
    });
});