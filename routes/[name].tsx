/** @jsx h */
import { h, PageProps } from "../client_deps.ts";

export default function Greet(props: PageProps) {
  return (
    <div>
      <p>Hello {props.params.name}</p>
    </div>
  );
}
