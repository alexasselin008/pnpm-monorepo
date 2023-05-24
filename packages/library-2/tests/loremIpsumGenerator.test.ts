import { generateLoremIpsum } from "../src/loremIpsumGenerator.ts";

test("genrated output is longuer than 10 characters", () => {
    const result = generateLoremIpsum();

    expect(result.length).toBeGreaterThan(10);
});