import React, {Component} from "react";
import './chords.scss';

class RenderChords extends Component {
    state = {
        scriptLoaded: false,
        scriptError: true,
        result: false,
        variations: false
    };


    componentDidMount() {
        if (this.props.result !== this.state.result) {
            this.setState({result: this.props.result});
        }
        if (this.props.variations !== this.state.variations) {
            this.setState({variations: this.props.variations});
        }
    }

    componentDidUpdate() {
        if (this.props.result !== this.state.result) {
            this.setState({result: this.props.result});
        }
        if (this.props.variations !== this.state.variations) {
            this.setState({variations: this.props.variations});
        }
    }



    render() {
        let givenResult = this.state.result;
        console.log(givenResult);
        return (
            <>
                {(givenResult !== false) ?
                    <iframe title="Chords" scrolling="no" seamless="seamless" className="uberchord-iframe" width="auto"
                            height="auto"
                            style={{
                                border: "none",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "auto",
                                height: "60vh",
                                backgroundColor: "#fff"
                            }}
                            src={`https://api.uberchord.com/v1/embed/chords?${(this.state.variations !== true)?`names`:`nameLike`}=${givenResult}#noicon`}/> : null}
            </>
        )
    }
}

class Chords extends Component {
    state = {
        inputValue: "",
        result: false,
        variations: false
    };


    getChords = (val) => {
        if (val !== null) {
            let givenValue = val.split(",");
            let resultsArray = givenValue.map((el) => el.trim().replace("b", "Bb_m").replace("h", "B_m").replace("H", "B__").replace(/(?![B])[A-Z]/g, match => `${match}__`).replace(/(?![is])(?![b])(?![m])[a-z]/g, match => `${match.toUpperCase()}_m_`));
            this.setState({
                result: resultsArray
            })

        } else {
            this.setState({
                result: false
            })
        }
        //     fetch("https://api.uberchord.com/v1/chords?names=" + resultsArray.toString())
        //         .then(resp => resp.json())
        //         .then((result) => {
        //             if (result !== false) {
        //                 this.setState({
        //                     result: result
        //                 })
        //             }
        //         })
        // } else {
        //     this.setState({
        //         result: false
        //     })
        // }
    };


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputValue.length > 0) {
            this.getChords(this.state.inputValue);
            return true;
        } else {
            this.getChords(null);
            return false;
        }
    };

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    handleCheck = (e) => {
        this.setState({
            variations: !this.state.variations
            }
        )
    };

    render() {
        return (
            <article className="defaultArticle">
                <form onSubmit={this.handleSubmit} className="inChordsForm">
                    <h3>Wyszukiwarka akordów</h3>
                    <input onChange={this.handleChange} value={this.state.inputValue} className="chordsInput"
                           type="text" placeholder="Wpisz tutaj akordy... np. C,e,A,d,F,g"/>
                    <div className="chordsInputs">
                        <input className="chordsSubmit" type="submit" value="Wyszukaj"/> <label className="chordsVariations">Wariacje &nbsp;<input type="checkbox" defaultChecked={this.state.variations} onChange={this.handleCheck} value=""/></label>
                    </div>

                    {(this.state.result !== false) ? <RenderChords result={this.state.result} variations={this.state.variations}/>: ""}
                </form>

            </article>
        );
    }
}

export default Chords;