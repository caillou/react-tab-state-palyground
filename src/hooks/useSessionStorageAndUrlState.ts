import { useSessionStorage } from "usehooks-ts";
import { isEqual } from "lodash";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State = string | Record<string, any> | boolean;

const useSearchParamValue = <T extends State>(key: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stringValue = searchParams.get(key);
  const searchParamsValue = stringValue ? (JSON.parse(stringValue) as T) : null;

  const setSearchParamsValue = (value: T) => {
    const newUrlSearchParams = new URLSearchParams(searchParams);
    newUrlSearchParams.set(key, JSON.stringify(value));
    setSearchParams(newUrlSearchParams);
  };

  return [searchParamsValue, setSearchParamsValue] as const;
};

export const useSessionStorageAndUrlState = <T extends State>({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue: T;
}) => {
  const [sessionStorageValue, setSessionStorageValue] = useSessionStorage(
    key,
    defaultValue,
  );
  const [searchParamValue, setSearchParamValue] = useSearchParamValue<T>(key);

  const isInSync = isEqual(searchParamValue, sessionStorageValue);

  useEffect(() => {
    if (isInSync) return;
    if (searchParamValue === null) {
      setSearchParamValue(sessionStorageValue);
      return;
    }
    setSessionStorageValue(searchParamValue);
  }, [
    isInSync,
    searchParamValue,
    sessionStorageValue,
    setSearchParamValue,
    setSessionStorageValue,
  ]);

  const set = (value: T | ((prev: T) => T)) => {
    if (typeof value === "function") {
      const newValue = value(sessionStorageValue);
      setSessionStorageValue(newValue);
      setSearchParamValue(newValue);
      return;
    }
    setSessionStorageValue(value);
    setSearchParamValue(value);
  };

  return [sessionStorageValue, set] as const;
};
