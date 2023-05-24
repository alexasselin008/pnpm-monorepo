import {render, screen} from "@testing-library/react";

import { Home } from "../src/Home.tsx";

test("Home page has a button", () => {
    render(<Home />);

    expect(screen.getByText("Login")).not.toBeNull();
});