import React, {Component} from "react";
import './tuner.scss';

class Tuner extends Component{
    render() {
        return (
            <article className="defaultArticle">
                <div className="inArticleText">
                    <h4>Plac budowy</h4>
                    <p>Ta strona jest aktualnie budowana. Nie martw się, niebawem tu coś będzie :)</p>
                </div>
                {(this.props.imagep !== undefined)?<img alt="Loading" src={`./images/${this.props.imagep}`}/>:""}

            </article>
        );
    }
}

export default Tuner;