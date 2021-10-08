import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Policy from "./content/policy/Policy";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { CircularProgress, Stack } from "@material-ui/core";
export default function Layout(props) {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {auth.loading ? (
        <Stack
          sx={{
            width: "100%",
            height: "3000px",
            backgroundColor: "#74737361",
            position: "absolute",
            zIndex: 5,
          }}
        >
          <CircularProgress
            color="primary"
            sx={{ position: "absolute", left: "50%", top: "250px" }}
          />
        </Stack>
      ) : null}
      <Navbar />
      <Header />
      {props.children}
      <Policy />
      <Footer />
    </div>
  );
}
