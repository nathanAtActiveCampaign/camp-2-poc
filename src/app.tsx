import { Button, NewButton } from "./components";

const intents = [undefined, "primary", "secondary"] as const;
const sizes = [undefined, "medium", "small"] as const;

function App() {
  return (
    <table className="variant-table">
      <thead>
        <tr>
          <th></th>
          {intents.map((intent) => (
            <th scope="col">{intent || "default"}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) => (
          <tr>
            <th scope="row">{size || "default"}</th>
            {intents.map((intent) => (
              <td scope="col">
                <Button {...(intent && { intent })} {...(size && { size })}>
                  {intent || "default"} button
                </Button>
              </td>
            ))}
          </tr>
        ))}
        {[""].map((size) => (
          <tr>
            <th scope="row">{size || "default"}</th>
            <td>
              <NewButton variant={"fill-action"}>Button</NewButton>
              <NewButton variant={"fill-destructive"}>Button</NewButton>
            </td>
            {/* {["fill-active", "fill-danger"].map((intent) => (
              <td scope="col">
                <NewButton {...(intent && { intent })} {...(size && { size })}>
                  {intent || "default"} button
                </NewButton>
              </td>
            ))} */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
