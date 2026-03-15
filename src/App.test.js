import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("@tsparticles/react", () => ({
  __esModule: true,
  default: () => null,
  initParticlesEngine: () => ({
    then: (callback) => callback(),
  }),
}));

jest.mock("@tsparticles/slim", () => ({
  loadSlim: () => Promise.resolve(),
}));

test("renders the home navigation links", () => {
  render(
    <HelmetProvider>
      <MemoryRouter
        initialEntries={["/"]}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
});
