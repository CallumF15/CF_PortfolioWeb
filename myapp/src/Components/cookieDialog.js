import React from 'react'


const CookieDialog = ({ openModal, closeModal, children }) => {
    const ref = React.useRef();

    React.useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <>
            <dialog className="dialog" ref={ref} onClose={closeModal}>
                {children}
                <div className='container'>
                    <form>
                        <p>
                            <label>
                                Cookies Terms of use:
                                <select>
                                    <option value="default">Choose…</option>
                                    <option>Brine shrimp</option>
                                    <option>Red panda</option>
                                    <option>Spider monkey</option>
                                </select>
                            </label>
                        </p>
                        <div>
                            <button value="cancel" formMethod="dialog">Cancel</button>
                            <button id="confirmBtn" value="default">Confirm</button>
                        </div>
                    </form>

                    <button onClick={closeModal}>
                        Close
                    </button>
                </div>

            </dialog>
        </>
    )
}

export default CookieDialog