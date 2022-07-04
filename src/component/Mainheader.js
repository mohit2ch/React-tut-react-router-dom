import { Link } from "react-router-dom";
import classes from "./Mainheader.module.css";
export default function Mainheader() {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
