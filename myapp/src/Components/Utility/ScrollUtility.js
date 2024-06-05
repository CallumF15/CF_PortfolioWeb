
///This is used to await the TaskDetails component to be rendered. It's only rendered when the user clicks, thus requiring an async function to await the render
//added scroll-margin-top: 5rem; to css
const getElementByIdAsync = (task, id) => new Promise(resolve => {
    const getElement = () => {
        const element = document.getElementById(id);
        if (element && task.reminder !== true) { //don't scroll to project if it's being closed
            resolve(element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }));
        } 
        else
            requestAnimationFrame(getElement);
    };
    getElement();
});

const scrollToElementByIDAsync = (state, id) => new Promise(resolve => {

    console.log(state, id);

    const getElement = () => {
        const element = document.getElementById(id);
        console.log(state);

        if (element && state !== true) { //don't scroll to project if it's being closed
            resolve(element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }));
        } 
        else
            requestAnimationFrame(getElement);
    };

    getElement();
});

export { getElementByIdAsync, scrollToElementByIDAsync }; 