import "styled-components";
import type { defaultTheme } from "../styles/themes/default";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends defaultTheme {}
}
