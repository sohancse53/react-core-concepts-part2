export default function Post({post}){
   const {body,title} = post;
    return(
        <div className="borderedCard">
            <h5>Title: {title}</h5>
            <p>{body} </p>
        </div>
    )
}