const styles = {
  box: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '47%',
    transform: 'translate(-50%, -30%)',
    // 'min-height': '90vh',
    width: '90%',
    bgcolor: 'rgb(166,166,166, .9)',
    boxShadow: 24,
    p: 4,
    margin: '50px',
    border: '50px',
    borderColor: 'transparent',
    borderRadius: '25px',
  },
  modal: `position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;`,
  backdrop: `z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;`,
};

export default styles;
