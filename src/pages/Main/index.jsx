import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

import Logo from "../../components/Logo";
import Button, { BUTTON_STATE } from "../../components/Button";
import Container from "../../components/Container";
import Count from "../../components/Count";
import Img from "../../components/Img";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

import "./Main.css";

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

const SB = {
  project: import.meta.env.VITE_SUPABASE_URL,
  key: import.meta.env.VITE_SUPABASE_ANON_KEY,
  table: 'counter',
}

export default function Main() {
  const [currentCount, setCurrentCount] = useState(1);
  const [maxCount, setMaxCount] = useState(10);
  const [userCount, setUserCount] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  
  const btnState =
    currentCount < maxCount ? BUTTON_STATE.live : BUTTON_STATE.sold;

  useEffect(() => {
    const supabase = createClient(SB.project, SB.key);
    
    async function getCounter() {
      try {
        const counterTable = await supabase.from(SB.table).select();
        const counterData = counterTable?.data[0];

        if (!counterData) return

        const handleRecordUpdated = (update) => {
          setCurrentCount(update.new.current_value)
          setMaxCount(update.new.max_value)
        }
                
        supabase
          .channel(`public:${SB.table}:id=eq.${counterData.id}`)
          .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: SB.table, filter: `id=eq.${counterData.id}` }, handleRecordUpdated)
          .subscribe()

        setCurrentCount(counterData.current_value)
        setMaxCount(counterData.max_value)
      } catch (err) {
        console.error(err)
      }
    }
    
    getCounter()
  }, [])

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
            <Count current={currentCount} max={maxCount} />
            <Button state={btnState} className="main-cta" />
            <Button onClick={handleClaim} state={BUTTON_STATE.claim} />
          </div>
        </main>
        <Footer />
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          count={userCount}
          maxCount={maxCount - currentCount}
          onChange={setUserCount}
        />
      </Container>
    </div>
  );
}
