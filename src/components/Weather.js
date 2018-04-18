import React from 'react'

//We can use whatever we want between {class => Components} or {function => Components}
//We can use whatever we want between {class => Components} or {function => Components}
//{class => Components} -> when we have to put some functionality
//{class => Components} -> when we have to put some functionality
//{function => Components} -> when we have to just render html part

/*
 class Weather extends React.Component {
     render() {
         return (
             <div>
                 { this.props.city && this.props.country && <p>Location: {this.props.city} {this.props.country}</p> }
                 { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }

                 { this.props.humidity && <p>Humidity: {this.props.humidity}</p> }

                 { this.props.description && <p>Condition: {this.props.description}</p> }

                 { this.props.error && <p>{this.props.error}</p> }
             </div>
         );
     }
 }
*/

const Weather = props => (
    <div className={'weather__info'}>
        {
            props.city && props.country && <p className={'weather__key'}>Location:
                <span className={'weather__value'}> {props.city} {props.country} </span>
            </p>
        }

        {
            props.temperature && <p className={'weather__key'}>Temperature:
                <span className={'weather__value'}> {props.temperature} </span>
            </p>
        }

        {
            props.humidity && <p className={'weather__key'}>Humidity:
                <span className={'weather__value'}> {props.humidity} </span>
            </p>
        }

        {
            props.description && <p className={'weather__key'}>Condition:
                <span className={'weather__value'}> {props.description} </span>
            </p>
        }

        {
            props.error &&<p className={'weather__key'}>
                <span className={'weather__error'}> {props.error} </span>
            </p>
        }
    </div>
);

export default Weather