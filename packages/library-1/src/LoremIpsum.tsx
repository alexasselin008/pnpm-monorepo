import { generateLoremIpsum } from "library-2";

export function LoremIpsum() {
    const loremIpsum = generateLoremIpsum();

    return (
        <>
            <p>{loremIpsum}</p>
            <button type="button">Generate new</button>
        </>
    )
}