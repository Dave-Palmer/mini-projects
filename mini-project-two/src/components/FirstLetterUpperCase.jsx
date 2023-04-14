
function FirstLetterUpperCase(props) {
    let { word } = props

    return (
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
}

export default FirstLetterUpperCase