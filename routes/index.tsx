import { Head } from "$fresh/runtime.ts";
import Marcador from "../islands/Marcador.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div style="display: flex; flex-direction: column;">
        <Marcador></Marcador>
      </div>
    </>
  );
}
