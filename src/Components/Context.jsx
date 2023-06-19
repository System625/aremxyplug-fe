import React, { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
  // Hide navbar for authentication screens starts here
  const [hideNavbar, setHideNavbar] = useState(false);
  // Hide navbar for authentication screens ends here

  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setThirdDrop] = useState(false);
  const [fourthDrop, setFourthDrop] = useState(false);
  const [fifthDrop, setFifthDrop] = useState(false);
  const [sixthDrop, setSixthDrop] = useState(false);
  const [seventhDrop, setSeventhDrop] = useState(false);
  const [eigthDrop, setEigthDrop] = useState(false);
  const [ninethDrop, setNinethDrop] = useState(false);
  const [tenthDrop, setTenthDrop] = useState(false);
  const [eleventhDrop, setEleventhDrop] = useState(false);
  const [twelvethDrop, setTwelvethDrop] = useState(false);
  const [thirteenDrop, setThirteenDrop] = useState(false);
  const [fourteenDrop, setFourteenDrop] = useState(false);
  const [fiftheenDrop, setFiftheenDrop] = useState(false);
  const [sixteenthDrop, setSixteenthDrop] = useState(false);
  const [seventeenthDrop, setSeventeenthDrop] = useState(false);
  const [eighteenthDrop, setEighteenthDrop] = useState(false);
  const [ninteenthDrop, setNinteenthDrop] = useState(false);
  const [twentiethDrop, setTwentiethDrop] = useState(false);

  function setDropHandler() {
    setFirstDrop((prev) => !prev);
  }
  function setDropHandler2() {
    setSecondDrop((prev) => !prev);
  }
  function setDropHandler3() {
    setThirdDrop((prev) => !prev);
  }
  function setDropHandler4() {
    setFourthDrop((prev) => !prev);
  }
  function setDropHandler5() {
    setFifthDrop((prev) => !prev);
  }
  function setDropHandler6() {
    setSixthDrop((prev) => !prev);
  }
  function setDropHandler7() {
    setSeventhDrop((prev) => !prev);
  }
  function setDropHandler8() {
    setEigthDrop((prev) => !prev);
  }
  function setDropHandler9() {
    setNinethDrop((prev) => !prev);
  }
  function setDropHandler10() {
    setTenthDrop((prev) => !prev);
  }
  function setDropHandler11() {
    setEleventhDrop((prev) => !prev);
  }
  function setDropHandler12() {
    setTwelvethDrop((prev) => !prev);
  }
  function setDropHandler13() {
    setThirteenDrop((prev) => !prev);
  }
  function setDropHandler14() {
    setFourteenDrop((prev) => !prev);
  }
  function setDropHandler15() {
    setFiftheenDrop((prev) => !prev);
  }
  function setDropHandler16() {
    setSixteenthDrop((prev) => !prev);
  }
  function setDropHandler17() {
    setSeventeenthDrop((prev) => !prev);
  }
  function setDropHandler18() {
    setEighteenthDrop((prev) => !prev);
  }
  function setDropHandler19() {
    setNinteenthDrop((prev) => !prev);
  }
  function setDropHandler20() {
    setTwentiethDrop((prev) => !prev);
  }

  const hold = {
    firstDrop,
    secondDrop,
    thirdDrop,
    fourthDrop,
    fifthDrop,
    sixthDrop,
    seventhDrop,
    eigthDrop,
    ninethDrop,
    tenthDrop,
    eleventhDrop,
    twelvethDrop,
    thirteenDrop,
    fourteenDrop,
    fiftheenDrop,
    sixteenthDrop,
    seventeenthDrop,
    eighteenthDrop,
    ninteenthDrop,
    twentiethDrop,
    setDropHandler,
    setDropHandler2,
    setDropHandler3,
    setDropHandler4,
    setDropHandler5,
    setDropHandler6,
    setDropHandler7,
    setDropHandler8,
    setDropHandler9,
    setDropHandler10,
    setDropHandler11,
    setDropHandler12,
    setDropHandler13,
    setDropHandler14,
    setDropHandler15,
    setDropHandler16,
    setDropHandler17,
    setDropHandler18,
    setDropHandler19,
    setDropHandler20,

    // *****************************************
    hideNavbar,
    setHideNavbar,
    // *****************************************
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
