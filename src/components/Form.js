import React from 'react'

/*
 class Form extends React.Component {
     render() {
         return (
             <div>
                 <form onSubmit={this.props.getWeather}>
                     <input type="text" name={'city'} placeholder={'City...'}/>
                     <input type="text" name={'country'} placeholder={'Country...'}/>
                     <button>Get Weather</button>
                 </form>
             </div>
         );
     }
 }
*/

// We are using new way of defining Components using function method.

// In this method we have to return something using keyword inside brackets{...}

// In Weather.js Component we does not return any thing and simply use props => (<div>...</div>)

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name={'city'} placeholder={'City...'}/>
                <input type="text" name={'country'} placeholder={'Country...'}/>
                <button>Get Weather</button>
            </form>
        </div>
    );
}

export default Form