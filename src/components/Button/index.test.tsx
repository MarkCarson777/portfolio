import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button } from "./index";

describe("Button", () => {
  const render = () => renderToStaticMarkup(<Button />);

  it("renders without crashing", () => {
    const markup = render();

    expect(markup.length).toBeGreaterThan(0);
  });

  it("renders label text and base class", () => {
    const markup = render();

    expect(markup).toContain("<button");
    expect(markup).toContain("Click Me");
    expect(markup).toContain('class="bg-blue-500"');
  });
});
