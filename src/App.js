import "./assets/scss/styles.scss";
import Header from "./components/Layout/Header";
import ListNotifications from "./components/ListNotifications/index";
function App() {
  return (
    <div className="page-home">
      <Header />
      <ListNotifications />
    </div>
  );
}

export default App;
