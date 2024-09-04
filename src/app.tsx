import { cx } from "class-variance-authority";
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
    <table
      className={cx(
        "relative",
        "h-max w-max",
        "self-center justify-self-center",
        "[&_:where(th,td)]:p-2"
      )}
    >
      <thead>
        <tr>
          <th></th>
          {variants.map((variant) => (
            <th scope="col">{variant}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) => (
          <tr>
            <th scope="row">{size}</th>
            {variants.map((variant) => (
              <td scope="col">
                <Button {...(variant && { variant })} {...(size && { size })}>
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

// import { Button } from "./components";

// function App() {
//   return (
//     <table className="variant-table">
//       <thead>
//         <tr>
//           <th></th>
//           {variants.map((intent) => (
//             <th scope="col">{intent || "default"}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {sizes.map((size) => (
//           <tr>
//             <th scope="row">{size}</th>
//             {variants.map((variant) => (
//               <td scope="col">
//                 <Button
//                   {...(variant && { variant: variant })}
//                   {...(size && { size })}
//                 >
//                   Camp Button
//                 </Button>
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default App;
