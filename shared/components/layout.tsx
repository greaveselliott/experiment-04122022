import { styled } from "./theme";

export const LayoutGrid = styled("div", {
  display: "grid",
  width: "100vw",
  gridTemplateRows: "calc(100vh - 200px) 200px",
  gridTemplateColumns: "200px auto",
  gridTemplateAreas: `
    "navigation thread" 
    "navigation form"
  `,
});

export const LayoutNavigation = styled("div", {
  gridArea: "navigation",
});

export const LayoutThread = styled("div", {
  gridArea: "thread",
});

export const LayoutForm = styled("div", {
  gridArea: "form",
});
