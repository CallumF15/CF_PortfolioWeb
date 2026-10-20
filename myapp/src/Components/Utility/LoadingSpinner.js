import "../../Styles/Projects/LoadingSpinner.scss";

const LoadingSpinner = ({ message = "Loading projects..." }) => {
    return (
        <div
            className="loading-state"
            role="status"
            aria-live="polite"
        >
            <div className="loading-spinner" aria-hidden="true">
                <span className="loading-spinner-inner" />
            </div>

            <p className="loading-message">{message}</p>
            <span className="sr-only">Please wait</span>
        </div>
    );
};

export default LoadingSpinner;