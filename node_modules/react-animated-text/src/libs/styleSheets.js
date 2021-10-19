export const createSheet = id => {
  removeSheet(id);
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', id);
  document.head.appendChild(styleElement);
};

export const removeSheet = id => {
  const styleElement = document.getElementById(id);
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
};

export const insertStyle = (id, style) => {
  const styleElement = document.getElementById(id);
  const styleSheet = styleElement.sheet;
  styleSheet.insertRule(style);
};
