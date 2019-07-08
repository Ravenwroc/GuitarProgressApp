import React, {Component} from "react";
import './article.scss';
class Article extends Component{
    render() {
        return(
            <article className="defaultArticle">
                <div className="inArticleText">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.content}</p>
                </div>
                {(this.props.imagep !== undefined)?<img alt="Loading" src={`./images/${this.props.imagep}`}/>:""}

            </article>
        )
    }
}
export default Article;