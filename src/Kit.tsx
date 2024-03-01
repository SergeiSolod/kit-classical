import { FC, useState, useEffect } from "react";
import styles from "./Kit.module.scss";
import Navigation from "src/kit/navigation/Navigation";
import SelectsPage from "src/components/SelectsPage";
import InputsPage from "src/components/InputsPage";
import ButtonsPage from "src/components/ButtonsPage";
import PreloaderPage from "src/components/PreloaderPage";
import AccordionPage from "src/components/AccordionPage";
import MessagesPage from "src/components/MessagesPage";
import ModalPage from "src/components/ModalPage";
import PaginationPage from "src/components/PaginationPage";
import SwitchPage from "src/components/SwitchPage";
import PopupPage from "src/components/PopupPage";
import LanguagesPage from "src/components/LanguagesPage";
import TablesPage from "src/components/TablesPage";
import GraphsPage from "src/components/GraphsPage";
import CalendarsPage from "src/components/CalendarsPage";
import NavigationPage from "src/components/NavigationPage";
import DropPage from "src/components/DropPage";
import localized from "src/helpers/localized";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Kit: FC = () => {
  const [page, setPage] = useState("inputs");

  useEffect(() => {
    localized.setLanguage("en");
  }, []);

  return (
    <div className={styles.wrapper}>
      <Navigation
        items={[
          "inputs",
          "buttons",
          "selects",
          "preloader",
          "accordion",
          "messages",
          "modal",
          "pagination",
          "switch",
          "popup",
          "languages",
          "tables",
          "graphs",
          "calendars",
          "drop",
          "navigation",
        ]}
        page={page}
        setPage={setPage}
      />
      <SwitchTransition mode="out-in">
        <CSSTransition key={page} timeout={600} classNames="fade">
          {page === "inputs" ? (
            <InputsPage />
          ) : page === "buttons" ? (
            <ButtonsPage />
          ) : page === "selects" ? (
            <SelectsPage />
          ) : page === "preloader" ? (
            <PreloaderPage />
          ) : page === "accordion" ? (
            <AccordionPage />
          ) : page === "messages" ? (
            <MessagesPage />
          ) : page === "modal" ? (
            <ModalPage />
          ) : page === "pagination" ? (
            <PaginationPage />
          ) : page === "switch" ? (
            <SwitchPage />
          ) : page === "popup" ? (
            <PopupPage />
          ) : page === "languages" ? (
            <LanguagesPage />
          ) : page === "tables" ? (
            <TablesPage />
          ) : page === "graphs" ? (
            <GraphsPage />
          ) : page === "calendars" ? (
            <CalendarsPage />
          ) : page === "drop" ? (
            <DropPage />
          ) : page === "navigation" ? (
            <NavigationPage />
          ) : (
            <div />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Kit;
