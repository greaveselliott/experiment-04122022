import { styled } from "./theme";

export const LayoutGrid = styled("div", {
  display: "grid",
  gridTemplateAreas: `
        navigation thread 
        navigation form
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
