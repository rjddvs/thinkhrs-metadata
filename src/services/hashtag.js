

const  hashtag = (value) => {
    
    return (value.trim() === "")?"": `#${value.replace(/[^a-zA-Z0-9]/g, "")}`;

}
export default hashtag;