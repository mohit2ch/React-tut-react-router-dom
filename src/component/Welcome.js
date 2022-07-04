import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <h1>Welcome...</h1>
      <Route path='/welcome/new_user'>
        <h2>New User</h2>
      </Route>
    </>
  );
}
