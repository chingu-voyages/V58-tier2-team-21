import Container from "../../shared/components/Container";
import { Outlet } from "react-router";
import {
  useChinguFiltering,
  type filterHookType,
} from "../../hooks/useChinguFiltering";

export default function FilterLayout() {
  const filtering: filterHookType = useChinguFiltering();

  return (
    <Outlet context={filtering} />
  )
}