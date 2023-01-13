import Logo from "../../components/Logo";
import Button, { BUTTON_STATE } from "../../components/Button";
import Container from "../../components/Container";
import Count from "../../components/Count";
import Img from "../../components/Img";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import "./Main.css";
import { useState } from "react";

const MOCKS = {
  img: {
    src: "https://via.placeholder.com/480",
    alt: "this is scam",
  },
  info: [
    {
      id: 1,
      text: "By holding this NFT you become partner of the project and receive passive income. And other interesting benefits in the future.",
    },
    {
      id: 2,
      text: "If you mint 3+ NFT, you will be airdropped one of 333 Matsuri Girls NFT",
    },
  ],
  count: {
    current: 0,
    max: 4,
  },
};

export default function Main() {
  const [count, setCount] = useState(MOCKS.count.current);
  const [modalOpen, setModalOpen] = useState(false);

  const btnState =
    count < MOCKS.count.max ? BUTTON_STATE.live : BUTTON_STATE.sold;

  const handleClaim = () => {
    setModalOpen(true);
  };

  return (
    <div className="main">
      <Container>
        <Logo />
        <main className="main-content">
          <div className="main-img">
            <Img src={MOCKS.img.src} alt={MOCKS.img.alt} />
          </div>
          <div className="main-text">
            <div className="main-info">
              {MOCKS.info.map((item) => (
                <p className="main-info-item" key={item.id}>
                  {item.text}
                </p>
              ))}
            </div>
            <Count current={count} max={MOCKS.count.max} />
            <Button state={btnState} className="main-cta" />
            <Button onClick={handleClaim} state={BUTTON_STATE.claim} />
          </div>
        </main>
        <Footer />
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          count={count}
          maxCount={MOCKS.count.max}
          onChange={setCount}
        />
      </Container>
    </div>
  );
}
