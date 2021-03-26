import "./styles.css";
import IMAGE from "./react-image.jpg";
import IMAGE2 from "./skyscraper.webp";
export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template </h1>
      <h2>Rendering a .jpg with webpack</h2>
      <img src={IMAGE} alt="" width="300" height="300" />
      <h2>Rendering a .webp with webpack</h2>
      <img src={IMAGE2} alt="" width="300" height="300" />
    </>
  );
};
