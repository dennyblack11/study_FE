import { useEffect, useState } from "react";
import cron from "node-cron";
import toast, { Toaster } from "react-hot-toast";
import { createStudy, setElapsed } from "../../api/studyAPI";
import { useNavigate, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { getOneStudy } from "../../hooks/studyHooks";
import moment from "moment";

export const Study = () => {
  const [dur, setDur] = useState(1);
  const [int, setInt] = useState(1);
  const [breakDur, setBreakDur] = useState(1);
  const [click, setClicked] = useState(false);

  const nav = useNavigate();

  const { id } = useParams();
  const { data } = getOneStudy(id!);

  useEffect(() => {
    if (click) {
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          toast(`This break will last for ${breakDur} minutes`, {
            duration: breakDur * 1000 * 60,
          });
          clearInterval(interval);
        }, breakDur * 60 * 1000);
        clearTimeout(timeout);
      }, int * 60 * 1000);
    }
  }, [id]);

  const onlyStudy = dur * 60;

  const targetDate = moment().add(
    onlyStudy + (onlyStudy / int) * breakDur,
    "minutes"
  );

  console.log(targetDate, "t");

  console.log(targetDate, "d");

  return (
    <div>
      {" "}
      {!id ? (
        <div className=" h-screen   flex justify-center items-center">
          <div className="space-y-6 w-[40%]">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Study duration in hours
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="number"
                  autoComplete="email"
                  value={dur}
                  onChange={(e) => setDur(+e.target.value)}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Break intervals in minutes
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="number"
                  autoComplete="email"
                  value={int}
                  onChange={(e) => setInt(+e.target.value)}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Break duration in minutes
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="number"
                  autoComplete="email"
                  value={breakDur}
                  onChange={(e) => setBreakDur(+e.target.value)}
                  required
                  className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  createStudy(
                    {
                      studyDuration: dur,
                      breakDuration: breakDur,
                      breakInterval: int,
                    },
                    JSON.parse(localStorage.getItem("ID")!)
                  ).then(async (res) => {
                    console.log(res);
                    localStorage.setItem(
                      `time ${res?._id}`,
                      JSON.stringify(targetDate)
                    );
                    setClicked(true);
                    nav(`/dashboard/study/${res?._id}`);
                  });
                }}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>

              <Toaster position="top-center" reverseOrder={false} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Countdown
            date={Date.parse(JSON.parse(localStorage.getItem(`time ${id!}`)!))!}
            renderer={({ hours, minutes, seconds, completed }) => {
              if (completed) {
                setElapsed(id!);

                nav(`/dashboard/lesson/${id!}`);
                return <p>Time's up!</p>;
              } else {
                return (
                  <>
                    <div className="flex flex-col  w-full py-10 text-lg items-center">
                      Study session on going...
                      <p className="text-[40px] mt-10 ">
                        Time remaining: {hours}:{minutes}:{seconds}
                      </p>
                    </div>
                  </>
                );
              }
            }}
          />
        </>
      )}
    </div>
  );
};
