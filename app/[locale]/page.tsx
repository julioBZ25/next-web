import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useLocale, useTranslations } from "next-intl";

const MainApp = () => {
  const t = useTranslations("Lang");
  const locale = useLocale();

  return (
    <>
      <Navbar
        messages={{
          About: t("Navbar.Menu.About"),
          Skills: t("Navbar.Menu.Skills"),
          Projects: t("Navbar.Menu.Projects"),
          Contact: t("Navbar.Contact"),
        }}
        locale={locale}
      />
      <Main
        messages={{
          Intro: t("Main.Intro"),
          Span: t("Main.Span"),
          Body: t("Main.Body"),
          Button: t("Main.Button"),
        }}
        locale={locale}
      />
      <About
        messages={{
          About: t("About.About"),
          Title: t("About.Title"),
          Subtitle: t("About.Subtitle"),
          Body: t("About.Body"),
        }}
      />
      <Skills
        messages={{
          Title: t("Skills.Title"),
          Subtitle: t("Skills.Subtitle"),
        }}
      />
      <Projects
        messages={{
          Title: t("Projects.Title"),
          Subtitle: t("Projects.Subtitle"),
          Descriptions: {
            Eatable: t("Projects.Descriptions.Eatable"),
            Tweetable: t("Projects.Descriptions.Tweetable"),
            Doable: t("Projects.Descriptions.Doable"),
            Expensable: t("Projects.Descriptions.Expensable"),
            Nextweb: t("Projects.Descriptions.Nextweb"),
          },
          Button: t("Projects.Button"),
        }}
      />
      <Contact
        messages={{
          Title: t("Contact.Title"),
          Subtitle: t("Contact.Subtitle"),
          Card: {
            Title: t("Contact.Card.Title"),
            Description: t("Contact.Card.Description"),
            Span: t("Contact.Card.Span"),
          },
          Form: {
            Name: t("Contact.Form.Name"),
            Phone: t("Contact.Form.Phone"),
            Email: t("Contact.Form.Email"),
            Subject: t("Contact.Form.Subject"),
            Message: t("Contact.Form.Message"),
            Button: t("Contact.Form.Button"),
          },
        }}
      />
    </>
  );
};

export default MainApp;
