import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/Button";
import { Timer } from "../components/Timer";
import * as React from "react";
import { TimerConfigModal } from "../components/TimerConfigModal";
import { AppContext, AppProvider } from "../context/AppContext";

const Home: NextPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-4 flex justify-between items-center py-4 md:px-0">
        <div className="text-lg font-bold">clearfocus</div>
        <nav>
          <Button size="large">Buy me a coffee</Button>
        </nav>
      </header>
      <main className="">
        <AppContext.Consumer>
          {(values) => {
            return (
              <>
                {open ? (
                  <TimerConfigModal
                    seconds={values.seconds}
                    minutes={values.minutes}
                    setSeconds={values.setSeconds}
                    setMinutes={values.setMinutes}
                    setOpen={setOpen}
                  />
                ) : null}
                <Timer
                  openModal={openModal}
                  defaultSeconds={values.seconds}
                  defaultMinutes={values.minutes}
                />
              </>
            );
          }}
        </AppContext.Consumer>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
