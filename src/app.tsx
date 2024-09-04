import { Button } from "./components";

const variants = [
  "fill-primary",
  "fill-destructive",
  "outline",
  "text-primary",
  "text-destructive",
] as const;
const sizes = ["medium", "small"] as const;

function App() {
  return (
    <table className="variant-table">
      <thead>
        <tr>
          <th></th>
          {variants.map((intent) => (
            <th scope="col">{intent || "default"}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) => (
          <tr>
            <th scope="row">{size}</th>
            {variants.map((variant) => (
              <td scope="col">
                <Button
                  {...(variant && { variant: variant })}
                  {...(size && { size })}
                >
                  Camp Button
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
