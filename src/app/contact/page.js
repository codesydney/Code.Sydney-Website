import PageChange from "../components/shared/PageChange";
import ContactPageHeader from "./ContactPageHeader";
import ContactPageForm from "./ContactPageForm";
import Consultation from "./Consultation";

export default function Contact() {
  return (
    <div className="z-50">
      <PageChange />
      <ContactPageHeader />
      <ContactPageForm />
      <Consultation />
    </div>
  );
}
