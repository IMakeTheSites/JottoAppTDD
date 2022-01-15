// receive success state as a prop
/**
 * @function
 * @returns {JSX.Element} - REndered component (or null if success prop is false)
 * 
 */
export default (props) => {
        if (props.success) {
            return (
                <div data-test="component-congrats">
                <span data-test="congrats-message">
                Congratulations! You guessed the word!
                </span>
                </div>
            );
        } else {
            return (
                <div data-test="component-congrats" />
            )
        }
    <div />

}