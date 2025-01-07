import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  markAsFinishedAction,
  stopCycleAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  updateSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  stopCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => activeCycleId === cycle.id);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    // setCycles((state) => [...state, newCycle]);
    //setActiveCycleId(id);
    setAmountSecondsPassed(0);
  }

  function stopCycle() {
    dispatch(stopCycleAction(activeCycleId));
  }

  function markCurrentCycleAsFinished() {
    dispatch(markAsFinishedAction(activeCycleId));
  }

  function updateSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        updateSecondsPassed,
        createNewCycle,
        stopCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
