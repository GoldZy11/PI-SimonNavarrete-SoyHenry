import "../../styles/Modal.css";

export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";
    const showHideModalClassName = show
        ? "modal-main display-flex"
        : "modal-main display-none";
    console.log(show);

    return (
        <>
            <div className={showHideClassName} onClick={handleClose}></div>
            <section className={showHideModalClassName}>
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </>
    );
};
