import {render, screen} from "@testing-library/react";

import { LoremIpsum } from "../src/LoremIpsum.tsx";

test("Lorem ipsum component has a button", () => {
    render(<LoremIpsum />);

    expect(screen.getByRole("button")).not.toBeNull();
});