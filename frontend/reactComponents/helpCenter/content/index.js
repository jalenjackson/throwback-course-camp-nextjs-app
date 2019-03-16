import React from 'react';
import About from "./about";
import Account from "./account";
import CreatingACourse from "./creatingACourse";
import PrivacyPolicy from "./privacyPolicy";
import PurchaseAndRefunds from "./purchaseAndRefunds";
import TermsAndConditions from "./termsAndConditions";

const ContentCopy = props => (
  <div>
    { props.container.state.currentMenuItem === 'about' ? <About /> : null }
    { props.container.state.currentMenuItem === 'account' ? <Account /> : null }
    { props.container.state.currentMenuItem === 'creatingACourse' ? <CreatingACourse /> : null }
    { props.container.state.currentMenuItem === 'privacyPolicy' ? <PrivacyPolicy /> : null }
    { props.container.state.currentMenuItem === 'purchaseAndRefunds' ? <PurchaseAndRefunds /> : null }
    { props.container.state.currentMenuItem === 'takingACourse' ? <TakingACourse /> : null }
    { props.container.state.currentMenuItem === 'termsAndConditions' ? <TermsAndConditions /> : null }
  </div>
);

export default ContentCopy;