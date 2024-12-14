
const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div 
            className={className}
            style={{...style, display: "block", background: "#134544", borderRadius: "50%", paddingTop:"1px", position: "absolute", left:"1%", zIndex: "4"}}
            onClick={onClick}
        />

        
    )
}
const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div 
            className={className}
            style={{...style, display: "block", background: "#134544", borderRadius: "50%", paddingTop:"1px", position: "absolute", right:"1%", zIndex: "4"}}
            onClick={onClick}
        />

        
    )
}

export {PrevArrow, NextArrow};