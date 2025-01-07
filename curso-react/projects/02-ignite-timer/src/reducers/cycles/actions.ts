import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  STOP_CYCLE = "STOP_CYCLE",
  MARK_CYCLE_AS_FINISHED = "MARK_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  };
}

export function stopCycleAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.STOP_CYCLE,
    payload: { activeCycleId },
  };
}

export function markAsFinishedAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED,
    payload: { activeCycleId },
  };
}
