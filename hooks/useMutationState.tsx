"use client"
import { useMutation } from "convex/react";
import { useState } from "react";

export const useMutationState = (mutationRun: any) => {
  const [pending, setPending] = useState(false);

  const mutationFn = useMutation(mutationRun);

  const mutate = async (payload: any) => {
    setPending(true);

    return mutationFn(payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setPending(false));
  };
  return { mutate, pending}
};
