import React from 'react';

const TabButton = ({ text, clickTab, tabStyle }) => {
  return <button style={{borderBottomWidth: tabStyle}} onClick={() => clickTab(text)}>{text}</button>;
};

export default TabButton;
