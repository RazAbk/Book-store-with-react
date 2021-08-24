export class LongTxt extends React.Component{

    state = {
        isLongTxtShown: false
    }

    toggle = () => {
        this.setState({isLongTxtShown: !this.state.isLongTxtShown});
    }

    render(){

        const txt = this.props.txt
        const max = this.props.max

        if(txt.length < max){
            return (<p>{txt}</p>)
        }

        return (
            <p>
                {this.state.isLongTxtShown && txt}{!this.state.isLongTxtShown && txt.substring(0,max) + '...'}
                <span onClick={this.toggle} className="show-txt">
                    <u>
                        {this.state.isLongTxtShown && ' show less'}
                        {!this.state.isLongTxtShown && ' show more'}
                    </u>
                </span>
            </p>
            )
            
    }
}