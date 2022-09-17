import HelpLayout from "layout";
import { Switch, Route } from "react-router-dom";

export default function Views() {
  return (
    <Switch>
      <Route path="/">
        <HelpLayout />
      </Route>
    </Switch>
  );
}
