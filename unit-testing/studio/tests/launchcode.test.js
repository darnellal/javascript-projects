// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit")
  });

  test("should return Jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff")
  });

  test("should return 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  });

  test("should return array of programs", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered).toHaveLength(3);
  });

  test("should return `Launch` when only divisible by 2", function() {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });

  test("should return `Launch` when only divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("should return `Launch` when only divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function() {
    expect(launchcode.launchOutput(49)).toBe("Rutabagas! That doesn't work.");
  });
});