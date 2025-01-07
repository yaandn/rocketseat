import { useContext, useEffect, useState } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../..";

export function Countdown() {
  const {
    activeCycle,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    updateSecondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSecond = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minAmount = Math.floor(currentSecond / 60);
  const secondsAmout = currentSecond % 60;

  const minutes = String(minAmount).padStart(2, "0");
  const seconds = String(secondsAmout).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          updateSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          updateSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      updateSecondsPassed(0);
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, markCurrentCycleAsFinished]);
  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
