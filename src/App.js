import Accordion from "./components/Accordion";

import "./App.scss";
import womanImageMobile from "./assets/images/illustration-woman-online-mobile.svg";
import womanImageDesktop from "./assets/images/illustration-woman-online-desktop.svg";
import boxImageDesktop from "./assets/images/illustration-box-desktop.svg";

const faqItems = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const listItems = faqItems.map((item, index) => (
  <Accordion key={index} question={item.question} answer={item.answer} id={index}/>
));

function App() {
  return (
    <div className="App">
      <section className="faq-card-container">
        <div className="images">
          <img className="image_mobile" src={womanImageMobile} alt="" />
          <img className="image_desk" src={womanImageDesktop} alt="" />
          <img className="image_box" src={boxImageDesktop} alt="" />
        </div>
        <div className="faq-text">
          <h1>FAQ</h1>
          {listItems}
        </div>
      </section>
      {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  );
}

export default App;
